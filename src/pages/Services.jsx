import React from 'react';
import { FaDesktop, FaUsers, FaVideo, FaBuilding, FaCalendar, FaCoffee } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDesktop />,
      title: "Private Office",
      description: "Dedicated office space for teams of all sizes"
    },
    {
      icon: <FaUsers />,
      title: "Coworking Space",
      description: "Flexible workspace in a collaborative environment"
    },
    {
      icon: <FaVideo />,
      title: "Meeting Rooms",
      description: "Professional spaces for your important meetings"
    },
    {
      icon: <FaBuilding />,
      title: "Virtual Office",
      description: "Professional business address and mail handling"
    },
    {
      icon: <FaCalendar />,
      title: "Event Space",
      description: "Versatile venues for your corporate events"
    },
    {
      icon: <FaCoffee />,
      title: "Amenities",
      description: "Premium facilities and services for members"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577412647305-991150c7d163')`
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive workspace solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-yellow-500 text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the perfect workspace solution for your business
          </p>
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-600 transition-colors">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
