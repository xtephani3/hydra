import { RiMapPinLine } from "@remixicon/react";
import { RiPhoneLine } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";

export function CallToActions() {
  return (
    <div className="bg-[radial-gradient(#3A3456,#211E2E)] mt-40 w-full rounded-full flex justify-between px-15 py-12 font-montserrat">
      <div className=" flex gap-2 items-center justify-center">
        <RiMapPinLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Pay Us a Visit</p>
          <p className="text-sm text-white/50">
            Union St, Seattle, WA 98101, United States
          </p>
        </div>
      </div>
      <div className="border-x border-x-[#C0B7E8] px-13.5 flex gap-4 items-center justify-center">
        <RiPhoneLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Give Us a Call</p>
          <p className="text-sm text-white/50">(110) 1111-1010</p>
        </div>
      </div>
      <div className=" flex gap-4 items-center justify-center">
        <RiMailLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Send Us a Message </p>
          <p className="text-sm text-white/50"> Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  );
}
