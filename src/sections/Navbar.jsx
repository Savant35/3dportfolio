import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onLinkClick }) => (
  <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
    {navLinks.map(({ id, href, name }) => (
      <li key={id}>
        <a
          href={href}
          className="text-neutral-400 hover:text-white"
          onClick={onLinkClick}
        >
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-black/90 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
        <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white">
          Ali Arthur
        </a>
        
        {/* desktop nav */}
        <div className="hidden sm:flex">
          <NavItems />
        </div>

        {/* mobile toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="sm:hidden text-neutral-400 hover:text-white"
        >
          <img
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu icon"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* mobile sidebar */}
      <div
        id="mobile-menu"
        className={`nav-sidebar bg-black/90 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems onLinkClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
