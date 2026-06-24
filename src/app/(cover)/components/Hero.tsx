import Image from "next/image";
import Logo from "@/public/images/logo.png"
import styles from "@/src/app/(cover)/styles/hero.module.css"

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image
                    fill
                    src={Logo}
                    alt="Logo"
                    className={styles.img}
                />
            </div>
        </div>
    )
}