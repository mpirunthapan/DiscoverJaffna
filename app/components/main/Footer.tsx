import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full mr-2"></div>
            <span className="font-bold text-xl">Jaffna</span>
          </div>
          <p className="text-sm text-gray-700">
            Experience the heart of Tamil culture in Sri Lanka.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="/attractions" className="hover:text-orange-500 transition">Attractions</a></li>
            <li><a href="/stays" className="hover:text-orange-500 transition">Stays</a></li>
            <li><a href="/restaurants" className="hover:text-orange-500 transition">Restaurants</a></li>
            <li><a href="/rentals" className="hover:text-orange-500 transition">Rentals</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Email: <a href="mailto:mpirunthapan@gmail.com" className="hover:text-orange-500 transition">mpirunthapan@gmail.com</a></li>
            <li>Phone: <a href="tel:+94766808474" className="hover:text-orange-500 transition">+94 766808474</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-700 text-xl">
            <a href="https://www.linkedin.com/in/pirunthapan-murugaiah/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mpirunthapan" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/pirunthapan_m/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mx-6" />

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm py-4">
        © 2025 Pirunthapan. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
