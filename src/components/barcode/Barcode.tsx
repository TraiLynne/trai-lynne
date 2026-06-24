import styles from "./barcode.module.css"
import fonts from "@/src/app/fonts";

export default function Barcode() {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.barcodeWrapper}>
        <p>Copyright © {new Date().getFullYear()}</p>

        <p className={`${fonts.barcodeFont.className} ${styles.barcodeFont}`}>
          TRAI LYNNE
        </p>

        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}