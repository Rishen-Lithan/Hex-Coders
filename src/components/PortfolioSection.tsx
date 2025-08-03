import { useState } from 'react';
import { ExternalLinkIcon } from 'lucide-react';

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [{
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A full-featured online shopping platform with payment integration.'
  }, {
    title: 'Health Tracking App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    description: 'Mobile application for tracking fitness and health metrics.'
  }, {
    title: 'Financial Dashboard',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Interactive dashboard for financial data visualization and analysis.'
  }, {
    title: 'Inventory Management System',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Enterprise solution for inventory tracking and management.'
  }, {
    title: 'Social Media App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Mobile social networking application with real-time messaging.'
  }, {
    title: 'Business Analytics Tool',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Advanced analytics platform for business intelligence.'
  }];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  
  return <section id="portfolio" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A304F] mb-4">
            Our <span className="text-[#FCDC00]">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-[#FCDC00] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore our latest projects and see how we've helped businesses
            achieve their digital goals.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => setActiveFilter('all')} className={`px-6 py-2 rounded-full ${activeFilter === 'all' ? 'bg-[#1A304F] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setActiveFilter('web')} className={`px-6 py-2 rounded-full ${activeFilter === 'web' ? 'bg-[#1A304F] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              Web
            </button>
            <button onClick={() => setActiveFilter('mobile')} className={`px-6 py-2 rounded-full ${activeFilter === 'mobile' ? 'bg-[#1A304F] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              Mobile
            </button>
            <button onClick={() => setActiveFilter('enterprise')} className={`px-6 py-2 rounded-full ${activeFilter === 'enterprise' ? 'bg-[#1A304F] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              Enterprise
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
              <img src={project.image} alt={project.title} className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A304F] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-200">{project.description}</p>
                <a href="#" className="inline-flex items-center text-[#FCDC00] hover:underline">
                  View Project <ExternalLinkIcon size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};