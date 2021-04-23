import React from "react";
import { BoxedSection, Horizontal, H2, LinkStyle, H3 } from "./Styles";
import prodData from "../data/productData.json";
import Product from "./Product";

const ProductSection = () => {
  return (
    <BoxedSection>
      <H2>Our Products</H2>
      <Horizontal>
        <div>
          <H3>
            Dayspring <span>Credit</span>
          </H3>
          <p>
            Dayspring Credit is our platform where we give financial credit to
            Individuals and groups for their financial needs. For this we also
            target credit worthy salary earners who can access this facility.
            This is available between the sum of 100,000- 5 Million based on
            request. With a 10% interest rate, we’ve eased the repayment for
            customers. This is repaid on a monthly basis. The target markets for
            this are individuals, groups and corporate entity.
          </p>
          <LinkStyle to="/our-products">Read More</LinkStyle>
        </div>
        <div>
          <ul>
            {prodData.map((prod) => (
              <Product key={prod.id} {...prod} />
            ))}
          </ul>
        </div>
      </Horizontal>
    </BoxedSection>
  );
};

export default ProductSection;
