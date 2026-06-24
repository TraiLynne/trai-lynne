import Barcode from "../barcode/Barcode"
import ConstructionArea from "../construction/ConstructionArea";
import styles from "@/src/styles/notebook.module.css"
import Header from "../header/header";

export default function NotebookLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.page}>
                <ConstructionArea />
                {children}
            </div>

            <Barcode />

        </main>
    )
}