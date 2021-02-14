import { usePlanet } from "./api";
import Header from "./ui/Header";
import Character from "./Character";

const fields = [
  ["Terrain", "terrain"],
  ["Climate", "climate"],
  ["Diameter", "diameter"],
  ["Population", "population"],
];

const Planet = ({ planetId }) => {
  const planet = usePlanet(planetId);

  let facts = null;
  if (planet) {
    facts = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header rank={2}>Planet Facts</Header>
        {fields.map(([label, key]) => (
          <div
            key={key}
            style={{ display: "flex", flexDirection: "row", margin: "4px" }}
          >
            <span
              style={{
                width: "130px",
                fontWeight: "bold",
                textAlign: "right",
                paddingRight: "8px",
              }}
            >
              {label}:
            </span>
            <span>{planet[key]}</span>
          </div>
        ))}
      </div>
    );
  }

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
            <Character key={residentId} characterId={residentId} />
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
        {facts}
        <br />
        <br />
        {residents}
      </div>
    </div>
  );
};

export default Planet;
