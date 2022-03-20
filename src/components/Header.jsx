import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor }) => {
    const style = {
        backgroundColor: bgColor,
    };

  return (
    <div style={style}>
      <h2>{text}</h2>
    </div>
  );
};

console.log(<Header />);

Header.defaultProps = {
  text: "I am default props!",
  bgColor: 'hsl(80deg 100% 50%)',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
