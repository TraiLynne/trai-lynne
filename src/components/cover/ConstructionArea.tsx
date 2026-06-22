import { CSSProperties } from "react";

export default function ConstructionArea() {
  return (
    <div style={containerStyle}>
        <div style={wrapperStyle}>
             <p style={textStyle}>Under Construction</p>
        </div>
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
  textAlign: 'center',
};

const wrapperStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #facc15 0px, #facc15 20px, #000 20px, #000 40px)",
  padding: "1rem",
}

const textStyle: CSSProperties = {
  backgroundColor: "#000",
  color: "white",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  letterSpacing: "0.1rem",
};