import React from "react";
import Logo from "../Logo";
import whiteLogo from "../../assets/logo-white.svg";
import SubscriptionForm from "./SubscriptionForm";
import styled from "styled-components";


const LeftFooter = () => {
    return (
        <Div>
            <Logo logo={whiteLogo} text="White black" />
            <p>Be the first to know! Subscribe to our mailing list to keep up with the latest news and offers.</p>
            <SubscriptionForm />
        </Div>
    )
}

export default LeftFooter;

const Div = styled.div`
p{
    margin:1rem 0;
    font-weight: 500;
    font-size: 0.9rem;
}
`;