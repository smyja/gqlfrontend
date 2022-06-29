import React from "react";
import { HeroImageRight } from "../components/HeroPage.tsx";
import { FeaturesGrid } from "../components/FeaturesPage.tsx";
import { ContactUs } from "../components/ContactUs.tsx";
import { HeaderResponsive } from "./Headers.tsx";
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

