import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ avatar, testimony, name, role }) => {
  return (
    <div>
      <img src={avatar} />
      <p>{testimony}</p>
      <h5>{name}</h5>
      <h6>{role}</h6>
    </div>
  );
};

export default Testimonial;

Testimonial.propTypes = {
  avatar: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
