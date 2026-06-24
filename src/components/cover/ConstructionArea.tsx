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
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const wrapperStyle: CSSProperties = {
  position: "relative",
  width: "100%",

  backgroundImage:
    "repeating-linear-gradient(-30deg, #facc15 0px, #facc15 20px, #000 20px, #000 40px)",

  padding: "1rem",
  overflow: "hidden",

  boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
};

const textStyle: CSSProperties = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  letterSpacing: "0.08rem",
  textTransform: "uppercase",
  fontSize: "0.8rem",
  textAlign: "center",
};