import { useState } from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import colors from "./colors";

const sidebarWidth = "240px";

const initialAppState = {
  page: "home",
};

const App = () => {
  const [clientState, setClientState] = useState(initialAppState);

  const selectPlanet = (id) => setClientState({ page: "planet", id });
  const selectPerson = (id) => setClientState({ page: "person", id });
  const selectSpecies = (id) => setClientState({ page: "species", id });
  const selectFilm = (id) => setClientState({ page: "film", id });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      <span
        style={{
          width: sidebarWidth,
        }}
      >
        <Sidebar selectPlanet={selectPlanet} />
      </span>
      <MainPage
        page={clientState.page}
        id={clientState.id}
        selectEvents={{ selectPlanet, selectPerson, selectSpecies, selectFilm }}
      />
    </div>
  );
};

export default App;
