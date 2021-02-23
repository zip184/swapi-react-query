import { useSpecies, useFilm, usePerson } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
import EntityList from "./ui/EntityList";

const fields = [
  ["Classification", "classification"],
  ["Designation", "designation"],
  ["Homeworld", "homeworld"],
  ["Skin Colors", "skin_colors"],
  ["Hair Colors", "hair_colors"],
  ["Eye Colors", "eye_colors"],
  ["Language", "language"],
];

const SpeciesPage = ({ speciesId, selectFilm, selectPerson }) => {
  const species = useSpecies(speciesId);

  return (
    <EntityPage>
      <Header rank={1}>{species ? species.name : "Loading..."}</Header>
      <FactSheet title="Species Facts" entity={species} fields={fields} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <EntityList
          title="Characters"
          entityIds={species.personIds}
          selectEntity={selectPerson}
          useEntity={usePerson}
        />
        <EntityList
          title="Movies"
          entityIds={species.filmIds}
          selectEntity={selectFilm}
          useEntity={useFilm}
        />
      </div>
    </EntityPage>
  );
};

export default SpeciesPage;
