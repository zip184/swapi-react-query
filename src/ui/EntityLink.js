import Header from "./Header";

const PersonLink = ({ entityId, selectEntity, useEntity }) => {
  const entity = useEntity(entityId);

  return (
    <Header rank={3} onClick={selectEntity && (() => selectEntity(entityId))}>
      {entity ? entity.name : "Loading..."}
    </Header>
  );
};

export default PersonLink;
