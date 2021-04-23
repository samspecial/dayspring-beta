import React from "react";
import AboutSection from "../AboutSection";
import ClientFeedback from "../ClientFeedback";
import FeedBackSection from "../FeedBackSection";
import FooterSection from "../Footer/FooterSection";
import HeroSection from "../HeroSection";
import NavBar from "../Navigation/NavBar";
import ProductSection from "../ProductSection";
import WhyDayspring from "../WhyDayspring";

const Home = () => {
  return (
    <section>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WhyDayspring />
      <ProductSection />
      <ClientFeedback />
      <FeedBackSection />
      <FooterSection />
    </section>
  );
};

export default Home;
