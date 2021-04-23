import React from "react";
import socialIcons from "../../data/socialIcons";
import SocialMedia from "../SocialMedia";
import styled from "styled-components";

const SocialIcons = () => {
    return (
        <Span>
            {socialIcons.map(sIcon => (<SocialMedia key={sIcon.id} {...sIcon} />))}
        </Span>
    )
}

export default SocialIcons;

const Span = styled.span`
display:flex;
align-items:center;
SocialMedia{
    font-size: 0.9rem;
}
`;