import React from "react";
import SocialIcons from "./SocialIcons";
import { SiteLink } from "../Styles";
import arrowup from "../../assets/arrow-up.svg";
import styled from "styled-components";

const Credits = () => {
    return (
        <Credit>
            <p>@2021 Dayspring Capital RC 1640535. All rights reserved.</p>
            <SocialIcons />
            <SiteLink to="/"><img src={arrowup} /> Back to top</SiteLink>
        </Credit>
    );
};

export default Credits;

const Credit = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;

@media (max-width:480px){
    flex-direction:column;
    align-items:flex-start;
}
p{
    width:70%;
}
SocialIcons{
    width:15%;
}
SiteLink{
    width:15%;
}
`;