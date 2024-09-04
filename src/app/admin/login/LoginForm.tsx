"use client";
import { SubmitButton } from "@/components/ContactForm";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 border-2 border-white p-8">
      <h2 className="text-3xl font-bold text-center pb-5">Login</h2>
      <form className="flex flex-col items-center justify-center w-full">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-2 m-2 border border-gray-400 rounded bg-inherit my-4"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full p-2 m-2 border border-gray-400 rounded bg-inherit my-4"
        />
        <div className="flex items-center justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
