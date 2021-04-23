import React from "react";
import { Button } from "../Styles";
import styled from "styled-components";
import { useFeedBack } from "../Hooks/useFeedBack";

const SubscriptionForm = () => {
    const [values, handleChange] = useFeedBack({
        email: "",
    });

    const subscribe = {
        email: values.email,
    };

    const subscribeNow = (event) => {
        event.preventDefault();
        const { email } = subscribe;
        if (!email) return alert("Empty fields not allowed");
        alert(`${email} subscription successful`);
    };

    return (
        <Form onSubmit={subscribeNow} method="POST">
            <div>
            <label htmlFor="email">
                Email Address
                 
            </label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="e.g johndoe@email.com"
            />
            </div>
            <Button>Subscribe</Button>
        </Form>
    )
}

export default SubscriptionForm;

const Form = styled.form`
width:100%;
display:flex;
justify-content:flex-start;
align-items:flex-end;

@media (max-width:480px){
    width:100%;
}
div{
    flex-direction:column;
    width:50%;
    padding-right:30px;
    label{
      font-size: 0.85rem;
      width: 100%;
    }
    input{
        width: 100%;
      background: transparent;
      color: #ccc;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding:1rem;
      display: block;
      font-weight: 400;
      margin-top: 0.85rem;
      
    }
    input:focus{
        outline:1px solid #1da737;
    }
}
Button{
    margin-top:0;
    margin-right:0;
    display:block;
    cursor:pointer;
}

`;