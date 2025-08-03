import React from 'react';
import { CheckCircleIcon, TrendingUpIcon, UsersIcon, ZapIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A304F] mb-4">
            About <span className="text-[#FCDC00]">HexCoders</span>
          </h2>
          <div className="w-20 h-1 bg-[#FCDC00] mx-auto"></div>
        </div>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#1A304F] mb-4">
              Your Vision, Our Code
            </h3>
            <p className="mb-6 text-gray-700">
              Founded in 2013, HexCoders has been at the forefront of software
              development innovation. We're a team of passionate developers,
              designers, and strategists dedicated to creating exceptional
              digital experiences that solve real-world problems.
            </p>
            <p className="mb-6 text-gray-700">
              Our approach combines technical excellence with creative thinking
              to deliver solutions that not only meet your current needs but are
              built to evolve with your business.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircleIcon className="text-[#FCDC00] mr-2 mt-1" size={20} />
                <span className="text-gray-700">Agile Methodology</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-[#FCDC00] mr-2 mt-1" size={20} />
                <span className="text-gray-700">Clean Code</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-[#FCDC00] mr-2 mt-1" size={20} />
                <span className="text-gray-700">Continuous Integration</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-[#FCDC00] mr-2 mt-1" size={20} />
                <span className="text-gray-700">Client-First Approach</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            <div className="bg-[#1A304F] p-6 rounded-lg text-white">
              <ZapIcon className="text-[#FCDC00] mb-4" size={32} />
              <h4 className="mb-2 text-xl font-bold">Innovative</h4>
              <p className="text-gray-200">
                Pushing boundaries with cutting-edge solutions
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <TrendingUpIcon className="text-[#1A304F] mb-4" size={32} />
              <h4 className="text-xl font-bold text-[#1A304F] mb-2">
                Scalable
              </h4>
              <p className="text-gray-700">
                Solutions that grow with your business
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <UsersIcon className="text-[#1A304F] mb-4" size={32} />
              <h4 className="text-xl font-bold text-[#1A304F] mb-2">
                Collaborative
              </h4>
              <p className="text-gray-700">
                Working together to achieve excellence
              </p>
            </div>
            <div className="bg-[#FCDC00] p-6 rounded-lg">
              <CheckCircleIcon className="text-[#1A304F] mb-4" size={32} />
              <h4 className="text-xl font-bold text-[#1A304F] mb-2">
                Reliable
              </h4>
              <p className="text-gray-800">
                Committed to quality and on-time delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};