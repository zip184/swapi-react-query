import { usePerson, useSpecies } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityList from "./ui/EntityList";

const fields = [
  ["Birth Year", "birth_year"],
  ["Gender", "gender"],
  ["Eye Color", "eye_color"],
  ["Hair Color", "hair_color"],
  ["Skin Tone", "skin_color"],
  ["Height", "height"],
  ["Mass", "mass"],
];

const PersonPage = ({ personId, selectSpecies }) => {
  const person = usePerson(personId);

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
        <Header rank={1}>{person ? person.name : "Loading..."}</Header>
        <FactSheet title="Character Facts" entity={person} fields={fields} />
        {person && (
          <EntityList
            title="Species"
            entityIds={person.speciesIds}
            selectEntity={selectSpecies}
            useEntity={useSpecies}
          />
        )}
      </div>
    </div>
  );
};

export default PersonPage;
