import Header from "./Header";
import EntityLink from "./EntityLink";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
  },
};

const EntityList = ({ title, entityIds, selectEntity, useEntity }) => (
  <div style={styles.main}>
    <Header rank={2}>{title}</Header>
    {entityIds.length > 0 ? (
      entityIds.map((residentId) => (
        <EntityLink
          key={residentId}
          entityId={residentId}
          selectEntity={selectEntity}
          useEntity={useEntity}
        />
      ))
    ) : (
      <Header rank={3}>None</Header>
    )}
  </div>
);

export default EntityList;
