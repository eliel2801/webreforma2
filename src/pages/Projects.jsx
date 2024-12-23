import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaClock, FaRuler } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ImageSlider from '../components/ImageSlider';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "Residential",
      location: "Canggu, Bali",
      area: "450 m²",
      duration: "4 months",
      budget: "$180,000",
      beforeImage: "https://images.unsplash.com/photo-1464146072230-91cabc968266",
      afterImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
      description: "Complete transformation of a traditional villa into a modern luxury residence",
      features: [
        "Open concept living",
        "Modern kitchen design",
        "Pool area renovation",
        "Smart home integration",
        "Sustainable materials"
      ],
      testimonial: {
        text: "The transformation is incredible. Our villa now perfectly combines luxury with comfort.",
        author: "Michael Roberts",
        position: "Homeowner"
      }
    },
    {
      id: 2,
      title: "Modern Restaurant Design",
      category: "Commercial",
      location: "Seminyak, Bali",
      area: "300 m²",
      duration: "3 months",
      budget: "$150,000",
      beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      afterImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      description: "Transformation of a traditional space into a contemporary dining experience",
      features: [
        "Open kitchen concept",
        "Custom lighting design",
        "Outdoor dining area",
        "Bar renovation",
        "Acoustic treatment"
      ],
      testimonial: {
        text: "Our restaurant has become the talk of the town. The design perfectly matches our vision.",
        author: "Sarah Chen",
        position: "Restaurant Owner"
      }
    },
    {
      id: 3,
      title: "Boutique Hotel Makeover",
      category: "Hospitality",
      location: "Ubud, Bali",
      area: "800 m²",
      duration: "6 months",
      budget: "$300,000",
      beforeImage: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      afterImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      description: "Complete renovation of a boutique hotel with modern amenities",
      features: [
        "Room redesign",
        "Infinity pool addition",
        "Spa facility upgrade",
        "Restaurant renovation",
        "Reception area makeover"
      ],
      testimonial: {
        text: "The renovation has elevated our hotel to a new level of luxury and comfort.",
        author: "James Wilson",
        position: "Hotel Manager"
      }
    },
    {
      id: 4,
      title: "Modern Office Space",
      category: "Commercial",
      location: "Jakarta, Indonesia",
      area: "600 m²",
      duration: "4 months",
      budget: "$200,000",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      afterImage: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
      description: "Transformation of traditional office into a modern collaborative workspace",
      features: [
        "Open plan design",
        "Meeting pods",
        "Break-out areas",
        "Green spaces",
        "Tech integration"
      ],
      testimonial: {
        text: "Our team's productivity has increased significantly in the new space.",
        author: "David Chang",
        position: "CEO, Tech Solutions"
      }
    }
  ];

  const categories = ['all', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative group cursor-pointer" onClick={() => setSelectedProject(project)}>
        <div className="relative h-80 overflow-hidden">
          <ImageSlider 
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <FaRuler className="mr-2" />
              {project.area}
            </div>
            <div className="flex items-center text-gray-600">
              <FaClock className="mr-2" />
              {project.duration}
            </div>
          </div>

          <button className="text-yellow-500 font-semibold flex items-center hover:text-yellow-600">
            View Details <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-lg w-full max-w-4xl my-8">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="mb-8">
              <ImageSlider 
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Project Details</h4>
                <div className="space-y-3">
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Area:</strong> {project.area}</p>
                  <p><strong>Duration:</strong> {project.duration}</p>
                  <p><strong>Budget:</strong> {project.budget}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Client Testimonial</h4>
              <blockquote className="text-gray-600 italic">
                "{project.testimonial.text}"
                <footer className="mt-2 text-gray-700 font-medium">
                  {project.testimonial.author}, {project.testimonial.position}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        title="Our Projects"
        subtitle="Transforming spaces into extraordinary environments"
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
      />
      
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Project Detail Modal */}
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
