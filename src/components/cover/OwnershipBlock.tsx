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

const containerStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    textAlign: 'center',
};

const wrapperStyle: CSSProperties = {
    position: "relative",
    width: "40vh",
    aspectRatio: "5 / 3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderStyle: "double",
    borderWidth: "1rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
};

const nameStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
};  