import React, { useState } from 'react';
import { Hotel, MapPin, Phone, Mail, MessageCircle, Star, Heart, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-blue-950 text-slate-300 pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Column 1: Brand & Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold shadow-md">
                <Hotel className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Rotterdam<span className="text-red-500">Inn</span>
              </span>
            </div>
            <p className="text-sm text-blue-200 mb-6 leading-relaxed">
              Experience the pinnacle of hospitality, modern comfort, and Dutch architectural charm right in the heart of Rotterdam.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.8 / 5.0 (348+ Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-red-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white hover:translate-x-1 transition-all">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white hover:translate-x-1 transition-all">
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('offers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white hover:translate-x-1 transition-all">
                  Offers & Packages
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white hover:translate-x-1 transition-all">
                  Contact & Reviews
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white text-red-400 hover:translate-x-1 transition-all font-medium">
                  Instant Booking Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-red-400">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg font-medium text-xs transition-colors mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-red-400">
              Special Deals Newsletter
            </h3>
            <p className="text-xs text-blue-200 mb-4">
              Subscribe to receive exclusive seasonal discounts, weekend getaway packages, and local Rotterdam event tips.
            </p>
            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-500 text-emerald-200 p-3 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to Rotterdam Inn updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-blue-900/50 border border-blue-800 rounded-lg px-3.5 py-2 text-sm text-white placeholder-blue-400 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors shadow"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 gap-4">
          <p>© {new Date().getFullYear()} Rotterdam Inn. All rights reserved. Located at 59 Provenierssingel, Rotterdam.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
