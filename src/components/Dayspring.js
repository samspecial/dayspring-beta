import React from "react";
import PropTypes from "prop-types";

const Dayspring = ({ image, title, text }) => {
  return (
    <div>
      <img src={image} />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Dayspring;

Dayspring.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
