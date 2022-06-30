import React from "react";
import { HeroImageRight } from "./landingpage/HeroPage.tsx";
import { FeaturesGrid } from "./landingpage/FeaturesPage.tsx";
import { ContactUs } from "./landingpage/ContactUs.tsx";
import { HeaderResponsive } from "./landingpage/Headers.tsx";
const LandingPage = () => {
  return (
    <>
      <HeaderResponsive />
      <HeroImageRight />
      <FeaturesGrid />
      <ContactUs />
    </>
  );
};

export default LandingPage;
