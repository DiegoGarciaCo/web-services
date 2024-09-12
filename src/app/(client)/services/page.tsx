import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Image src="" alt="Services" width={1920} height={1080} />
      <section className="flex flex-col items-center justify-center p-16 overflow-x-hidden max-w-full">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 leading-5 w-1/2">
          Visionary Edge drives business success with cutting-edge strategies
          and innovative solutions. Our forward-thinking approach keeps your
          brand at the forefront of industry trends, delivering exceptional
          results through visionary insights and practical expertise.
        </p>
        <div className="flex mt-8 gap-4">
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--primary"
            type="button"
            text={<Link href="/contact">Get Started</Link>}
          />
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--nav"
            type="button"
            text={<Link href="/about">Learn More</Link>}
          />
        </div>
      </section>
      <section className="flex justify-center items-start gap-2">
        <Image src="" alt="Services" width={1920} height={1080} />
        <div className="flex flex-col items-start justify-start">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            corporis asperiores quidem odio iste perferendis quis quo omnis
            ratione, cupiditate cumque in facere, labore temporibus harum
            perspiciatis? Pariatur, ullam sequi!
          </p>
        </div>
      </section>
      <section className="flex justify-center items-start gap-2">
        <div className="flex flex-col items-start justify-start">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            corporis asperiores quidem odio iste perferendis quis quo omnis
            ratione, cupiditate cumque in facere, labore temporibus harum
            perspiciatis? Pariatur, ullam sequi!
          </p>
        </div>
        <Image src="" alt="Services" width={1920} height={1080} />
      </section>
      <section className="flex justify-center items-start gap-2">
        <Image src="" alt="Services" width={1920} height={1080} />
        <div className="flex flex-col items-start justify-start">
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            corporis asperiores quidem odio iste perferendis quis quo omnis
            ratione, cupiditate cumque in facere, labore temporibus harum
            perspiciatis? Pariatur, ullam sequi!
          </p>
        </div>
      </section>
    </>
  );
}
