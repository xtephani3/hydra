import { RiMapPinLine } from "@remixicon/react";
import { RiPhoneLine } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";

export function CallToActions() {
  return (
    <div className="bg-[radial-gradient(#3A3456,#211E2E)] mt-16 w-full rounded-4xl flex flex-col gap-8 px-8 py-9 font-montserrat lg:mt-40 lg:flex-row lg:justify-between lg:gap-0 lg:rounded-full lg:px-15 lg:py-12">
      <a className="flex gap-2 items-center justify-center transition hover:scale-[1.02]" href="https://maps.google.com/?q=Union+St,+Seattle,+WA+98101,+United+States" rel="noreferrer" target="_blank">
        <RiMapPinLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Pay Us a Visit</p>
          <p className="text-sm text-white/50">
            Union St, Seattle, WA 98101, United States
          </p>
        </div>
      </a>
      <a className="border-y border-y-[#C0B7E8] py-6 flex gap-4 items-center justify-center transition hover:scale-[1.02] lg:border-x lg:border-y-0 lg:border-x-[#C0B7E8] lg:px-13.5 lg:py-0" href="tel:+11011111010">
        <RiPhoneLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Give Us a Call</p>
          <p className="text-sm text-white/50">(110) 1111-1010</p>
        </div>
      </a>
      <a className="flex gap-4 items-center justify-center transition hover:scale-[1.02]" href="mailto:Contact@HydraVTech.com">
        <RiMailLine color="#C0B7E8" size={50} />
        <div>
          <p className="font-bold text-2xl text-white">Send Us a Message </p>
          <p className="text-sm text-white/50"> Contact@HydraVTech.com</p>
        </div>
      </a>
    </div>
  );
}
