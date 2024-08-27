export default function ProjectCards() {
  const projectCards = [
    {
      title: "Real Estate Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/Image_one.jpg",
      alt: "Project 1",
    },
    {
      title: "Auto Detailing Website",
      description:
        "lotem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/Image_two.jpg",
      alt: "Project 2",
    },
    {
      title: "Mechanic Shop Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/Image_three.jpg",
      alt: "Project 3",
    },
    {
      title: "Barber Shop Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/Image_four.jpg",
      alt: "Project 4",
    },
    {
      title: "E-commerce Website",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/Image_five.jpg",
      alt: "Project 5",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 p-5">
      {projectCards.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover object-center"
            src={project.image}
            alt={project.alt}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-500 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
