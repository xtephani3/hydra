import HydraLogo from "../../assets/png/hydra-logo-big.png";
import { RiFacebookFill } from "@remixicon/react";
import { RiLinkedinFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";
import { RiYoutubeFill } from "@remixicon/react";
import { Button } from "../ui/button";
import VerticalLine from "../../assets/png/vertical-footer-line.png";

export function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center mt-40">
        <div>
          <img src={HydraLogo} alt="hydra logo" />
        </div>
        <img src={VerticalLine} />
        <nav className="flex flex-col gap-2 text-base text-white font-bold">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#technologies">TECHNOLOGIES</a>
          <a href="#how">HOW TO</a>
        </nav>
        <img src={VerticalLine} />
        <nav className="flex flex-col gap-2 text-base text-white font-bold">
          <a> FAQ</a>
          <a> SITEMAPS</a>
          <a> CONDITIONS</a>
          <a> LICENCES</a>
        </nav>
        <img src={VerticalLine} />

        <div className="flex flex-col gap-5">
          <p className="font-bold text-base text-white">
            {" "}
            SOCIALIZE WITH HYDRA
          </p>
          <nav className="flex gap-2 ">
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center"
              href="#"
            >
              <RiFacebookFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center"
              href="#"
            >
              <RiLinkedinFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center"
              href="#"
            >
              <RiTwitterFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center"
              href="#"
            >
              <RiYoutubeFill />
            </a>
            <a
              className="size-8 rounded-full bg-[#C0B7E8] flex text-center justify-center items-center"
              href="#"
            >
              <RiInstagramFill />
            </a>
          </nav>
          <Button variant="primary" size="md">
            BUILD YOUR WORLD
          </Button>
        </div>
      </div>
      <hr className=" p-0.5 mt-19 bg-linear-to-r from-[#343045] via-[#8176AF] to-[#C0B7E8]" />
      <p className="font-bold text-white text-sm text-center capitalize mt-12">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
    </footer>
  );
}
