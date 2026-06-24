import Link from "next/link";
import styles from "@/src/app/(cover)/styles/cta.module.css";

export default function CTA() {
  return (
    <div className={styles.container}>
      <Link href="/about" className={styles.button}>
        Open
      </Link>
    </div>
  );
}