import React from "react";
import { MainLogo } from "./Styles";
import PropTypes from "prop-types";

const Logo = ({ logo, text }) => {
    return <MainLogo src={logo} alt={text} />
}

export default Logo;

Logo.propTypes = {
    logo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}