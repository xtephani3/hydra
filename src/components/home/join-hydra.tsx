import { Button } from "../ui/button";

export function JoinHydra() {
  return (
    <div className="bg-[radial-gradient(circle_at_center,#433D60,#221F2F)] p-22.5 mt-40 rounded-3xl font-montserrat flex flex-col gap-16.25">
      <div className=" flex flex-col gap-2">
        <h2 className="font-bold text-4xl text-white">Join Hydra</h2>
        <p className="font-extrabold text-4xl text-white ">
          {" "}
          Let's build your vr experience
        </p>
      </div>
      <div className="flex flex-col gap-9">
        <div className="w-full flex gap-2">
          <input
            className="w-1/2 border border-white rounded-4xl p-3 pl-7"
            placeholder="First Name"
          />
          <input
            className="w-1/2 border border-white rounded-4xl p-3 pl-7"
            placeholder="Last Name"
          />
        </div>
        <div className=" w-full flex gap-2">
          <input
            className="w-1/2 border border-white rounded-4xl p-3 pl-7"
            type="email"
            placeholder="email"
          />
          <input
            className="w-1/2 border border-white rounded-4xl p-3 pl-7"
            placeholder="Phonenumber"
          />
        </div>
        <input
          className="w-full border border-white rounded-4xl p-3 pl-7"
          placeholder="subject"
        />
        <input
          className="border border-white rounded-4xl pl-7 pt-3  pb-20"
          placeholder="Tell us something..."
        />

        <style>
          {`
        input::placeholder {
          color: #ffffff;
          opacity: 0.8;
        }
          
      `}
        </style>
      </div>
      <Button variant="primary" size="sm">
        SEND TO HYDRA
      </Button>
    </div>
  );
}
