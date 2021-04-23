import React from "react";
import { Link } from "react-router-dom";
import { H2 } from "../Styles";
import styled from "styled-components";
import FooterSection from "../Footer/FooterSection";
import NavBar from "../Navigation/NavBar";

const NotFound = () => {
    return (
        <section>
            <NavBar />

            <Div>
                <H2>Page NotFound</H2>
                <p>Oopps!!! The page you are looking for does not exist. Click <Link to="/">here</Link> to continue.</p>
            </Div>
            <FooterSection />
        </section>
    );
};

export default NotFound;
const Div = styled.div`
height:400px;
width:100%;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
H2{
    text-align:center;
}
`;