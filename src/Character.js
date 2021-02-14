import { usePerson } from "./api";
import Header from "./ui/Header";

const Character = ({ characterId }) => {
  const person = usePerson(characterId);

  return <Header rank={3}>{person ? person.name : "Loading..."}</Header>;
};

export default Character;
