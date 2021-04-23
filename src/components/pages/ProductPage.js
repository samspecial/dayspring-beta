import React from "react";

import FooterSection from "../Footer/FooterSection";
import NavBar from "../Navigation/NavBar";
import ProductSection from "../ProductSection";

const ProductPage = () => {
    return (
        <section>
            <NavBar />

            <ProductSection />
            <FooterSection />
        </section>
    );
};

export default ProductPage;
