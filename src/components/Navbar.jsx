import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          QuickKart
        </h1>

        {/* Navigation */}
        <ul className="hidden gap-8 font-medium text-gray-700 md:flex">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Products</li>
          <li className="cursor-pointer hover:text-blue-600">Categories</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
        </ul>

        {/* Search */}
        <div className="hidden items-center rounded-full bg-gray-100 px-4 py-2 lg:flex">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 bg-transparent outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-700">
          <FaHeart className="cursor-pointer hover:text-red-500" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-600" />
          <FaUser className="cursor-pointer hover:text-blue-600" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;