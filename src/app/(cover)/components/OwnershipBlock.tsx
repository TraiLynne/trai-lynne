import TitleGenerator from "./titleGenerator";
import styles from "../styles/ownership.module.css"
import fonts from "../../fonts";

export default function OwnershipBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.ownershipBlockWrapper}>
                <p>This Site Belongs to</p>
                <h1 className={`${styles.name} ${fonts.writtenFont.className}`}>
                    Trai Lynne Compton
                </h1>
                <TitleGenerator />
            </div>
        </div>
    )
}