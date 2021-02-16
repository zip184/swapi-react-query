import { useQuery } from "react-query";
import { sortByProp } from "./utils";

const getLastId = (url) => {
  const parts = url.split("/").filter((p) => p.length > 0);
  return +parts[parts.length - 1];
};

const fetchPlanetById = (planetId) => {
  const mapPlanetId = (planet) => ({
    planetId: getLastId(planet.url),
    ...planet,
  });

  const mapResidentIds = (planet) => ({
    ...planet,
    residentIds: planet.residents.map(getLastId),
  });

  return fetch("/planets/" + planetId)
    .then((res) => res.json())
    .then(mapPlanetId)
    .then(mapResidentIds);
};

const fetchPaged = async (uri) => {
  const res = await fetch(uri);
  const json = await res.json();

  const thisPage = json.results;

  const nextPage = json.next;
  if (nextPage) {
    const tail = await fetchPaged(nextPage);
    return [...thisPage, ...tail];
  }

  return thisPage;
};

export const usePlanets = () => {
  const mapPlanetId = (planet) => ({
    planetId: getLastId(planet.url),
    ...planet,
  });

  const { data } = useQuery("planets", () =>
    fetchPaged("/planets").then((res) =>
      sortByProp(res.map(mapPlanetId), "name")
    )
  );

  return data;
};

export const usePerson = (personId) => {
  const fetchPerson = () =>
    fetch("/people/" + personId).then((res) => res.json());

  const { data } = useQuery(["person", personId], fetchPerson);

  return data;
};

export const usePlanet = (planetId) => {
  const fetchPlanet = () => fetchPlanetById(planetId);

  const { data } = useQuery(["planet", planetId], fetchPlanet);

  return data;
};
