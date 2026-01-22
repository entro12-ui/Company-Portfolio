"use client";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white pt-10 sm:pt-16 pb-6 sm:pb-8"
      id="contact"
    >
      <div className="flex flex-col items-center w-full">
        {/* Logo and Navigation side by side */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-10 px-4">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 md:mb-0 md:mr-10 flex-shrink-0 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">
                E
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
                SOLUTIONS
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="hover:text-gray-300">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-gray-300">
                    Platform Features
                  </a>
                </li>
                <li>
                  <a href="#industries" className="hover:text-gray-300">
                    Industries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
                COMPANY
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
                PRODUCTS
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="hover:text-gray-300">
                    Access Control System
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-gray-300">
                    MediCare AI
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-gray-300">
                    Car Service Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">
                SUPPORT
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:entro12@entroethiopia.com"
                    className="hover:text-gray-300"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+251979113638"
                    className="hover:text-gray-300"
                  >
                    Call Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Big ENTRO below links */}
        <div className="w-full flex justify-center my-6 sm:my-8">
          <span className="text-[10vw] sm:text-[18vw] font-bold text-gray-800 opacity-60 leading-none tracking-tighter select-none pointer-events-none">
            ENTRO
          </span>
        </div>

        {/* Social Media Links */}
        {/* <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label="Telegram"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/telegram.svg"
                alt="Telegram"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div> */}

        {/* Contact Information */}
        <div className="max-w-4xl text-center mb-8 px-4">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">📞</span>
              <p className="font-semibold">Phone</p>
              <a href="tel:+251979113638" className="hover:text-white transition">
                +251 979 113 638
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">📧</span>
              <p className="font-semibold">Email</p>
              <a href="mailto:entro12@entroethiopia.com" className="hover:text-white transition">
                entro12@entroethiopia.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">📍</span>
              <p className="font-semibold">Address</p>
              <p className="text-sm">Megnagna, Hibret Bldg</p>
              <p className="text-sm">Office No. H7-702</p>
              <p className="text-sm">Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <p>TIN: 0095875999</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl text-center text-sm text-gray-400 mb-4 px-4">
          Entro Ethiopia Software and Hardware Development PLC is a local tech company 
          providing comprehensive software solutions including Access Control Systems, Healthcare 
          Management (MediCare AI), Car Service Management, and Custom Software Development. 
          We empower Ethiopian and African businesses through innovative technology solutions.
        </div>
        {/* Copyright */}
        <div className="text-center text-sm bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
          © COPYRIGHT ENTRO ETHIOPIA {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
