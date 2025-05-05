
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-clay shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center ">
            <img src="/images/logo.png" className="w-8 h-8 mr-2 rounded-sm" alt="" />
        <Link to="/" className="text-divina text-amber-950 font-serif text-2xl font-semibold tracking-tight">
          Divina
        </Link>
        </div>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-rosewood hover:text-divina transition-colors font-light">
            Home
          </Link>
          <Link to="/shop" className="text-rosewood hover:text-divina transition-colors font-light">
            Shop
          </Link>
          <Link to="/about" className="text-rosewood hover:text-divina transition-colors font-light">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
