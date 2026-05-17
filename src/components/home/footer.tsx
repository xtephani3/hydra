import HydraLogo from "../../assets/png/hydra-logo-big.png";
import { RiFacebookFill } from "@remixicon/react";
import { RiLinkedinFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";
import { RiYoutubeFill } from "@remixicon/react";
import { Button } from "../ui/button";
import VerticalLine from "../../assets/png/vertical-footer-line.png";

export function Footer() {
  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="flex flex-col justify-between items-center gap-10 mt-20 text-center lg:mt-40 lg:flex-row lg:text-left">
        <div>
          <img src={HydraLogo} alt="hydra logo" />
        </div>
        <img className="hidden lg:block" src={VerticalLine} />
        <nav className="flex flex-col gap-2 text-base text-white font-bold">
          <a className="transition hover:text-[#C0B7E8]" href="#about">ABOUT</a>
          <a className="transition hover:text-[#C0B7E8]" href="#services">SERVICES</a>
          <a className="transition hover:text-[#C0B7E8]" href="#technologies">TECHNOLOGIES</a>
          <a className="transition hover:text-[#C0B7E8]" href="#how">HOW TO</a>
        </nav>
        <img className="hidden lg:block" src={VerticalLine} />
        <nav className="flex flex-col gap-2 text-base text-white font-bold">
          <a className="transition hover:text-[#C0B7E8]" href="#join">FAQ</a>
          <a className="transition hover:text-[#C0B7E8]" href="#about">SITEMAPS</a>
          <a className="transition hover:text-[#C0B7E8]" href="#join">CONDITIONS</a>
          <a className="transition hover:text-[#C0B7E8]" href="#join">LICENCES</a>
        </nav>
        <img className="hidden lg:block" src={VerticalLine} />

        <div className="flex flex-col items-center gap-5 lg:items-start">
          <p className="font-bold text-base text-white">
            {" "}
            SOCIALIZE WITH HYDRA
          </p>
          <nav className="flex gap-2 ">
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white"
              href="#"
            >
              <RiFacebookFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white"
              href="#"
            >
              <RiLinkedinFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white"
              href="#"
            >
              <RiTwitterFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white"
              href="#"
            >
              <RiYoutubeFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white"
              href="#"
            >
              <RiInstagramFill />
            </a>
          </nav>
          <Button onClick={scrollToJoin} type="button" variant="primary" size="md">
            BUILD YOUR WORLD
          </Button>
        </div>
      </div>
      <hr className=" p-0.5 mt-19 bg-linear-to-r from-[#343045] via-[#8176AF] to-[#C0B7E8]" />
      <p className="font-bold text-white text-sm text-center capitalize mt-12">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
    </footer>
  );
}
