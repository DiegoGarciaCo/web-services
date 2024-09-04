import { SubmitButton } from "./ContactForm";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">
        Subscribe To Our Newsletter
      </h2>
      <form className="flex justify-center w-1/3">
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
    </div>
  );
}
