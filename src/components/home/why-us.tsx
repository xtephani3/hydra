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
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    icon: Education,
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    icon: SelfCare,
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    icon: Outdoor,
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
];

type WhyUsCardProps = {
  icon: string;
  title: string;
  description: string;
};

const WhyUsCard = ({ icon, title, description }: WhyUsCardProps) => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,#433D60,#221F2F)] font-montserrat px-5 py-6 rounded-4xl flex flex-col justify-center items-center gap-8.5">
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
    <div className="flex flex-col gap-40 mt-27.75" id="services">
      <div className="flex w-full ">
        <div className="w-1/2 flex gap-2 flex-col">
          <h3 className="text-4xl text-white uppercase font-montserrat font-bold">
            why build
          </h3>
          <div className="flex gap-7.5 items-center">
            <p className="text-4xl text-white uppercase font-montserrat  font-extralight">
              with hydra
            </p>
            <img src={LongArrow} />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-montserrat text-base text-white/60">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat
            <br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
            mauris commodo
            <br /> quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit
            amet tellus. Ornare <br /> lectus sit amet est placerat in. Lectus
            magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
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
