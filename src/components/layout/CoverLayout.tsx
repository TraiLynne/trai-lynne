"use client";

import styles from "../../styles/cover.module.css"

export default function CoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.mainStyle}>{children}</main>;
}