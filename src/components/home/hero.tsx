import { Button } from "../ui/button";
import HeroMedia from "../../assets/png/hero-media.png";
import { RiArrowRightLongLine } from "@remixicon/react";
import { CallToActions } from "./call-to-action";


export function HeroSection() {
  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
    <div className="w-full flex flex-col-reverse gap-10 mt-16 font-montserrat lg:mt-40 lg:flex-row lg:gap-0">
      <div className="flex flex-col gap-10 text-center lg:w-[60%] lg:mt-9 lg:gap-16 lg:text-left">
        <div className="flex flex-col gap-9">
            <div>
          <h2 className="text-4xl font-montserrat capitalize font-bold bg-clip-text text-transparent bg-linear-to-r from-[#8176AF] to-[#C0B7E8] sm:text-5xl">
            Dive <span className="text-white">into the depths</span>
          </h2>
          <h2 className="text-4xl font-montserrat capitalize font-bold text-white sm:text-5xl">
            of <span className="bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-transparent bg-clip-text">Virtual reality</span>
          </h2>
          </div>
          <p className="mx-auto max-w-2xl text-base text-white/50 font-montserrat lg:mx-0">
            Hydra helps teams create immersive virtual worlds for training,
            education, wellness, and product experiences, blending lifelike 3D
            environments with intuitive interactions that people can explore.
          </p>
        </div>
        <div className="group flex justify-center gap-3 items-center lg:justify-start">
          <Button variant="primary" size="lg" className="uppercase" onClick={scrollToJoin} type="button">
            Build your world
          </Button>
          <RiArrowRightLongLine className="hidden transition group-hover:translate-x-1 sm:block" color="#C0B7E8" size={41} />
        </div>
      </div>

      <div className="flex justify-center lg:w-[40%] lg:justify-end">
        <img className="w-full max-w-md lg:max-w-none" alt="a girl wearing a vr glasses " src={HeroMedia} />
      </div>
    </div>
    <CallToActions/>
    </div>
  );
}
