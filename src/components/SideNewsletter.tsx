"use client";
import { subscribeToNewsletter } from "@/lib/actions";
import { SubmitButton } from "./ContactForm";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";

export default function Newsletter() {
  const [state, action] = useFormState(subscribeToNewsletter, {});
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
        email: state?.email,
      });
      const timer = setTimeout(() => {
        setFormMessages({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-full p-5">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl pb-2 font-medium">Join To Our Newsletter</h2>
        <p>Subscribe for Business and Marketing tips and tricks</p>
      </div>
      <form
        className="flex md:justify-center md:w-1/3"
        action={action}
        ref={formRef}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-2 m-2 border border-gray-200 rounded-lg"
        />
        <div className="flex items-center justify-center">
          <SubmitButton />
        </div>
      </form>
      {formMessages?.email && (
        <p className="text-red-800 md:hidden">{formMessages?.email}</p>
      )}
      {state?.success ? (
        <p className="text-green-800 md:hidden">{formMessages.output}</p>
      ) : (
        <p className="text-red-800 md:hidden">{state.output}</p>
      )}
    </div>
  );
}
