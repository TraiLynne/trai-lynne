import { CSSProperties } from "react";
import { Libre_Barcode_39_Text } from "next/font/google";

const barcodeFont = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Barcode() {
  return (
    <footer style={containerStyle}>
      <div style={wrapperStyle}>
        <p>Copyright © {new Date().getFullYear()}</p>

        <p className={barcodeFont.className} style={barcodeStyle}>
          TRAI LYNNE
        </p>

        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

const containerStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flex: "0 1 auto",
  padding: "1rem",
  height: "auto",
};

const wrapperStyle: CSSProperties = {
  position: "relative",
  maxWidth: "420px",
  backgroundColor: "var(--surface)",
  borderRadius: "0.5rem",
  borderStyle: "solid",
  borderWidth: "0.15rem",
  padding: "1rem",
  fontSize: "0.8rem",
  fontWeight: "bold",
  flexShrink: 1,
  textAlign: "center",
};

const barcodeStyle: CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "normal",
};