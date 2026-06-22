import Image from "next/image";
import Hero from "../components/cover/Hero";
import OwnershipBlock from "../components/cover/OwnershipBlock";
import ConstructionArea from "../components/cover/ConstructionArea";

export default function Home() {
  return (
    <div>
      <Hero />
      <OwnershipBlock />
      <ConstructionArea />
      <footer>
        <p>Barcode</p>
      </footer>
    </div>
  );
}
