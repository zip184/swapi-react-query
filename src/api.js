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

// --------------- Planets ---------------

const mapPlanetIds = (planet) => ({
  planetId: getLastId(planet.url),
  residentIds: planet.residents.map(getLastId),
  filmIds: planet.films.map(getLastId),
  ...planet,
});

const fetchPlanets = () =>
  fetchPaged("/planets").then((planets) =>
    sortByProp(planets.map(mapPlanetIds), "name")
  );

const fetchPlanet = (planetId) =>
  fetch(`/planets/${planetId}/`)
    .then((res) => res.json())
    .then((p) => mapPlanetIds(p));

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

// ---------------

export const usePerson = (personId) => {
  const fetchPerson = () =>
    fetch("/people/" + personId)
      .then((res) => res.json())
      .then((person) => ({
        speciesIds: person.species.map(getLastId),
        filmIds: person.films.map(getLastId),
        ...person,
      }));

  const { data } = useQuery(["person", personId], fetchPerson);

  return data;
};

export const useSpecies = (speciesId) => {
  const fetchSpecies = () =>
    fetch("/species/" + speciesId)
      .then((res) => res.json())
      .then((species) => ({
        filmIds: species.films.map(getLastId),
        personIds: species.people.map(getLastId),
        ...species,
      }));

  const { data } = useQuery(["species", speciesId], fetchSpecies);

  return data;
};

export const useFilm = (filmId) => {
  const fetchFilm = () =>
    fetch("/films/" + filmId)
      .then((res) => res.json())
      .then((film) => ({
        personIds: film.characters.map(getLastId),
        planetIds: film.planets.map(getLastId),
        ...film,
      }));

  const { data } = useQuery(["film", filmId], fetchFilm);

  return data;
};
