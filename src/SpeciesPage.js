import { useSpecies } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
// import EntityList from "./ui/EntityList";

const fields = [
  ["Classification", "classification"],
  ["Designation", "designation"],
  ["Homeworld", "homeworld"],
  ["Skin Colors", "skin_colors"],
  ["Hair Colors", "hair_colors"],
  ["Eye Colors", "eye_colors"],
  ["Language", "language"],
];

const SpeciesPage = ({ speciesId }) => {
  const species = useSpecies(speciesId);

  return (
    <EntityPage>
      <Header rank={1}>{species ? species.name : "Loading..."}</Header>
      <FactSheet title="Species Facts" entity={species} fields={fields} />
      {/* {species && (
          <EntityList
            title="Species"
            entityIds={person.speciesIds}
            // selectEntity={selectPerson}
            useEntity={useSpecies}
          />
        )} */}
    </EntityPage>
  );
};

export default SpeciesPage;
