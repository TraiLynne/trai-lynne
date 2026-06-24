import { CSSProperties } from "react";
import { Rock_Salt } from "next/font/google";
import TitleGenerator from "./titleGenerator";

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"],
});

export default function OwnershipBlock() {
    return (
        <div style={containerStyle}>
            <div style={wrapperStyle}>
                <p>This Site Belongs to</p>
                <h1 className={rockSalt.className} style={nameStyle}>
                    Trai Lynne Compton
                </h1>
                <TitleGenerator />
            </div>
        </div>
    )
}

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
//   padding: "1rem"
};

const wrapperStyle: CSSProperties = {
  width: "min(90vw, 380px)",
  aspectRatio: "2 / 1",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",

  borderStyle: "double",
  borderWidth: "0.4rem",
  borderRadius: "1rem",

  backgroundColor: "var(--surface)",

  overflow: "hidden",
  textAlign: "center",
  padding: "1rem",
};

const nameStyle: CSSProperties = {
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    fontWeight: "bold",
    margin: 0,
};  