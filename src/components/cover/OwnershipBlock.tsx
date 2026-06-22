import { CSSProperties } from "react";
import TitleGenerator from "./titleGenerator";

export default function OwnershipBlock() {
    return (
        <div style={containerStyle}>
            <div style={wrapperStyle}>
                <p>This Site Belongs to</p>
                <h1>Trai Lynne Compton</h1>
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
    justifyContent: "center",
    borderStyle: "double",
    borderWidth: "1rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
};