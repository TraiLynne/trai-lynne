import NotebookLayout from "../../components/layout/NotebookLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NotebookLayout>{children}</NotebookLayout>;
}