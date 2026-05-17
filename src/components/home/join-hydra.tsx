import { Button } from "../ui/button";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const inputClass =
  "w-full border border-white rounded-4xl bg-transparent p-3 pl-7 text-white outline-none transition focus:border-[#C0B7E8] focus:shadow-[0_0_0_3px_rgba(192,183,232,0.16)]";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function JoinHydra() {
  const [formData, setFormData] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(
      `Thanks, ${formData.firstName || "friend"}. Hydra has your request queued.`
    );
    setFormData(initialFormState);
  };

  return (
    <section className="bg-[radial-gradient(circle_at_center,#433D60,#221F2F)] px-5 py-12 mt-20 rounded-3xl font-montserrat flex flex-col gap-10 lg:p-22.5 lg:mt-40 lg:gap-16.25" id="join">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold text-3xl text-white sm:text-4xl">Join Hydra</h2>
        <p className="font-extrabold text-3xl text-white sm:text-4xl">
          {" "}
          Let's build your vr experience
        </p>
      </div>
      <form className="flex flex-col gap-9" onSubmit={submitForm}>
        <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-2">
          <input
            className={inputClass}
            name="firstName"
            onChange={updateField}
            placeholder="First Name"
            required
            value={formData.firstName}
          />
          <input
            className={inputClass}
            name="lastName"
            onChange={updateField}
            placeholder="Last Name"
            required
            value={formData.lastName}
          />
        </div>
        <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-2">
          <input
            className={inputClass}
            name="email"
            onChange={updateField}
            type="email"
            placeholder="Email"
            required
            value={formData.email}
          />
          <input
            className={inputClass}
            name="phone"
            onChange={updateField}
            placeholder="Phone Number"
            value={formData.phone}
          />
        </div>
        <input
          className={inputClass}
          name="subject"
          onChange={updateField}
          placeholder="Subject"
          required
          value={formData.subject}
        />
        <textarea
          className={`${inputClass} min-h-36 resize-none pt-5`}
          name="message"
          onChange={updateField}
          placeholder="Tell us something..."
          required
          value={formData.message}
        />

        <style>
          {`
        input::placeholder {
          color: #ffffff;
          opacity: 0.8;
        }
          
      `}
        </style>
        <Button className="mx-auto" type="submit" variant="primary" size="sm">
        SEND TO HYDRA
      </Button>
        {statusMessage && (
          <p className="text-center text-sm font-bold text-[#C0B7E8]">
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}
