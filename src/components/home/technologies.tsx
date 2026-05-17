import Unreal from "../../assets/png/unreal-tech.png";
import Vive from "../../assets/png/vive-tech.png";
import Oculus from "../../assets/png/oculus-tech.png";
import Unity from "../../assets/png/unity-tech.png";
import { RiArrowDownSLine } from "@remixicon/react";

export function Technologies() {
  return (
    <div className="flex flex-col gap-25 relative" id="technologies">
      <div className="bg-[url('/technologies-media.png')] bg-cover bg-no-repeat font-montserrat mt-27.75 p-30 flex flex-col gap-2 rounded-full">
        <h3 className="text-4xl font-bold text-center text-white uppercase">
          Technologies & hardware
        </h3>
        <p className="text-4xl font-extralight text-center text-white uppercase">
          used by hydra vr
        </p>
        <div className="bg-[#0e0e0e6d] w-22.5 h-22.5 rounded-full absolute flex justify-center items-center bottom-95 right-[50%]">
        <div className="size-16.25 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] flex rounded-full justify-center items-center">
        <RiArrowDownSLine />
        </div>
        </div>
      </div>
      <div className="flex items-center gap-22 justify-center">
        <img src={Unreal} alt={"unreal engine logo"} />
        <img src={Unity} alt={"unity techlogo"} />
        <img src={Oculus} alt={"oculus tech logo"} />
        <img src={Vive} alt={"vive tech logo"} />
      </div>
    </div>
  );
}
