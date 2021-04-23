import React from "react";
import { LinkStyle, TwoColumn, BoxedSection, H2 } from "./Styles";
import about from "../assets/about-us.png";

const AboutSection = () => {
  return (
    <BoxedSection>
      <H2>About Us</H2>
      <TwoColumn>
        <div>
          <p>
            Dayspring Capital is Nigeria’s fastest growing financial services
            provider. We do this through our website, social media pages and
            customer experience center.
          </p>
          <p>
            What makes Dayspring Capital unique among the packs of other
            financial service provider is that we also make this service
            available to individuals who are small business owners as it’s our
            desire to energize the economy through these SMEs and provide for
            their financial needs.
          </p>
          <LinkStyle to="/about">Read More</LinkStyle>
        </div>
        <div>
          <img src={about} />
        </div>
      </TwoColumn>
    </BoxedSection>
  );
};
export default AboutSection;
