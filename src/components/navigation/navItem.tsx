"use client";

import Link from "next/link";
import useActiveRoute from "./useActiveRoute";
import styles from "./nav.module.css"

export default function NavItem({ href, label }: { href: string, label: string }) {
  const { isActive } = useActiveRoute();

  const active = isActive(href);

  return (
    <Link href={href} className={`${styles.item} ${active ? styles.activeItem : styles.inactiveItem}`}>
      {label}
    </Link>
  )
}