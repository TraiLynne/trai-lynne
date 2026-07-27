import styles from "@/src/styles/notebook.module.css";
import Barcode from "../barcode/Barcode";
import ConstructionArea from "../construction/ConstructionArea";
import Header from "../header/header";
import DesktopNav from "../navigation/desktop/desktopNav";

export default function NotebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.notebookSurface}>
        <DesktopNav />
        {/* <MobileNav /> */}
        <div className={styles.page}>
          <ConstructionArea />
          {children}
        </div>
      </div>

      <Barcode />
    </main>
  );
}
