import React from "react";
import { Footer } from "../Styles";
import styled from "styled-components";
import Credits from "./Credits";
import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";

const FooterSection = () => {
    return (
        <Footer>
            <Div>
                <LeftFooter />
                <RightFooter />
            </Div>
            <Line></Line>
            <Credits />
        </Footer>
    )
}

export default FooterSection;

const Div = styled.div`
display:flex;
@media (max-width:480px){
    flex-direction:column;
    div{
        margin-top:.80rem;
    }
}
`;

const Line = styled.div`
    width:100%;
    height:3px;
    background:#ffffff;
    margin:1.3rem 0;
`;