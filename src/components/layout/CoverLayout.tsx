"use client";

import { CSSProperties } from "react";

export default function CoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={containerStyle}>{children}</div>;
}

const containerStyle: CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "1rem",
  textAlign: "center"
};