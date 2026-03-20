import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3b2a21] to-[#1c120d] text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ☕ E-Coffee
          </h2>
          <p className="text-sm leading-6">
            Experience premium coffee crafted with love.
            Fresh beans, rich aroma, and unforgettable taste.
          </p>

          {/* Social */}
          <div className="flex space-x-4 mt-6">
            <div className="p-3 bg-[#5c4033] rounded-full hover:bg-[#c89b6d] transition">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-[#5c4033] rounded-full hover:bg-[#c89b6d] transition">
              <FaInstagram />
            </div>
            <div className="p-3 bg-[#5c4033] rounded-full hover:bg-[#c89b6d] transition">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Coffee Menu
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-[#c89b6d] cursor-pointer">Espresso</li>
            <li className="hover:text-[#c89b6d] cursor-pointer">Latte</li>
            <li className="hover:text-[#c89b6d] cursor-pointer">Cappuccino</li>
            <li className="hover:text-[#c89b6d] cursor-pointer">Mocha</li>
          </ul>
        </div>

        {/* Opening */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Opening Hours
          </h3>
          <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
          <p>Saturday: 8:00 AM - 10:00 PM</p>
          <p>Sunday: 8:00 AM - 8:00 PM</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> Phnom Penh, Cambodia
            </p>
            <p className="flex items-center gap-3">
              <FaPhone /> +855 12 345 678
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> ecoffee@email.com
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#5c4033] text-center py-5 text-sm">
        © {new Date().getFullYear()} E-Coffee | Made with ☕ & ❤️
      </div>

    </footer>
  );
}