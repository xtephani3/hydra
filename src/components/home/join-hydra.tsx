import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Button } from "../ui/button";

const inputClass =
  "w-full border border-white rounded-4xl bg-transparent p-3 pl-7 text-white outline-none transition focus:border-[#C0B7E8] focus:shadow-[0_0_0_3px_rgba(192,183,232,0.16)]";

const fieldWrapperClass = "flex w-full flex-col gap-1.5";
const errorClass = "pl-7 text-xs font-bold text-[#C0B7E8]";
const storageKey = "hydra-form-submissions";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name is too short")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name is too short")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string().trim(),
  subject: Yup.string()
    .trim()
    .min(3, "Subject is too short")
    .required("Subject is required"),
  message: Yup.string()
    .trim()
    .min(10, "Tell us a little more")
    .required("Message is required"),
});

type JoinHydraFormValues = typeof initialValues;

function saveSubmission(values: JoinHydraFormValues) {
  const existingSubmissions = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
  ) as Array<JoinHydraFormValues & { submittedAt: string }>;

  const nextSubmission = {
    ...values,
    submittedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    storageKey,
    JSON.stringify([...existingSubmissions, nextSubmission])
  );
}

export function JoinHydra() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      saveSubmission(values);
      toast.success(
        `Thanks, ${values.firstName}. Hydra has your request queued.`
      );
      resetForm();
    },
  });

  return (
    <section
      className="bg-[radial-gradient(circle_at_center,#433D60,#221F2F)] px-5 py-12 mt-20 rounded-3xl font-montserrat flex flex-col gap-10 lg:p-22.5 lg:mt-40 lg:gap-16.25"
      id="join"
    >
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold text-3xl text-white sm:text-4xl">
          Join Hydra
        </h2>
        <p className="font-extrabold text-3xl text-white sm:text-4xl">
          {" "}
          Let's build your vr experience
        </p>
      </div>
      <form className="flex flex-col gap-9" onSubmit={formik.handleSubmit}>
        <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-2">
          <div className={fieldWrapperClass}>
            <input
              className={inputClass}
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="First Name"
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className={errorClass}>{formik.errors.firstName}</p>
            )}
          </div>
          <div className={fieldWrapperClass}>
            <input
              className={inputClass}
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Last Name"
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className={errorClass}>{formik.errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-2">
          <div className={fieldWrapperClass}>
            <input
              className={inputClass}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Email"
              type="email"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={errorClass}>{formik.errors.email}</p>
            )}
          </div>
          <div className={fieldWrapperClass}>
            <input
              className={inputClass}
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Phone Number"
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className={errorClass}>{formik.errors.phone}</p>
            )}
          </div>
        </div>
        <div className={fieldWrapperClass}>
          <input
            className={inputClass}
            name="subject"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Subject"
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className={errorClass}>{formik.errors.subject}</p>
          )}
        </div>
        <div className={fieldWrapperClass}>
          <textarea
            className={`${inputClass} min-h-36 resize-none pt-5`}
            name="message"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Tell us something..."
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <p className={errorClass}>{formik.errors.message}</p>
          )}
        </div>

        <style>
          {`
        input::placeholder,
        textarea::placeholder {
          color: #ffffff;
          opacity: 0.8;
        }

      `}
        </style>
        <Button className="mx-auto" type="submit" variant="primary" size="sm">
          SEND TO HYDRA
        </Button>
      </form>
    </section>
  );
}
