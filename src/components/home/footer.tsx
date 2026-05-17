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
      <div className="-mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
        <div className="flex min-w-[620px] flex-row justify-between items-center gap-7 mt-20 text-left sm:min-w-[720px] lg:mt-40 lg:min-w-0 lg:gap-0">
          <div className="shrink-0">
            <img className="w-20 lg:w-auto" src={HydraLogo} alt="hydra logo" />
          </div>
          <img className="h-24 w-auto lg:h-auto" src={VerticalLine} />
          <nav className="flex flex-col gap-1.5 text-xs text-white font-bold lg:gap-2 lg:text-base">
            <a className="transition hover:text-[#C0B7E8]" href="#about">ABOUT</a>
            <a className="transition hover:text-[#C0B7E8]" href="#services">SERVICES</a>
            <a className="transition hover:text-[#C0B7E8]" href="#technologies">TECHNOLOGIES</a>
            <a className="transition hover:text-[#C0B7E8]" href="#how">HOW TO</a>
          </nav>
          <img className="h-24 w-auto lg:h-auto" src={VerticalLine} />
          <nav className="flex flex-col gap-1.5 text-xs text-white font-bold lg:gap-2 lg:text-base">
            <a className="transition hover:text-[#C0B7E8]" href="#join">FAQ</a>
            <a className="transition hover:text-[#C0B7E8]" href="#about">SITEMAPS</a>
            <a className="transition hover:text-[#C0B7E8]" href="#join">CONDITIONS</a>
            <a className="transition hover:text-[#C0B7E8]" href="#join">LICENCES</a>
          </nav>
          <img className="h-24 w-auto lg:h-auto" src={VerticalLine} />

          <div className="flex flex-col items-start gap-3 lg:gap-5">
            <p className="font-bold text-xs text-white lg:text-base">
              {" "}
              SOCIALIZE WITH HYDRA
            </p>
            <nav className="flex gap-1.5 lg:gap-2">
              <a
                className="size-6 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white lg:size-8 [&_svg]:size-4 lg:[&_svg]:size-6"
                href="#"
              >
                <RiFacebookFill />
              </a>
              <a
                className="size-6 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white lg:size-8 [&_svg]:size-4 lg:[&_svg]:size-6"
                href="#"
              >
                <RiLinkedinFill />
              </a>
              <a
                className="size-6 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white lg:size-8 [&_svg]:size-4 lg:[&_svg]:size-6"
                href="#"
              >
                <RiTwitterFill />
              </a>
              <a
                className="size-6 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white lg:size-8 [&_svg]:size-4 lg:[&_svg]:size-6"
                href="#"
              >
                <RiYoutubeFill />
              </a>
              <a
                className="size-6 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center transition hover:-translate-y-1 hover:bg-white lg:size-8 [&_svg]:size-4 lg:[&_svg]:size-6"
                href="#"
              >
                <RiInstagramFill />
              </a>
            </nav>
            <Button className="whitespace-nowrap px-5 py-3 text-[10px] lg:px-7 lg:py-4 lg:text-xs" onClick={scrollToJoin} type="button" variant="primary">
              BUILD YOUR WORLD
            </Button>
          </div>
        </div>
      </div>
      <hr className=" p-0.5 mt-19 bg-linear-to-r from-[#343045] via-[#8176AF] to-[#C0B7E8]" />
      <p className="font-bold text-white text-sm text-center capitalize mt-12">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
    </footer>
  );
}
