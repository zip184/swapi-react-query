import { useSpecies } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
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
      </div>
    </div>
  );
};

export default SpeciesPage;
