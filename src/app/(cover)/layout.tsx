import CoverLayout from "@/src/components/layout/CoverLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CoverLayout>{children}</CoverLayout>;
}