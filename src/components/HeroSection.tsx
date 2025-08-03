import { CodeIcon, ArrowRightIcon } from 'lucide-react';

export const HeroSection = () => {
  return <section id="home" className="relative bg-[#1A304F] text-white overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FCDC00]/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#FCDC00]/10 blur-3xl"></div>
      <div className="container flex flex-col items-center px-4 py-24 mx-auto md:py-32 md:flex-row">
        <div className="z-10 md:w-1/2">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            We Build <span className="text-[#FCDC00]">Software</span> That
            Matters
          </h1>
          <p className="max-w-md mb-8 text-lg text-gray-200">
            HexCoders transforms your ideas into powerful, scalable, and
            user-friendly software solutions that drive business growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FCDC00] text-[#1A304F] px-6 py-3 rounded-md font-medium flex items-center hover:bg-[#FCDC00]/90 transition-colors">
              Get Started
              <ArrowRightIcon className="ml-2" size={18} />
            </button>
            <button className="px-6 py-3 font-medium transition-colors border border-white rounded-md hover:bg-white/10">
              View Our Work
            </button>
          </div>
        </div>
        <div className="z-10 flex justify-center mt-12 md:w-1/2 md:mt-0">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-[#FCDC00] rounded-full flex items-center justify-center">
              <CodeIcon size={150} className="text-[#1A304F]" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-[#1A304F] p-4 rounded-lg shadow-lg">
              <div className="font-bold">10+ Years</div>
              <div className="text-sm">of Excellence</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white text-[#1A304F] p-4 rounded-lg shadow-lg">
              <div className="font-bold">200+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};