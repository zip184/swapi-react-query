import colors from "./colors";
import PlanetList from "./PlanetList";
import Planet from "./Planet";

const getCurrentPage = (page, id) => {
  switch (page) {
    case "planet":
      return <Planet planetId={id} />;
    case "home":
    default:
      return <PlanetList />;
  }
};

const MainPage = ({ page, id }) => (
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
    <div style={{ height: "80%" }}>{getCurrentPage(page, id)}</div>
  </div>
);

export default MainPage;
