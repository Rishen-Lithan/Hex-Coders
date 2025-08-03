import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';

export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A304F] mb-4">
            Get In <span className="text-[#FCDC00]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#FCDC00] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Have a project in mind? We'd love to hear from you. Reach out to us
            and let's create something amazing together.
          </p>
        </div>
        
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="p-8 bg-white rounded-lg shadow-md lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#1A304F] mb-6">
              Send Us A Message
            </h3>
            <form>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCDC00]" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Your Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCDC00]" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCDC00]" placeholder="Project Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Your Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCDC00]" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="bg-[#1A304F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1A304F]/90 transition-colors flex items-center">
                Send Message
                <SendIcon size={18} className="ml-2" />
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-[#1A304F] text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FCDC00] p-3 rounded-full mr-4">
                    <MapPinIcon size={24} className="text-[#1A304F]" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold">Our Location</h4>
                    <p className="text-gray-300">
                      Primary Location : Italy
                    </p>
                    <p className="text-gray-300">Development Center : Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FCDC00] p-3 rounded-full mr-4">
                    <PhoneIcon size={24} className="text-[#1A304F]" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold">Call Us</h4>
                    <p className="text-gray-300">+39 328 712 7470</p>
                    <p className="text-gray-300">+94 76 921 1122</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FCDC00] p-3 rounded-full mr-4">
                    <MailIcon size={24} className="text-[#1A304F]" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold">Email Us</h4>
                    <p className="text-gray-300">info.hexcoders@gmail.com</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};