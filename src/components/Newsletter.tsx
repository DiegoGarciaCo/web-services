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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">
        Subscribe To Our Newsletter
      </h2>
      <form className="flex justify-center w-1/3" action={action} ref={formRef}>
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
      {formMessages?.email && (
        <p className="text-red-800">{formMessages?.email}</p>
      )}
      {state?.success ? (
        <p className="text-green-800">{formMessages.output}</p>
      ) : (
        <p className="text-red-800">{state.output}</p>
      )}
    </div>
  );
}
