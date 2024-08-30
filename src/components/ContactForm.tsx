"use client";
import { captureLead } from "@/lib/actions";
import Button from "./Button";
import { useFormState } from "react-dom";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">Contact</h2>
      <form
        className="flex flex-col items-center justify-center w-full"
        action={captureLead}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-1/2 p-2 m-2 border border-gray-400 rounded"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-1/2 p-2 m-2 border border-gray-400 rounded"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-1/2 p-2 m-2 border border-gray-400 rounded"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-1/2 p-2 m-2 border border-gray-400 rounded"
        />
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          text="Submit"
          type="submit"
          onClick={() => {
            console.log("Form submitted");
          }}
        />
      </form>
    </div>
  );
}
