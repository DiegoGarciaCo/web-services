"use client";
import { captureLead } from "@/lib/actions";
import Button from "./Button";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";

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

export default function ContactForm({
  heading,
  text,
}: {
  heading?: string;
  text?: string;
}) {
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
      <h2 className="md:text-3xl text-2xl font-bold text-center pb-2">
        {heading}
      </h2>
      <p className="text-center pb-5 md:w-1/2">{text}</p>
      <form
        className="flex flex-col justify-center md:w-1/3 w-5/6 pb-5"
        action={action}
        ref={formRef}
      >
        <label htmlFor="name" className="font-bold">
          Name:<span className="text-red-800">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-2 my-2 border border-gray-200 rounded-lg"
          placeholder="Full Name"
        />
        {formMessages?.name && (
          <p className="text-red-800">{formMessages.name}</p>
        )}
        <label htmlFor="phone" className="font-bold">
          Phone:<span className="text-red-800">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full p-2 my-2 border border-gray-200 rounded-lg"
          placeholder="Phone Number"
        />
        {formMessages?.phone && (
          <p className="text-red-800">{formMessages.phone}</p>
        )}
        <label htmlFor="email" className="font-bold">
          Email:<span className="text-red-800">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full p-2 my-2 border border-gray-200 rounded-lg"
          placeholder="Email"
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
          className="w-full h-40 p-2 my-2 border border-gray-200 rounded-lg"
          placeholder="Enter your message..."
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
        <div className="flex w-full items-center justify-start">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
