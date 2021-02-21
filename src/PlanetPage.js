import { usePlanet } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import CharacterLink from "./CharacterLink";

const fields = [
  ["Terrain", "terrain"],
  ["Climate", "climate"],
  ["Diameter", "diameter"],
  ["Population", "population"],
];

const PlanetPage = ({ planetId }) => {
  const planet = usePlanet(planetId);

  let residents = null;
  if (planet) {
    const { residentIds } = planet;
    residents = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header rank={2}>Residents</Header>
        {residentIds.length > 0 ? (
          residentIds.map((residentId) => (
            <CharacterLink key={residentId} characterId={residentId} />
          ))
        ) : (
          <Header rank={3}>None</Header>
        )}
      </div>
    );
  }

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
        {residents}
      </div>
    </div>
  );
};

export default PlanetPage;
