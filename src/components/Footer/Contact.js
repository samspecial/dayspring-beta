import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contact = ({ icon, title, text }) => {
    return (
        <Div>
            <img src={icon} />
            <span><h5>{title}</h5>
                <p>{text}</p></span>
        </Div>
    );
};

export default Contact;

Contact.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const Div = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
img{
    padding-top:3px;
   width:5%;
}
span{
   margin-bottom:0.75rem;
    padding-left:1.3rem;
    h5{
        font-size:1.0rem;
        margin-bottom:0.75rem;
    }
    p{
        width:120px;
        font-size:0.9rem;
        font-weight:500;
    }
    p:nth-child(2){
        width:250px;
    }
}
`;
