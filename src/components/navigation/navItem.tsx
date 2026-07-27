"use client";

import { writtenFont } from "@/src/app/fonts";
import Link from "next/link";
import desktopStyles from "./desktop/desktopNav.module.css";
import mobileStyles from "./mobile/mobileNav.module.css";
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
      className={`${styles.item} ${active ? styles.activeItem : styles.inactiveItem} ${writtenFont.className}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </Link>
  );
}
