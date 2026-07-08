import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Vegetables", path: "/vegetables" },
  { name: "Non-Veg", path: "/nonveg" },
  { name: "Dairy", path: "/dairy" },
  { name: "Drinks", path: "/drinks" },
  { name: "About", path: "/about" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-700"
        >
          <IoLeaf className="text-3xl" />
          FreshNest
        </NavLink>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700 pb-1"
                    : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-48"
            />
          </div>

          <NavLink to="/wishlist">
            <FaHeart
              size={22}
              className="text-gray-700 hover:text-red-500 transition"
            />
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart
              size={22}
              className="text-gray-700 hover:text-green-700 transition"
            />
          </NavLink>

        </div>

      </div>
    </header>
  );
}

export default Navbar;