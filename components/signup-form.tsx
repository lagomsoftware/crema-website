"use client";

import Spinner from "./spinner";
import axios from "axios";
import { MailIcon } from "lucide-react";
import { useFormik } from "formik";

interface FormValues {
  email: string;
}

export default function SignupForm() {
  // Local state
  const form = useFormik<FormValues>({
    initialValues: { email: "" },
    onSubmit: handleSignup,
  });

  // Handlers
  async function handleSignup(values: FormValues): Promise<any> {
    return axios
      .post("https://crema-api.onrender.com/waitlist", values)
      .then((res) => {
        form.resetForm();
        alert("You are now on the waitlist!");
        return res;
      })
      .catch((e) => {
        alert(
          "Something went wrong and we could not add you to the waitlist. This might mean that you've already signed up before."
        );

        return e;
      });
  }

  return (
    <form
      onSubmit={form.handleSubmit}
      className="relative flex flex-col items-center w-full max-w-lg mt-8 sm:py-2 sm:px-2 sm:items-stretch gap-5 sm:gap-2 sm:flex-row sm:border sm:rounded-full sm:mt-10 sm:bg-stone-800 sm:border-stone-700 focus-within:border-stone-600 transition"
    >
      <input
        required
        id="email"
        name="email"
        type="email"
        minLength={0}
        maxLength={256}
        value={form.values.email}
        onChange={form.handleChange}
        placeholder="jane.doe@email.com"
        className="w-full py-2 pl-5 pr-4 text-lg border rounded-full sm:w-auto sm:flex-1 border-stone-700 sm:border-none bg-stone-800 input sm:pl-12 placeholder-stone-500 focus:placeholder-stone-600 focus:outline-none peer transition"
      />

      <MailIcon
        className="absolute hidden stroke-stone-800 left-5 top-1/2 sm:block -translate-y-1/2 fill-stone-500 group-hover:fill-black transition peer-focus:fill-stone-300 peer-autofill:fill-transparent peer-autofill:peer-focus:fill-transparent"
        size={24}
      />

      <button
        disabled={form.isSubmitting}
        className="w-full disabled:opacity-60 flex justify-center items-center gap-3 sm:w-auto px-5 py-2.5 font-medium bg-emerald-700 enabled:hover:bg-emerald-600 enabled:hover:shadow-xl enabled:hover:shadow-emerald-800/40 rounded-full transition group select-none"
      >
        <span>Join waitlist</span>

        {form.isSubmitting && <Spinner size="small" />}
      </button>
    </form>
  );
}
