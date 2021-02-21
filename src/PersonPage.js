import { usePerson } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";

const fields = [
  ["Birth Year", "birth_year"],
  ["Gender", "gender"],
  ["Eye Color", "eye_color"],
  ["Hair Color", "hair_color"],
  ["Skin Tone", "skin_color"],
  ["Height", "height"],
  ["Mass", "mass"],
];

const PersonPage = ({ personId }) => {
  const person = usePerson(personId);

  // let residents = null;
  // if (planet) {
  //   const { residentIds } = planet;
  //   residents = (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <Header rank={2}>Residents</Header>
  //       {residentIds.length > 0 ? (
  //         residentIds.map((residentId) => (
  //           <CharacterLink key={residentId} characterId={residentId} />
  //         ))
  //       ) : (
  //         <Header rank={3}>None</Header>
  //       )}
  //     </div>
  //   );
  // }

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
      </div>
    </div>
  );
};

export default PersonPage;
