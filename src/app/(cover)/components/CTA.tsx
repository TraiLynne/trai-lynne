import Link from "next/link";
import { CSSProperties } from "react";
import styles from '../styles/cta.module.css'

export default function CTA() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Link href={"/about"} className={styles.enterButton}>
        Open
      </Link>
    </div>
  );
}