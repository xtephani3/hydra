import LongArrow from "../../assets/png/lengthy-arrow.png";

const howWeBuildData = [
  {
    number: " 01",
    content: "3D conception",
    contentTwo: "& Design",
  },
  {
    number: " 02",
    content: "Interaction",
    contentTwo: "Design",
  },
  {
    number: " 03",
    content: "VR world",
    contentTwo: "User testing",
  },
  {
    number: " 04",
    content: "Hydra VR",
    contentTwo: "Deploy",
  },
];

type HowWeBuildListProps = {
  number: string;
  content: string;
  contentTwo: string;
};

const HowWeBuildList = ({
  number,
  content,
  contentTwo,
}: HowWeBuildListProps) => {
  return (
    <div className="font-montserrat flex flex-col items-center gap-6 text-center transition duration-300 hover:-translate-y-2">
      <div className="bg-[#0e0e0e6d] font-montserrat size-35 rounded-full flex justify-center items-center">
        <div className="size-30 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] flex rounded-full justify-center items-center text-5xl font-bold text-[#343045]">
          {number}
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-white ">{content}</p>
        <p className="text-2xl font-bold text-white ">{contentTwo}</p>
      </div>
    </div>
  );
};

export function HowWeBuild() {
  return (
    <div className="flex flex-col gap-16 mt-20 lg:gap-45 lg:mt-40" id="how">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="flex gap-2 flex-col text-center lg:w-1/2 lg:text-left">
          <h3 className="text-3xl text-white uppercase font-montserrat font-bold sm:text-4xl">
            How we build
          </h3>
          <div className="flex justify-center gap-7.5 items-center lg:justify-start">
            <p className="text-3xl text-white uppercase font-montserrat  font-extralight sm:text-4xl">
              with hydra vr?
            </p>
            <img className="hidden lg:block" src={LongArrow} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="font-montserrat text-base text-white/60">
            Every Hydra project starts with the goal, then moves through spatial
            design, interaction planning, user testing, and final deployment.
            The result is a VR experience that feels visually rich, easy to
            navigate, and built around the audience who will use it.
          </p>
        </div>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between">
        {howWeBuildData.map((step, index) => (
          <HowWeBuildList
            key={index}
            number={step.number}
            content={step.content}
            contentTwo={step.contentTwo}
          />
        ))}
      </div>
    </div>
  );
}
