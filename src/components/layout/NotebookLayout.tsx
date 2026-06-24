import Barcode from "../barcode/Barcode"
import ConstructionArea from "../construction/ConstructionArea";
import styles from "../../styles/notebook.module.css"
import Header from "../header/header";

export default function NotebookLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.mainStyle}>
            <Header />

            <div className={styles.pageStyle}>
                <ConstructionArea />
                {children}
            </div>

            <Barcode />

        </main>
    )
}