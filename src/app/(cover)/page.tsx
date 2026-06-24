"use client";

import Hero from "./components/Hero";
import OwnershipBlock from "./components/OwnershipBlock";
import ConstructionArea from "../../components/construction/ConstructionArea";
import Barcode from "../../components/barcode/Barcode";
import CTA from "./components/CTA";

export default function Home() {
  return (
      <>
        <Hero />
        <OwnershipBlock />
        <CTA/>
        <ConstructionArea />
        <Barcode />
      </>

  );
}

