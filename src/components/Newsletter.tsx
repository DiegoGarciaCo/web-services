"use client";
import { subscribeToNewsletter } from "@/lib/actions";
import { SubmitButton } from "./ContactForm";
import { useFormState } from "react-dom";

export default function Newsletter() {
  const [error, action] = useFormState(subscribeToNewsletter, {});
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">
        Subscribe To Our Newsletter
      </h2>
      <form className="flex justify-center w-1/3" action={action}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-2 m-2 border border-gray-400 rounded"
        />
        <div className="flex items-center justify-center">
          <SubmitButton />
        </div>
      </form>
      {error?.email && <p className="text-red-500">{error.email}</p>}
    </div>
  );
}
