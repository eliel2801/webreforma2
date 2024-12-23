import React from 'react';
import { FaHome, FaBuilding, FaPaintRoller, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHome size={50} />,
      title: "Reformas Residenciais",
      description: "Transformamos sua casa no lar dos seus sonhos"
    },
    {
      id: 2,
      icon: <FaBuilding size={50} />,
      title: "Reformas Comerciais",
      description: "Espaços comerciais modernos e funcionais"
    },
    {
      id: 3,
      icon: <FaPaintRoller size={50} />,
      title: "Pintura",
      description: "Acabamento perfeito e duradouro"
    },
    {
      id: 4,
      icon: <FaTools size={50} />,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva"
    }
  ];

  return (
    <div name="serviços" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Nossos Serviços
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {services.map(({ id, icon, title, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500">
              <div className="flex justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
              <p className="text-center text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
