import LongArrow from "../../assets/png/lengthy-arrow.png";
import Simulation from "../../assets/png/simulation-image.png";
import { Button } from "../ui/button";
import Education from "../../assets/png/education-why-media.png";
import Outdoor from "../../assets/png/outdoor-why-media.png";
import SelfCare from "../../assets/png/self-care-why-media.png";

const whyUsCardData = [
  {
    icon: Simulation,
    title: "simulation",
    description:
      "Build lifelike training rooms where users can practice procedures, decisions, and safety steps before they happen in the real world.",
  },
  {
    icon: Education,
    title: "EDUCATION",
    description:
      "Turn lessons into memorable 3D experiences with guided discovery, visual context, and hands-on learning moments.",
  },
  {
    icon: SelfCare,
    title: "SELF-CARE",
    description:
      "Create calming wellness spaces for focus, reflection, recovery, and guided routines that users can revisit anytime.",
  },
  {
    icon: Outdoor,
    title: "OUTDOOR",
    description:
      "Explore adventurous virtual environments that bring travel, sport, and team challenges into immersive digital spaces.",
  },
];

type WhyUsCardProps = {
  icon: string;
  title: string;
  description: string;
};

const WhyUsCard = ({ icon, title, description }: WhyUsCardProps) => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,#433D60,#221F2F)] font-montserrat px-5 py-6 rounded-4xl flex flex-col justify-center items-center gap-8.5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
      <div className="rounded-full p-2.5 bg-[#221F2F]">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-7.5 justify-center items-center">
        <h2 className="text-2xl text-white font-bold font-montserrat uppercase">
          {title}
        </h2>
        <p className="text-xs text-white/50 font-montserrat"> {description}</p>
        <Button variant="primary" size="sm">
          TRY IT NOW
        </Button>
      </div>
    </div>
  );
};

export function WhyUs() {
  return (
    <div className="flex flex-col gap-16 mt-20 lg:gap-40 lg:mt-27.75" id="services">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="flex gap-2 flex-col text-center lg:w-1/2 lg:text-left">
          <h3 className="text-3xl text-white uppercase font-montserrat font-bold sm:text-4xl">
            why build
          </h3>
          <div className="flex justify-center gap-7.5 items-center lg:justify-start">
            <p className="text-3xl text-white uppercase font-montserrat  font-extralight sm:text-4xl">
              with hydra
            </p>
            <img className="hidden lg:block" src={LongArrow} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="font-montserrat text-base text-white/60">
            Virtual reality gives your audience a place to participate instead
            of only watching. Hydra builds focused environments for training,
            education, wellness, and exploration, helping people understand
            faster through movement, presence, and repeatable practice.
          </p>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {whyUsCardData.map((step, index) => (
          <WhyUsCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}
