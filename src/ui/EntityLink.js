import Header from "./Header";

const nameFields = ["name", "title"];

const getEntityName = (entity) => {
  for (let i = 0; i < nameFields.length; i++) {
    const name = entity[nameFields[i]];
    if (name) {
      return name;
    }
  }

  return null;
};

const PersonLink = ({ entityId, selectEntity, useEntity }) => {
  const entity = useEntity(entityId);

  return (
    <Header rank={3} onClick={selectEntity && (() => selectEntity(entityId))}>
      {entity ? getEntityName(entity) : "Loading..."}
    </Header>
  );
};

export default PersonLink;
