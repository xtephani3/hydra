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
    <div className="font-montserrat">
      <div className="bg-[#0e0e0e6d] font-montserrat size-35 rounded-full flex justify-center items-center">
        <div className="size-30 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] flex rounded-full justify-center items-center">
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
    <div className="flex flex-col gap-45 mt-40" id="how">
      <div className="flex w-full ">
        <div className="w-1/2 flex gap-2 flex-col">
          <h3 className="text-4xl text-white uppercase font-montserrat font-bold">
            How we build
          </h3>
          <div className="flex gap-7.5 items-center">
            <p className="text-4xl text-white uppercase font-montserrat  font-extralight">
              with hydra vr?
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
      <div className="flex  items-center justify-between">
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
