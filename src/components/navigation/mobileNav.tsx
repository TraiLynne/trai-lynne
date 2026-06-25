"use client";
import { useState } from "react";
import { navItems } from "./nav.config";
import NavItem from "./navItem";
import styles from "./mobileNav.module.css"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`${styles.wrapper} ${isOpen ? styles.activeWrapper : styles.inactiveWrapper}`}>
        {
          isOpen && (navItems.map(data => <NavItem key={data.href} {...data} variant={"mobile"} />))
        }
      </div>
    </div>
  )
}