import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-green-500">
            QuickKart
          </h2>

          <p className="text-gray-400 mt-4">
            Your one-stop online grocery store delivering fresh products at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Customer Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <button className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
              <FaFacebookF />
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
              <FaInstagram />
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
              <FaXTwitter />
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
              <FaLinkedinIn />
            </button>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-5 text-center text-gray-500">
        © 2026 QuickKart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;