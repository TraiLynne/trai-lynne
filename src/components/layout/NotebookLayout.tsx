import Image from "next/image";
import Barcode from "../../app/(cover)/components/Barcode"
import Logo from "../../../public/images/logo.png";
import { CSSProperties } from "react";
import ConstructionArea from "../../app/(cover)/components/ConstructionArea";
import Link from "next/link";

export default function NotebookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main style={mainStyle}>
        <header style={headerStyle}>
            <Link href={"/"} style={homeStyle}>
                <Image src={Logo} alt={"Trai Lynne Logo"} style={imgStye}/>
            </Link>
        </header>

        <div style={pageStyle}>
            <ConstructionArea/>
            {children}
        </div>

        <Barcode/>
        
    </main>
  )
}

const mainStyle: CSSProperties = {
    width: "90vw",
    maxWidth: "1200px",
    minHeight: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
}

const homeStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center"
}

const headerStyle: CSSProperties = {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem"
}

const imgStye: CSSProperties = {
    aspectRatio: "1 / 1",
    objectFit: "contain",
    height: "90%"
}


const pageStyle: CSSProperties = {
    flexGrow: 1,
    overflowY: "auto",
    padding: "2rem",
    backgroundImage: "var(--paper)",
    backgroundSize: "300px",
};