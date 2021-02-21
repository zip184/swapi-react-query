import { useQuery, useQueryClient } from "react-query";
import { sortByProp } from "./utils";

const getLastId = (url) => {
  const parts = url.split("/").filter((p) => p.length > 0);
  return +parts[parts.length - 1];
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

// Planets

const mapPlanetId = (planet) => ({
  planetId: getLastId(planet.url),
  ...planet,
});

const mapResidentIds = (planet) => ({
  ...planet,
  residentIds: planet.residents.map(getLastId),
});

const fetchPlanets = () =>
  fetchPaged("/planets").then((planets) =>
    sortByProp(planets.map(mapPlanetId).map(mapResidentIds), "name")
  );

const fetchPlanet = (planetId) =>
  fetch(`/planets/${planetId}/`)
    .then((res) => res.json())
    .then((p) => mapPlanetId(mapResidentIds(p)));

export const usePlanets = () => {
  const { data } = useQuery("planets", fetchPlanets);
  return data;
};

export const usePlanet = (planetId) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["planet", planetId], () => fetchPlanet(planetId), {
    initialData: () =>
      queryClient.getQueryData("planets")?.find((p) => p.planetId === planetId),
  });

  return data;
};

// People

export const usePerson = (personId) => {
  const fetchPerson = () =>
    fetch("/people/" + personId).then((res) => res.json());

  const { data } = useQuery(["person", personId], fetchPerson);

  return data;
};
