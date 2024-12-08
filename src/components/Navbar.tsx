import React, { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">RoundTrip</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-emerald-400'
                    : 'text-white hover:text-emerald-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/auth"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
            >
              Start Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-emerald-400'
                      : 'text-white hover:text-emerald-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsMenuOpen(false)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 text-center"
              >
                Start Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}