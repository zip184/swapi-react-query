import colors from "./colors";
import PlanetListPage from "./PlanetListPage";
import PlanetPage from "./PlanetPage";
import PersonPage from "./PersonPage";

const getCurrentPage = (page, id, events) => {
  const { selectPlanet, selectPerson } = events;

  switch (page) {
    case "planet":
      return <PlanetPage planetId={id} selectPerson={selectPerson} />;
    case "person":
      return <PersonPage personId={id} />;
    case "home":
    default:
      return <PlanetListPage selectPlanet={selectPlanet} />;
  }
};

const MainPage = ({ page, id, selectPlanet, selectPerson }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.bg,
    }}
  >
    <h1
      style={{
        fontSize: "100px",
        textAlign: "center",
        margin: "20px 0",
        height: "20%",
        color: colors.header.text,
        backgroundColor: colors.header.bg,
      }}
    >
      Star Wars
    </h1>
    <div style={{ height: "80%" }}>
      {getCurrentPage(page, id, { selectPlanet, selectPerson })}
    </div>
  </div>
);

export default MainPage;
