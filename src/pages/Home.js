import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import RefSection from "../components/ReferancesSection";
import SecondSection from "../components/SecondSection";
import AfterServices from "../components/AfterServices";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...homeObjOne} />
      <InfoSection {...homeObjOne} />
      <SecondSection {...homeObjTwo} />
      <Services />
      <AfterServices {...homeObjThree} />
      <RefSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
