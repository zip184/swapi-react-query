import { usePlanets } from "./api";
import Header from "./ui/Header";

const PlanetList = () => {
  const planets = usePlanets();

  let main = "Loading...";
  if (planets) {
    main = planets.map((planet) => (
      <Header key={planet.name} rank={2}>
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

export default PlanetList;
