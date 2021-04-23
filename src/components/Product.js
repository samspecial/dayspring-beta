import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return <li>{product}</li>;
};
export default Product;

Product.propTypes = {
  product: PropTypes.string.isRequired,
};
