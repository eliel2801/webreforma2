import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3",
      title: "Reforma Apartamento"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3",
      title: "Reforma Comercial"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-4.0.3",
      title: "Reforma Casa"
    }
  ];

  return (
    <div name="projetos" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Confira alguns dos nossos trabalhos recentes</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
