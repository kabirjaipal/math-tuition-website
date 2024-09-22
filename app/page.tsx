import About from "@/components/About";
import FeesStructure from "@/components/FeesStructure";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Missions from "@/components/Missions";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Missions />
      <FeesStructure />
      <Gallery />
    </>
  );
};

export default Page;
