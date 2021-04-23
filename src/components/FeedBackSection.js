import React from "react";
import FeedBackRow from "./FeedBackRow";
import { BoxedSection, H2 } from "./Styles";

const FeedBackSection = () => {
    return (
        <BoxedSection>
            <H2>Send Us A Message</H2>
            <p>Thank you for your interest in Dayspring Capital. Please fill out the form below to ask your questions. We will get back to you within the shortest possible time.</p>
            <FeedBackRow />
        </BoxedSection>
    )
}

export default FeedBackSection;