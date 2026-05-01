import HydraLogo from "../../assets/png/hydra-logo.png";
import Hydra from "../../assets/png/hydra.png";

export function NavBar() {
  return (
    <div className="flex items-center justify-between font-montserrat">
      <div className="flex items-center gap-3.5">
        <img alt="hydra-logo" src={HydraLogo} />
        <img alt="hydra-logo" src={Hydra} />
      </div>
      <nav className="flex items-center text-white font-bold text-xs gap-10.5">
        <p>ABOUT</p>
        <p>SERVICES</p>
        <p>TECHNOLOGIES</p>
        <p>HOW TO</p>
      </nav>
      <div className="flex items-center gap-9.5">
        <button className="border-2 border-white rounded-full text-white font-bold text-xs py-2 px-6 ">CONTACT US</button>
        <button className=" bg-linear-to-r from-[#8176AF] to-[#C0B7E8] rounded-full font-bold text-xs py-2 px-6.5 ">Join Hydra</button>
      </div>
    </div>
  );
}
