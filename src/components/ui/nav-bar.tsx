import HydraLogo from "../../assets/png/hydra-logo.png";
import Hydra from "../../assets/png/hydra.png";
import { Button } from "./button";

export function NavBar() {
  return (
    <div className="flex items-center justify-between font-montserrat">
      <div className="flex items-center gap-3.5">
        <img alt="hydra-logo" src={HydraLogo} />
        <img alt="hydra-logo" src={Hydra} />
      </div>
      <nav className="flex items-center text-white font-bold text-xs gap-10.5">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#technologies">TECHNOLOGIES</a>
        <a href="#how">HOW TO</a>
      </nav>
      <div className="flex items-center gap-9.5">
        <Button variant="secondary"  size="sm">CONTACT US</Button>
        <Button variant="primary" size="md">Join Hydra</Button>
      </div>
    </div>
  );
}
