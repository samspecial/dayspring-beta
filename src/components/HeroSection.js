import React from "react";
import { LinkStyle, BoxedSection, H2 } from "./Styles";

const rule = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "4rem"
}
const HeroSection = () => {
  return (
    <BoxedSection style={rule}>
      <H2>Low Interest Rates Very Fast!</H2>
      <p>
        We have provided over 300,000 loans to individuals and small businesses
        in Nigeria
      </p>
      <LinkStyle to="/our-products">See Our Products</LinkStyle>
    </BoxedSection>
  );
};

export default HeroSection;
