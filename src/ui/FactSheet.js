import Header from "./Header";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "4px",
  },
  label: {
    width: "130px",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: "8px",
  },
  value: {},
};

const FactSheet = (props) => {
  const { title, entity, fields } = props;

  return (
    <div style={styles.main}>
      <Header rank={2}>{title}</Header>
      {fields.map(([label, key]) => (
        <div key={key} style={styles.row}>
          <span style={styles.label}>{label}:</span>
          <span style={styles.value}>{entity[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default FactSheet;
