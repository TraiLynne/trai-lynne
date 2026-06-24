import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import styles from "../styles/hero.module.css"

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.logoWrapper}>
                <Image fill src={Logo} alt="Logo" style={{objectFit: "contain"}} />
            </div>
        </div>
    )
}