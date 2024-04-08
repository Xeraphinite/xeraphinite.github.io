import { cn } from "@/lib/utils";
import { LucideArchive, LucideHome, LucideSmile } from "lucide-react";

import SiteLogo from "./nav-bar/SiteLogo";
import Menu from "./nav-bar/Menu";

const items = [
  {label: "Home", href: "/", icon: LucideHome },
  {label: "About", href: "About", icon: LucideSmile },
  {label: "Archive", href: "/archive", icon: LucideArchive },
]

const NavBar = () => {
  return (
    <div className={cn(
      "flex justify-between p-4 min-w-screen"
    )}>
      {/* NavBar  */}
      <SiteLogo />
      <Menu />
    </div>
  );
};

export default NavBar;
