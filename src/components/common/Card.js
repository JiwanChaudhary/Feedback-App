import PropTypes from "prop-types";

const Card = ({ children }) => {
  console.log(children);
  return <div style={{ color: "red" }}>{children}</div>;
};

Card.propTpes = {
  children: PropTypes.node.isRequired,
};

export default Card;
