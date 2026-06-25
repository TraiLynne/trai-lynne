import { navItems } from "./nav.config";
import NavItem from "./navItem";

export default function MobileNav() {
  return (
    <div>
      {
        navItems.map(data => <NavItem key={data.href} {...data} />)
      }
    </div>
  )
}