import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.headerStyle}>
      <Link href={"/"} className={styles.linkStyle}>
        <Image src={Logo} alt={"Trai Lynne Logo"} className={styles.imgStyle} />
      </Link>
    </header>
  )
}