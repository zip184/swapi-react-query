import { usePlanets } from "./api";
import Header from "./ui/Header";

const PlanetListPage = ({ selectPlanet }) => {
  const planets = usePlanets();

  let main = "Loading...";
  if (planets) {
    main = planets.map((planet) => (
      <Header
        key={planet.name}
        rank={2}
        onClick={() => selectPlanet(planet.planetId)}
      >
        {planet.name}
      </Header>
    ));
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
        {main}
      </div>
    </div>
  );
};

export default PlanetListPage;
