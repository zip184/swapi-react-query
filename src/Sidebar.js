import { usePlanets } from "./api";
import colors from "./colors";

const Sidebar = ({ selectPlanet }) => {
  const planets = usePlanets();

  const planetList = planets
    ? planets.map((planet) => (
        <div
          key={planet.name}
          style={{
            padding: "8px",
            fontSize: "14",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => selectPlanet(planet.planetId)}
        >
          {planet.name}
        </div>
      ))
    : "Loading...";

  return (
    <div
      style={{
        borderRight: "4px solid black",
        height: "100%",
        backgroundColor: colors.sidebar.bg,
        color: colors.sidebar.text,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          height: "100%",
        }}
      >
        {planetList}
      </div>
    </div>
  );
};

export default Sidebar;
