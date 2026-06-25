import { navItems } from "./nav.config";
import NavItem from "./navItem";
import styles from "./desktopNav.module.css"

export default function DesktopNav() {
  return (
    <div className={styles.container}>
      {
        navItems.map(data => <NavItem key={data.href} {...data} variant={"desktop"} />)
      }
    </div>
  )
}