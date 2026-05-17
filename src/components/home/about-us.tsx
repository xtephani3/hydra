import { Button } from "../ui/button";
import AboutMedia from "../../assets/png/about-media.png";
import LongArrow from "../../assets/png/lengthy-arrow.png";

export function AboutUs() {
  return (
    <div className="mt-40 flex flex-col gap-24.25 font-montserrat" id="about">
      <div className="flex w-full ">
        <div className="w-1/2 flex gap-2 flex-col">
          <h3 className="text-4xl text-white uppercase font-montserrat font-bold">
            Introduction
          </h3>
          <div className="flex gap-7.5 items-center">
            <p className="text-4xl text-white uppercase font-montserrat  font-extralight">
              To Hydra Vr
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

      <div className="flex w-full">
        <div className="w-1/2">
          <img src={AboutMedia} />
        </div>
        <div className="w-1/2 mt-13.5">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-montserrat text-white uppercase font-bold">
              About
            </h3>
            <p className="text-4xl text-white font-montserrat uppercase font-extralight">
              Hydra vr
            </p>
          </div>
          <p className="font-montserrat text-base text-white/60 mt-10.5 mb-7">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus <br />
            urna neque viverra justo. Vivamus at augue eget arcu dictum.
            Ultrices gravida <br /> dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. <br /> Mattis aliquam
            faucibus purus in massa. Est placerat in egestas erat imperdiet{" "}
            <br /> sed. Consequat semper viverra nam libero justo laoreet sit
            amet. Aliquam
            <br />
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet <br />
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
            nulla pha <br /> retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi <br />n tempor.
          </p>
          <Button variant="primary" size="lg" className="uppercase flex justify-center items-center">
            Let's get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
