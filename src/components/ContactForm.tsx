"use client";
import { captureLead } from "@/lib/actions";
import Button from "./Button";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { set } from "zod";

export function SubmitButton() {
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
  const [state, action] = useFormState(captureLead, {});
  const formRef = useRef<any>(null);
  const [formMessages, setFormMessages] = useState<any>();

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setFormMessages({
        output: state?.output,
      });
      const timer = setTimeout(() => {
        setFormMessages({});
      }, 5000);
      return () => clearTimeout(timer);
    } else if (!state?.success) {
      setFormMessages({
        name: state?.name,
        phone: state?.phone,
        email: state?.email,
        message: state?.message,
        output: state?.output,
      });
      const timer = setTimeout(() => {
        setFormMessages({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">Contact</h2>
      <form
        className="flex flex-col justify-center w-1/3 pb-5"
        action={action}
        ref={formRef}
      >
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-2 m-2 border border-gray-400 rounded"
          placeholder="Enter your name"
        />
        {formMessages?.name && (
          <p className="text-red-800">{formMessages.name}</p>
        )}
        <label htmlFor="phone" className="font-bold">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full p-2 m-2 border border-gray-400 rounded"
          placeholder="Enter your phone number"
        />
        {formMessages?.phone && (
          <p className="text-red-800">{formMessages.phone}</p>
        )}
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full p-2 m-2 border border-gray-400 rounded hove"
          placeholder="Enter your email"
        />
        {formMessages?.email && (
          <p className="text-red-800">{formMessages.email}</p>
        )}
        <label htmlFor="message" className="font-bold">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full h-40 p-2 m-2 border border-gray-400 rounded"
          placeholder="Enter your message"
        />
        {formMessages?.message && (
          <p className="text-red-800">{formMessages.message}</p>
        )}

        {state?.success ? (
          <p className="text-green-800 p-2 text-center">
            {formMessages.output}
          </p>
        ) : (
          <p className="text-red-800 p-2 text-center">{state.output}</p>
        )}
        <div className="flex items-center w-full justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
