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
};

const wrapperStyle: CSSProperties = {
  position: "relative",
  maxWidth: "min(50vw, 420px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "0.5rem",
  borderStyle: "solid",
  borderWidth: "thick",
  padding: "1rem",
  fontSize: "0.8rem",
  fontWeight: "bold",
  flexShrink: 1
};

const barcodeStyle: CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "normal",
};