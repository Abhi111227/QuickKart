import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaHeart,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-green-600">
            QuickKart
          </h1>
          <p className="text-xs text-gray-500">
            Grocery Delivered Fast ⚡
          </p>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-3 w-[450px]">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <button className="text-2xl hover:text-red-500 transition">
            <FaHeart />
          </button>

          <button className="relative text-2xl hover:text-green-600 transition">

            <FaShoppingCart />

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>

          </button>

          <button className="text-2xl hover:text-green-600 transition">
            <FaUser />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;