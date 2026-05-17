import { Button } from "../ui/button";
import HeroMedia from "../../assets/png/hero-media.png";
import { RiArrowRightLongLine } from "@remixicon/react";
import { CallToActions } from "./call-to-action";


export function HeroSection() {
  return (
    <div>
    <div className="w-full flex mt-40 font-montserrat">
      <div className="w-[60%] mt-9 flex flex-col gap-16">
        <div className="flex flex-col gap-9">
            <div>
          <h2 className="text-5xl font-montserrat capitalize font-bold bg-clip-text text-transparent bg-linear-to-r from-[#8176AF] to-[#C0B7E8]">
            Dive <span className="text-white">into the depths</span>
          </h2>
          <h2 className="text-5xl font-montserrat capitalize font-bold text-white">
            of <span className="bg-linear-to-r from-[#8176AF] to-[#C0B7E8] text-transparent bg-clip-text">Virtual reality</span>
          </h2>
          </div>
          <p className="text-base text-white/50 font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum<br/>
            voluptate eligendi dolore obcaecati quis debitis nam optio, earum<br/>
            expedita suscipit fugiat necessitatibus eos quaerat veritatis
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="primary" size="lg" className="uppercase">
            Build your world
          </Button>
          <RiArrowRightLongLine color="#C0B7E8" size={41} />
        </div>
      </div>

      <div className="w-[40%]">
        <img alt="a girl wearing a vr glasses " src={HeroMedia} />
      </div>
    </div>
    <CallToActions/>
    </div>
  );
}
