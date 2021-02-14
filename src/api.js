import { useEffect, useState } from "react";
import { sortByProp } from "./utils";

const getLastId = (url) => {
  const parts = url.split("/").filter((p) => p.length > 0);
  return +parts[parts.length - 1];
};

const fetchPlanetById = (planetId) => () => {
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
  const getPlanets = () => fetchPaged("/planets");

  const mapPlanetId = (planet) => ({
    planetId: getLastId(planet.url),
    ...planet,
  });

  const [planets, setPlanets] = useState();

  useEffect(() => {
    if (!planets) {
      getPlanets().then((res) =>
        setPlanets(sortByProp(res.map(mapPlanetId), "name"))
      );
    }
  }, [planets]);

  return planets;
};

export const usePlanet = (planetId) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    if (!planet) {
      fetchPlanetById(planetId).then(setPlanet);
    }
  }, [planet, planetId]);

  useEffect(() => {
    if (planet && planetId !== planet.planetId) {
      setPlanet(null);
    }
  }, [planet, planetId]);

  return planet;
};

export const usePerson = (personId) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if (!person) {
      fetch("/people/" + personId)
        .then((res) => res.json())
        .then(setPerson);
    }
  }, [person, personId]);

  return person;
};
