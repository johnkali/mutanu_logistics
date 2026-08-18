import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../data/site";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="Mutanu home"
        >
          <img
            src="/images/Mutanu-Logo-Final.png"
            alt="Mutanu"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#d9232e]"
                    : "text-[#252426] hover:text-[#d9232e]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-sm bg-[#d9232e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#0b1b2b] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#d9232e] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6"
          aria-label="Mobile navigation"
        >
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 px-1 py-4 text-sm font-medium ${
                  isActive ? "text-[#d9232e]" : "text-[#252426]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 rounded-sm bg-[#d9232e] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
