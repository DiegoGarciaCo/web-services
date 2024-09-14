import Image from "next/image";

export default function ProjectCards() {
  const projectCards = [
    {
      title: "Real Estate Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageOne.webp",
      alt: "Project 1",
    },
    {
      title: "Auto Detailing Website",
      description:
        "lotem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageTwo.webp",
      alt: "Project 2",
    },
    {
      title: "Mechanic Shop Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageThree.webp",
      alt: "Project 3",
    },
    {
      title: "Barber Shop Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageFour.webp",
      alt: "Project 4",
    },
    {
      title: "E-commerce Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageFive.webp",
      alt: "Project 5",
    },
    {
      title: "CRM",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/ImageSix.webp",
      alt: "Project 6",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16 my-5 p-5">
      {projectCards.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl"
        >
          <div>
            <Image
              src={project.image}
              alt={project.alt}
              width={500}
              height={300}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhoCAABXRUJQVlA4WAoAAAAgAAAAAgAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAAAALABAJ0BKgMAAgADgFoljAJ0AQ76RrgA/puD/2uvf/SMEp9XSLZZLSILQDAA"
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-500 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
