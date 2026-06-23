import Image from "next/image";
import Hero from "../components/cover/Hero";
import OwnershipBlock from "../components/cover/OwnershipBlock";
import ConstructionArea from "../components/cover/ConstructionArea";
import Barcode from "../components/cover/Barcode";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={{...pageContainer, transform: `scale(${scale})`, transformOrigin: "top center"}} className="cover-fix">
      <Hero />
      <OwnershipBlock />
      <ConstructionArea />
      <Barcode />
    </div>
  );
}
const scale =
  typeof window !== "undefined" &&
  window.innerHeight < 500 &&
  window.innerWidth > window.innerHeight
    ? 0.85
    : 1;

const pageContainer: CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",

  padding: "1rem",
};

