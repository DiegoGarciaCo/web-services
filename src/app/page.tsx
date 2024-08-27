export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/video-2.mp4" type="video/mp4" />
      </video>
      <h1>Hello World!</h1>
    </main>
  );
}
