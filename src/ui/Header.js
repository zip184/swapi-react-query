const fontSizes = ["70px", "30px", "22px"];
const margins = ["24px", "12px", "6px"];
const fontWeights = [700, 700, 400];

const Header = ({ children, rank }) => (
  <div
    style={{
      textAlign: "center",
      fontSize: fontSizes[rank - 1],
      fontWeight: fontWeights[rank - 1],
      margin: margins[rank - 1],
    }}
  >
    {children}
  </div>
);

export default Header;
