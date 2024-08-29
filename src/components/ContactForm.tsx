export default function ContactForm({ action }: { action: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold text-center pb-5">Contact</h2>
      <form
        className="flex flex-col items-center justify-center w-full"
        action={action}
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
        <button
          type="submit"
          className="w-1/2 p-2 m-2 border border-gray-400 rounded bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
