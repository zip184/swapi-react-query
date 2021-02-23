import { usePlanet, usePerson, useFilm } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
import EntityList from "./ui/EntityList";

const fields = [
  ["Terrain", "terrain"],
  ["Climate", "climate"],
  ["Diameter", "diameter"],
  ["Population", "population"],
];

const PlanetPage = ({ planetId, selectPerson, selectFilm }) => {
  const planet = usePlanet(planetId);

  return (
    <EntityPage>
      <Header rank={1}>{planet ? planet.name : "Loading..."}</Header>
      <FactSheet title="Planet Facts" entity={planet} fields={fields} />
      {planet && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <EntityList
            title="Movies"
            entityIds={planet.filmIds}
            selectEntity={selectFilm}
            useEntity={useFilm}
          />
          <EntityList
            title="Residents"
            entityIds={planet.residentIds}
            selectEntity={selectPerson}
            useEntity={usePerson}
          />
        </div>
      )}
    </EntityPage>
  );
};

export default PlanetPage;
