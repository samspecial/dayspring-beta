import React from "react";
import contacts from "../../data/contactData";
import SocialIcons from "../Footer/SocialIcons";
import styled from "styled-components";
import { NavSection } from "../Styles";

function TopNav() {

    return (
        <NavSection>
            <Div>
                {contacts.map(contact => (<small key={contact.id}><img style={{ width: "5%" }} src={contact.icon} /><h6>{contact.text}</h6></small>))}
                {/* <SocialIcons /> */}
            </Div>
        </NavSection>
    )
}

export default TopNav;
const Div = styled.section`
display:flex;
flex:wrap row;
width:100%;

h6{
    font-size:8px;
}

SocialIcons{
    img{
        width:12%;
    }
}
`;