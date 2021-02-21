import { usePerson } from "./api";
import Header from "./ui/Header";

const PersonLink = ({ personId, selectPerson }) => {
  const person = usePerson(personId);

  return (
    <Header rank={3} onClick={() => selectPerson(personId)}>
      {person ? person.name : "Loading..."}
    </Header>
  );
};

export default PersonLink;
