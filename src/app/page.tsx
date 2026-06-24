"use client";

import Hero from "../components/cover/Hero";
import OwnershipBlock from "../components/cover/OwnershipBlock";
import ConstructionArea from "../components/cover/ConstructionArea";
import Barcode from "../components/cover/Barcode";
import CTA from "../components/cover/CTA";
import CoverLayout from "../components/layout/CoverLayout";

export default function Home() {
  return (
      <CoverLayout>
        <Hero />
        <OwnershipBlock />
        <CTA/>
        <ConstructionArea />
        <Barcode />
      </CoverLayout>

  );
}

