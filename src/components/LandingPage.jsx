import React from "react";
import { HeaderSimple } from "../components/Header.tsx";
import { HeroImageRight } from "../components/HeroPage.tsx";
import { FeaturesGrid } from "../components/FeaturesPage.tsx";
import { ContactUs }  from "../components/ContactUs.tsx";
const LandingPage = () => {
  return (
    <>
      <HeaderSimple />
      <HeroImageRight />
<FeaturesGrid />
  <ContactUs />

    </>
  );
};

export default LandingPage;

