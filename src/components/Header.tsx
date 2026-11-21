import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Hotel, MapPin, Star } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: (roomName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'offers', label: 'Offers & Packages' },
    { id: 'contact', label: 'Contact & Reviews' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-950 text-blue-100 text-xs sm:text-sm py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              {HOTEL_INFO.address}
            </span>
            <span className="hidden md:inline text-blue-400">|</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              4.8 / 5.0 Rating (348+ Reviews)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-1 hover:text-white transition-colors bg-blue-900/80 px-2.5 py-1 rounded-full text-xs font-medium"
            >
              <Phone className="w-3 h-3 text-red-500" />
              {HOTEL_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn,%20I%20would%20like%20to%20inquire%20about...`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold shadow-md group-hover:bg-red-600 transition-colors">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-950 font-['Poppins']">
                Rotterdam<span className="text-red-600">Inn</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-medium">
                Luxury Hotel • Rotterdam
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-900 font-semibold border-b-2 border-red-600'
                    : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-200 py-4 px-6 animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-900 font-bold border-l-4 border-red-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium text-center shadow flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </button>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium text-center shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp ({HOTEL_INFO.phone})
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
