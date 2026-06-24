import Link from "next/link";
import styles from '../styles/cta.module.css'

export default function CTA() {
  return (
    <div className={styles.containerStyle}>
      <Link href={"/about"} className={styles.enterButton}>
        Open
      </Link>
    </div>
  );
}