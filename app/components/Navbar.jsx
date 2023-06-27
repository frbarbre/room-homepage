import { Navlinks } from "../constants";
import { NavMobile, NavDesktop } from ".";

export default function Navbar() {
  return (
    <>
      {/* Desktop Menu */}
      <NavDesktop Navlinks={Navlinks} />

      {/* Mobile Menu */}
      <NavMobile
        Navlinks={Navlinks}
      />
    </>
  );
}
