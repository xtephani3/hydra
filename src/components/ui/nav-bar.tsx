import HydraLogo from "../../assets/png/hydra-logo.png";
import Hydra from "../../assets/png/hydra.png";
import { Button } from "./button";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "TECHNOLOGIES", href: "#technologies" },
  { label: "HOW TO", href: "#how" },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-20 flex items-center justify-between font-montserrat">
      <div className="flex items-center gap-3.5">
        <img alt="hydra logo" className="w-16 sm:w-auto" src={HydraLogo} />
        <img alt="hydra wordmark" className="w-16 sm:w-auto" src={Hydra} />
      </div>
      <nav className="hidden items-center text-white font-bold text-xs gap-10.5 lg:flex">
        {navLinks.map((link) => (
          <a className="transition hover:text-[#C0B7E8]" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-9.5 lg:flex">
        <Button variant="secondary"  size="sm">CONTACT US</Button>
        <Button variant="primary" size="md">Join Hydra</Button>
      </div>
      <button
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
        className="flex size-11 items-center justify-center rounded-full border border-white/50 text-white lg:hidden"
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-20 rounded-3xl bg-[#211E2E]/95 p-6 shadow-2xl backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-5 text-center text-sm font-bold text-white">
            {navLinks.map((link) => (
              <a className="transition hover:text-[#C0B7E8]" href={link.href} key={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button className="w-full" size="sm" type="button" variant="secondary">
              CONTACT US
            </Button>
            <Button className="w-full" size="md" type="button" variant="primary">
              JOIN HYDRA
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
