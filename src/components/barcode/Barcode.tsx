import styles from "./barcode.module.css"
import {barcodeFont} from "@/src/app/fonts";

export default function Barcode() {
  return (
    <footer className={styles.footer}>
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