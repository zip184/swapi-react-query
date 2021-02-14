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
        <Sidebar
          selectPlanet={(id) => setClientState({ page: "planet", id })}
        />
      </span>
      <MainPage page={clientState.page} id={clientState.id} />
    </div>
  );
};

export default App;
