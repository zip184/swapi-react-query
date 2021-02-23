import { usePerson, useSpecies, useFilm } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
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

const PersonPage = ({ personId, selectSpecies, selectFilm }) => {
  const person = usePerson(personId);

  return (
    <EntityPage>
      <Header rank={1}>{person ? person.name : "Loading..."}</Header>
      <FactSheet title="Character Facts" entity={person} fields={fields} />
      {person && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <EntityList
            title="Movies"
            entityIds={person.filmIds}
            selectEntity={selectFilm}
            useEntity={useFilm}
          />
          <EntityList
            title="Species"
            entityIds={person.speciesIds}
            selectEntity={selectSpecies}
            useEntity={useSpecies}
          />
        </div>
      )}
    </EntityPage>
  );
};

export default PersonPage;
