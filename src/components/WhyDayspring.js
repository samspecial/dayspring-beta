import React from "react";
import { FullWidth } from "./Styles";
import data from "../data/whyDaySpring";
import Dayspring from "./Dayspring";

const WhyDayspring = () => {
  return (
    <FullWidth>
      <h2>Why Dayspring?</h2>
      <p>
        Our commitment is to meet our customer’s needs and hand over an
        unforgettable financial service experience within the under listed
        parameters
      </p>
      <div>
        {data.map((d) => (
          <Dayspring key={d.id} {...d} />
        ))}
      </div>
    </FullWidth>
  );
};

export default WhyDayspring;
