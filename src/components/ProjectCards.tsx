export default function ProjectCards() {
  const projectCards = [
    {
      title: "Real Estate Website",
      description: "This is a Real Estate website",
      image: "/image-1.jpg",
      alt: "Project 1",
    },
    {
      title: "Auto Detailing Website",
      description: "This is a Auto detailing website",
      image: "/image-2.jpg",
      alt: "Project 2",
    },
    {
      title: "Mechanic Shop Website",
      description: "This is a Mechanic shop website",
      image: "/image-3.jpg",
      alt: "Project 3",
    },
    {
      title: "Barber Shop Website",
      description: "This is a Barber shop website",
      image: "/image-4.jpg",
      alt: "Project 4",
    },
    {
      title: "E-commerce Website",
      description: "This is a E-commerce website",
      image: "/image-5.jpg",
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
