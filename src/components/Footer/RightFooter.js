import React from "react";
// import styled from "styled-components";
import Contact from "./Contact";
import contacts from "../../data/contactData";


const RightFooter = () => {
    return (
        <div>
            {contacts.map(contact => (<Contact key={contact.id} {...contact} />))}
        </div>
    )
}

export default RightFooter;

// const Div = styled.div`
// p{
//     margin:1rem 0;
//     font-weight: 500;
//     font-size: 0.9rem;
// }
// `;