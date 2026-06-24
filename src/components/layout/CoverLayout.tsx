"use client";

import styles from "@/src/styles/cover.module.css"

export default function CoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.main}>{children}</main>;
}