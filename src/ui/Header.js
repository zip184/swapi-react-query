const fontSizes = ["70px", "30px", "22px"];
const margins = ["24px", "12px", "6px"];
const fontWeights = [700, 700, 400];

const Header = ({ children, rank, style, onClick }) => {
  const rankDex = rank - 1;

  const props = {
    style: {
      textAlign: "center",
      fontSize: fontSizes[rankDex],
      fontWeight: fontWeights[rankDex],
      margin: margins[rankDex],
      ...style,
    },
  };

  if (onClick) {
    props.style.cursor = "pointer";
    props.onClick = onClick;
  }

  return <div {...props}>{children}</div>;
};

export default Header;
