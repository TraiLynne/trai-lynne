"use client";

import Image from "next/image";
import Link from "next/link";
import desktopStyles from "./desktopNav.module.css";
import mobileStyles from "./mobileNav.module.css";
import useActiveRoute from "./useActiveRoute";

type NavVariant = "desktop" | "mobile";

type NavItemProps = {
  href: string;
  label: string;
  variant: NavVariant;
  onClick?: () => void;
};

export default function NavItem({
  href,
  label,
  variant,
  onClick,
}: NavItemProps) {
  const { isActive } = useActiveRoute();
  const styles = variant === "mobile" ? mobileStyles : desktopStyles;

  const active = isActive(href);

  return (
    <Link
      href={href}
      className={`${styles.item} ${active ? styles.activeItem : styles.inactiveItem}`}
      onClick={onClick}
    >
      <Image
        className={
          active && variant === "desktop"
            ? styles.annotation
            : styles.hideAnnotation
        }
        src="/images/annotations/red-oval.png"
        alt=""
        width={200}
        height={50}
      />
      <span>{label}</span>
    </Link>
  );
}
