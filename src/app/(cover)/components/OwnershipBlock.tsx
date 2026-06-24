import TitleGenerator from "./titleGenerator";
import styles from "@/src/app/(cover)/styles/ownership.module.css";
import { writtenFont } from "@/src/app/fonts";

export default function OwnershipBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p>This Site Belongs to</p>
                <h1 className={`${styles.name} ${writtenFont.className}`}>
                    Trai Lynne Compton
                </h1>
                <TitleGenerator />
            </div>
        </div>
    )
}