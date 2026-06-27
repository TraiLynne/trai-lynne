import Barcode from "../barcode/Barcode"
import ConstructionArea from "../construction/ConstructionArea";
import styles from "@/src/styles/notebook.module.css"
import Header from "../header/header";
import DesktopNav from "../navigation/desktopNav";
import MobileNav from "../navigation/mobileNav";

export default function NotebookLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.main}>
            <Header />
            <DesktopNav />
            {/* <MobileNav /> */}

            <div className={styles.page}>
                <ConstructionArea />
                {children}
            </div>

            <Barcode />

        </main>
    )
}