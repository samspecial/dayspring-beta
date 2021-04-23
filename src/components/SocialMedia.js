import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SiteLink } from "./Styles";

const SocialMedia = ({ icon, text, link }) => {
    return <SiteLink to={link}><Icon src={icon} alt={text} /></SiteLink>

};

export default SocialMedia;

SocialMedia.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

const Icon = styled.img`
display:inline-flex;
padding:0 12px;

@media (max-width:480px){
    padding-left:0;
}
`;
