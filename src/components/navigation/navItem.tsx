"use client";

import Link from "next/link";
import useActiveRoute from "./useActiveRoute";
import mobileStyles from "./mobileNav.module.css"
import desktopStyles from "./desktopNav.module.css"

type NavVariant = "desktop" | "mobile";

export default function NavItem({ href, label, variant }: { href: string, label: string, variant: NavVariant }) {
  const { isActive } = useActiveRoute();
  const styles = variant === "mobile" ? mobileStyles : desktopStyles;

  const active = isActive(href);

  return (
    <Link href={href} className={`${styles.item} ${active ? styles.activeItem : styles.inactiveItem}`}>
      {label}
    </Link>
  )
}