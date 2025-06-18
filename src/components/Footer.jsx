import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative w-full bg-[#012760] py-6 sm:py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
          {/* Left Side */}
          <div className="w-full md:w-auto">
            <div className="font-k2d font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-4">
              Hirees
            </div>
            <p className="font-medium text-white text-base sm:text-lg md:text-xl max-w-md leading-relaxed">
              Bridging talent with<br/> opportunities across <br/>industries.
            </p>
          </div>

          {/* Right Side - Newsletter */}
          <div className="w-full md:w-auto">
            <p className="font-medium text-white text-sm sm:text-base md:text-lg mb-3">
              Join our newsletter to keep up to date
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 h-10 px-3 rounded-md border border-white bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <button className="w-full sm:w-auto h-10 px-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md hover:from-blue-500 hover:to-blue-700 transition-colors duration-300">
                <span className="font-medium text-white text-sm sm:text-base">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-white/30 mb-6 sm:mb-8"></div>

        {/* Links Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-base sm:text-lg mb-2">
              QUICK LINKS
            </h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {['Home', 'Find Jobs', 'Hire Employees', 'Companies', 'Dashboard', 'Jobs', 'Candidates'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-light text-white text-sm sm:text-base hover:text-blue-300 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white text-base sm:text-lg mb-2">
              LEGAL
            </h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-light text-white text-sm sm:text-base hover:text-blue-300 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-white text-base sm:text-lg mb-2">
              CONTACT
            </h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-3 sm:mr-4" />
                <a href="mailto:Support@hirees.com" className="font-light text-white text-sm sm:text-base hover:text-blue-300 transition-colors duration-300">
                  Support@hirees.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-3 sm:mr-4" />
                <a href="tel:+17327460010" className="font-light text-white text-sm sm:text-base hover:text-blue-300 transition-colors duration-300">
                  + 1 732 746 0010
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-3 sm:mr-4 mt-1" />
                <div className="font-light text-white text-sm sm:text-base">
                  FSTONE Technologies, LLC.<br />
                  2003 S Easton Rd, Suite 308,<br />
                  Doylestown, PA | 18901
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full h-px bg-white/30 mb-4 sm:mb-6"></div>

        {/* Copyright */}
        <p className="font-light text-white text-sm sm:text-base md:text-lg text-center">
          ©FstoneTech 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;