import React from "react";
import CTA from "./layout/CTA";
import Companies from "./layout/Companies";
import Steps from "./layout/Steps";
import Stats from "./layout/Stats";
import Reviews from "./layout/Reviews";
import PickUs from "./layout/PickUs";
import Marquee from "./layout/Marquee";
import LastCTA from "./layout/LastCTA";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <>
      <CTA />
      <Companies />

      <Steps />
      <Stats />
      <Marquee />
      <PickUs />
      <Reviews />
      <LastCTA />
      <Footer />
    </>
  );
};

export default Home;
