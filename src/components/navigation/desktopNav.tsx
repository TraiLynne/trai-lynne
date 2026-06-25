import { navItems } from "./nav.config";
import NavItem from "./navItem";

export default function DesktopNav() {
  return (
    <div>
      {
        navItems.map(data => <NavItem key={data.href} {...data} />)
      }
    </div>
  )
}