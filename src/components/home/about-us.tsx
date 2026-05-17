import { Button } from "../ui/button";
import AboutMedia from "../../assets/png/about-media.png";
import LongArrow from "../../assets/png/lengthy-arrow.png";

export function AboutUs() {
  return (
    <div className="mt-20 flex flex-col gap-14 font-montserrat lg:mt-40 lg:gap-24.25" id="about">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="flex gap-2 flex-col text-center lg:w-1/2 lg:text-left">
          <h3 className="text-3xl text-white uppercase font-montserrat font-bold sm:text-4xl">
            Introduction
          </h3>
          <div className="flex justify-center gap-7.5 items-center lg:justify-start">
            <p className="text-3xl text-white uppercase font-montserrat  font-extralight sm:text-4xl">
              To Hydra Vr
            </p>
            <img className="hidden lg:block" src={LongArrow} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="font-montserrat text-base text-white/60">
            Hydra VR creates custom immersive experiences that make complex
            ideas easier to see, practice, and remember. From guided simulation
            spaces to collaborative product demos, every environment is designed
            to feel natural, memorable, and useful from the first session.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="lg:w-1/2">
          <img className="w-full max-w-lg mx-auto lg:mx-0" src={AboutMedia} />
        </div>
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:mt-13.5 lg:items-start lg:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-montserrat text-white uppercase font-bold sm:text-4xl">
              About
            </h3>
            <p className="text-3xl text-white font-montserrat uppercase font-extralight sm:text-4xl">
              Hydra vr
            </p>
          </div>
          <p className="font-montserrat text-base text-white/60 mt-10.5 mb-7 max-w-2xl">
            We partner with brands, schools, and teams to turn real-world goals
            into interactive VR journeys. Hydra blends spatial design,
            storytelling, and practical training flows so users can learn by
            moving, choosing, testing, and repeating inside a polished virtual
            space.
          </p>
          <Button variant="primary" size="lg" className="uppercase flex justify-center items-center">
            Let's get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
