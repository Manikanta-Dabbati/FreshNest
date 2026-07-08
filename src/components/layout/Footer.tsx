import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              🌿 FreshNest
            </h2>

            <p className="mt-4 text-green-100 leading-7">
              FreshNest brings farm-fresh vegetables,
              premium non-veg, dairy products,
              and refreshing drinks right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-green-100">
              <li>Home</li>
              <li>Vegetables</li>
              <li>Non-Veg</li>
              <li>Dairy</li>
              <li>Drinks</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />

              <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />

              <FaLinkedinIn className="cursor-pointer hover:text-sky-400 transition" />

              <FaGithub className="cursor-pointer hover:text-gray-300 transition" />

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-green-800 py-4 text-center text-green-100">
        © 2026 FreshNest. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;