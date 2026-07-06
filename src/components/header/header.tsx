import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.link}>
        <Image src={Logo} alt={"Trai Lynne Logo"} className={styles.img} />
      </Link>
    </header>
  );
}
