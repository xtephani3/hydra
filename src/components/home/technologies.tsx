import Unreal from "../../assets/png/unreal-tech.png";
import Vive from "../../assets/png/vive-tech.png";
import Oculus from "../../assets/png/oculus-tech.png";
import Unity from "../../assets/png/unity-tech.png";
import { RiArrowDownSLine } from "@remixicon/react";

export function Technologies() {
  return (
    <div className="flex flex-col gap-12 relative lg:gap-25" id="technologies">
      <div className="bg-[url('/technologies-media.png')] bg-cover bg-center bg-no-repeat font-montserrat mt-20 px-6 py-20 flex flex-col gap-2 rounded-4xl lg:mt-27.75 lg:p-30 lg:rounded-full">
        <h3 className="text-3xl font-bold text-center text-white uppercase sm:text-4xl">
          Technologies & hardware
        </h3>
        <p className="text-3xl font-extralight text-center text-white uppercase sm:text-4xl">
          used by hydra vr
        </p>
        <div className="hidden bg-[#0e0e0e6d] w-22.5 h-22.5 rounded-full absolute justify-center items-center bottom-95 right-[50%] lg:flex">
        <div className="size-16.25 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] flex rounded-full justify-center items-center">
        <RiArrowDownSLine />
        </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-8 justify-items-center lg:flex lg:gap-22 lg:justify-center">
        <img className="transition hover:scale-110" src={Unreal} alt={"unreal engine logo"} />
        <img className="transition hover:scale-110" src={Unity} alt={"unity techlogo"} />
        <img className="transition hover:scale-110" src={Oculus} alt={"oculus tech logo"} />
        <img className="transition hover:scale-110" src={Vive} alt={"vive tech logo"} />
      </div>
    </div>
  );
}
