"use client";

import Image from "next/image";
import Link from "next/link";
import desktopStyles from "./desktopNav.module.css";
import mobileStyles from "./mobileNav.module.css";
import useActiveRoute from "./useActiveRoute";

type NavVariant = "desktop" | "mobile";

export default function NavItem({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: NavVariant;
}) {
  const { isActive } = useActiveRoute();
  const styles = variant === "mobile" ? mobileStyles : desktopStyles;

  const active = isActive(href);

  return (
    <Link
      href={href}
      className={`${styles.item} ${active ? styles.activeItem : styles.inactiveItem}`}
    >
      <Image
        className={active ? styles.annotation : styles.hideAnnotation}
        src="/images/annotations/red-oval.png"
        alt=""
        width={200}
        height={50}
      />
      <span>{label}</span>
    </Link>
  );
}
