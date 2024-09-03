"use client";
import { captureLead } from "@/lib/actions";
import Button from "./Button";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      buttonStyle="btn--primary"
      buttonSize="btn--medium"
      text={pending ? "Submitting..." : "Submit"}
      type="submit"
    />
  );
}

export default function ContactForm() {
  const [error, action] = useFormState(captureLead, {});
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">Contact</h2>
      <form className="flex flex-col justify-center w-1/3" action={action}>
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-2 m-2 border border-gray-400 rounded"
        />
        {error?.name && <p className="text-red-500">{error.name}</p>}
        <label htmlFor="phone" className="font-bold">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full p-2 m-2 border border-gray-400 rounded"
        />
        {error?.phone && <p className="text-red-500">{error.phone}</p>}
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full p-2 m-2 border border-gray-400 rounded hove"
        />
        {error?.email && <p className="text-red-500">{error.email}</p>}
        <label htmlFor="message" className="font-bold">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full h-40 p-2 m-2 border border-gray-400 rounded"
        />
        {error?.message && <p className="text-red-500 p-2">{error.message}</p>}
        <div className="flex items-center w-full justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
