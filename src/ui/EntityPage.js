const EntityPage = ({ children }) => (
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
      {children}
    </div>
  </div>
);

export default EntityPage;
