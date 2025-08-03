import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

export const Footer = () => {
  return <footer className="bg-[#1A304F] text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <span className="text-[#FCDC00]">Hex</span>Coders
            </h3>
            <p className="mb-4 text-gray-300">
              Transforming ideas into powerful software solutions that drive
              business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                  Database Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FCDC00]">
                  Security Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#FCDC00]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FCDC00]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#FCDC00]">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#FCDC00]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FCDC00]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Newsletter</h4>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-[#FCDC00] text-[#1A304F] px-4 py-2 rounded-r-md font-medium hover:bg-[#FCDC00]/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} HexCoders. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-[#FCDC00]">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#FCDC00]">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#FCDC00]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};