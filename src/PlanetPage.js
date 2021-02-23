import { usePlanet, usePerson } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityList from "./ui/EntityList";

const fields = [
  ["Terrain", "terrain"],
  ["Climate", "climate"],
  ["Diameter", "diameter"],
  ["Population", "population"],
];

const PlanetPage = ({ planetId, selectPerson }) => {
  const planet = usePlanet(planetId);

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          height: "100%",
        }}
      >
        <Header rank={1}>{planet ? planet.name : "Loading..."}</Header>
        <FactSheet title="Planet Facts" entity={planet} fields={fields} />
        <br />
        <br />
        {planet && (
          <EntityList
            title="Residents"
            entityIds={planet.residentIds}
            selectEntity={selectPerson}
            useEntity={usePerson}
          />
        )}
      </div>
    </div>
  );
};

export default PlanetPage;
