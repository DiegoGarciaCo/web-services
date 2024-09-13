import { productCardProps } from "@/lib/definitions";
import Image from "next/image";

export default function ProductCard({
  image,
  catagory,
  title,
  description,
}: productCardProps) {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Image
        src={image}
        alt="product"
        width={425}
        height={250}
        className="bg-slate-500"
      />
      <div className="flex flex-col items-start justify-center">
        <span>{catagory}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
