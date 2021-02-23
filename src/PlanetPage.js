import { usePlanet, usePerson } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
import EntityList from "./ui/EntityList";

const fields = [
  ["Terrain", "terrain"],
  ["Climate", "climate"],
  ["Diameter", "diameter"],
  ["Population", "population"],
];

const PlanetPage = ({ planetId, selectPerson }) => {
  const planet = usePlanet(planetId);

  return (
    <EntityPage>
      <Header rank={1}>{planet ? planet.name : "Loading..."}</Header>
      <FactSheet title="Planet Facts" entity={planet} fields={fields} />
      {planet && (
        <EntityList
          title="Residents"
          entityIds={planet.residentIds}
          selectEntity={selectPerson}
          useEntity={usePerson}
        />
      )}
    </EntityPage>
  );
};

export default PlanetPage;
