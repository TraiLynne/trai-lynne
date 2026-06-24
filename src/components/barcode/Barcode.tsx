import { Libre_Barcode_39_Text } from "next/font/google";
import styles from "./barcode.module.css"

const barcodeFont = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Barcode() {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.barcodeWrapper}>
        <p>Copyright © {new Date().getFullYear()}</p>

        <p className={`${barcodeFont.className} ${styles.barcodeFont}`}>
          TRAI LYNNE
        </p>

        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}