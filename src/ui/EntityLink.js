import Header from "./Header";

const PersonLink = ({ entityId, selectEntity, useEntity }) => {
  const person = useEntity(entityId);

  return (
    <Header rank={3} onClick={() => selectEntity(entityId)}>
      {person ? person.name : "Loading..."}
    </Header>
  );
};

export default PersonLink;
