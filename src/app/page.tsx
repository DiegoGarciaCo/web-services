import Button from "@/components/Button";
import NavLinks from "@/components/NavLinks";
import ProjectCards from "@/components/ProjectCards";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
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
        <section className="min-w-full min-h-screen">
          <h2 className="text-3xl font-bold text-center px-5 pb-5">Projects</h2>
          <p className="text-center pb-5 text-lg">
            Here are some of the projects that I have worked on
          </p>
          <ProjectCards />
          <div className="flex justify-center items-center content-center gap-4 p-5 mb-8">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
              type="button"
              text="View More"
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
        </section>
      </main>
      <footer className="h-[50vh] max-w-full text-white relative">
        <div className="flex justify-evenly items-center p-5">
          <h1 className="text-4xl cursor-pointer">LOGO</h1>
          <NavLinks />
          <div className="flex items-center">
            <span className="social facebook">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="social twitter">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="social instagram">
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 p-3 border-t-2 border-white w-full">
          <p className="text-center text-sm">
            &copy; 2024 Web Services. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
