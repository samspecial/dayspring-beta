import React from "react";
import feedback from "../assets/feedback.png";
import FeedBackForm from "./FeedBackForm";
import styled from "styled-components";

const FeedBackRow = () => {
    return (
        <Div>

            <img src={feedback} alt="Feedback image" />

            <FeedBackForm />
        </Div>
    )
}

export default FeedBackRow;

const Div = styled.div`
display:flex;
width:100%;
height:auto;
justify-content:space-between;
   
    img{
        width:35%;
        display:block;
        border-radius:30px;
        margin:0 auto;
    }
    &:last-child{
        margin-top:1.6rem;
    }
@media (max-width:480px){
    flex-direction:column;
     img{
        width:100%;
     }
}
`;
