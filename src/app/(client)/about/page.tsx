import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="h-[50vh]">
        <Image src="" alt="About" width={1920} height={1080} />
      </section>
      <main>
        <section className="flex flex-col gap-3 items-center justify-center border-2 p-5">
          <h1>Our Mission</h1>
          <p className="w-1/2 leading-6">
            "At Visionary Edge, our mission is to empower businesses of all
            sizes by providing a comprehensive, tailored foundation for success.
            We are dedicated to delivering innovative solutions and expert
            guidance, ensuring every aspect of your business is meticulously
            crafted and seamlessly integrated. Our commitment is to be the
            ultimate partner in your journey, equipping you with the tools,
            resources, and support needed to thrive in today’s dynamic market."
          </p>
        </section>
        <section className="flex gap-3 items-center justify-center border-2">
          <div className="w-1/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            autem totam odio quidem, laboriosam delectus ratione. Molestiae rem
            unde quos eum repellendus quas deserunt hic pariatur eaque!
            Suscipit, facilis veritatis.
          </div>
          <div className="w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            qui tenetur reprehenderit quam incidunt consequatur mollitia impedit
            quisquam fugiat ullam iusto cum quas vero sequi, debitis adipisci
            iure inventore rerum?
          </div>
        </section>
        <section className="flex items-center justify-center border-2">
          <Image
            src=""
            alt="About"
            width={1920}
            height={1080}
            className="w-10/12 border-2"
          />
        </section>
        <section className="flex justify-center items-center gap-3 px-4">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at
            non officiis facere doloremque quidem mollitia ex doloribus rem
            eligendi minus sed aperiam numquam officia magni, harum eum laborum
            dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at
            non officiis facere doloremque quidem mollitia ex doloribus rem
            eligendi minus sed aperiam numquam officia magni, harum eum laborum
            dolores.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at
            non officiis facere doloremque quidem mollitia ex doloribus rem
            eligendi minus sed aperiam numquam officia magni, harum eum laborum
            dolores.
          </div>
        </section>
        <section>
          <Testimonials />
        </section>
      </main>
    </>
  );
}
