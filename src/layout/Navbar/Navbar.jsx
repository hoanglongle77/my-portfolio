"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Badges", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#experiences" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--color-background)] bg-opacity-80 backdrop-blur border-b border-[var(--color-border)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-[var(--color-primary)] font-bold text-xl tracking-wider"
        >
          My Portfolio
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-[var(--color-foreground)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden transition-all duration-300 overflow-hidden bg-[var(--color-background)] border-t border-[var(--color-border)]",
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] py-2 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
