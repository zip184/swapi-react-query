import colors from "./colors";
import PlanetListPage from "./PlanetListPage";
import PlanetPage from "./PlanetPage";
import PersonPage from "./PersonPage";
import SpeciesPage from "./SpeciesPage";

const getCurrentPage = (page, id, events) => {
  const { selectPlanet, selectPerson, selectSpecies } = events;

  switch (page) {
    case "planet":
      return <PlanetPage planetId={id} selectPerson={selectPerson} />;
    case "person":
      return <PersonPage personId={id} selectSpecies={selectSpecies} />;
    case "species":
      return <SpeciesPage speciesId={id} />;
    case "home":
    default:
      return <PlanetListPage selectPlanet={selectPlanet} />;
  }
};

const MainPage = ({ page, id, selectEvents }) => (
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
      {getCurrentPage(page, id, selectEvents)}
    </div>
  </div>
);

export default MainPage;
