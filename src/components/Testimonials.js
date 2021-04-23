import React from "react";
import userData from "../data/testimonial";
import Testimonial from "./Testimonial";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Section>
      {userData.map((u) => (
        <Testimonial key={u.id} {...u} />
      ))}
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.6rem;

  div {
    flex-direction: column;
    width: 45%;
    justify-content: flex-start;
    height: auto;

    img {
      display: block;
      padding: 1rem;
      border-radius: 50%;
      width: 80px;
      height: 100px;
      margin-bottom: 1.5rem;
      box-shadow: -4px 0px 3px rgba(234, 197, 5, 0.65),
        -2px 0px 4px rgba(234, 197, 5, 0.5);
    }

    p {
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 1rem;
    }

    h5,
    h6 {
      margin-bottom: 0.85rem;
    }
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
    flex-direction: column;
    div {
      width: 100%;

      p {
        font-size: 0.9rem;
      }
    }
  }
`;
