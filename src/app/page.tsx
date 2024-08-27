import Button from "@/components/Button";
import ProjectCards from "@/components/ProjectCards";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/video-2.mp4" type="video/mp4" />
        </video>
        {/* hero content left aligned */}
        <div className="flex flex-col items-start justify-center w-full text-white">
          <h1 className="text-5xl font-bold">Web Services</h1>
          <p className="text-xl mt-4">
            Web sites Bots AI agents Android and IOS apps
          </p>
          <div className="flex mt-8 gap-4">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              type="button"
              text="Get Started"
              onClick
            />
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--outline"
              type="button"
              text="Contact"
              onClick
            />
          </div>
        </div>
      </section>
      <main>
        <section className="min-w-full min-h-screen border-l-indigo-950">
          <ProjectCards />
        </section>
      </main>
    </>
  );
}
