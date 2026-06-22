import Image from "next/image";
import Hero from "../components/cover/Hero";
import OwnershipBlock from "../components/cover/OwnershipBlock";
import ConstructionArea from "../components/cover/ConstructionArea";
import Barcode from "../components/cover/Barcode";

export default function Home() {
  return (
    <div>
      <Hero />
      <OwnershipBlock />
      <ConstructionArea />
      <Barcode />
    </div>
  );
}
