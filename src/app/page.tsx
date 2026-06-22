import Image from "next/image";
import Hero from "../components/cover/Hero";
import OwnershipBlock from "../components/cover/OwnershipBlock";

export default function Home() {
  return (
    <div>
      <Hero />
      <OwnershipBlock />
      <div>
        <p>enter button || construction tape</p>
      </div>
      <footer>
        <p>Barcode</p>
      </footer>
    </div>
  );
}
