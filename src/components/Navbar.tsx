import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // iconlar için (npm install lucide-react)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-clay shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-divina text-amber-950 font-serif text-2xl font-semibold tracking-tight"
        >
          Divina
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-divina"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        to="/"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        Home
      </Link>
      <Link
        to="/shop"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        Shop
      </Link>
      <Link
        to="/about"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        About Us
      </Link>
    </>
  );
}
