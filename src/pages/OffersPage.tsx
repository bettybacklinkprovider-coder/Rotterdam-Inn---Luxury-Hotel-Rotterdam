import React from 'react';
import { OFFERS, HOTEL_INFO } from '../data/hotelData';
import { Calendar, CheckCircle2, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface OffersPageProps {
  onOpenBooking: (offerTitle?: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="bg-blue-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1920&auto=format&fit=crop"
            alt="Offers background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-xs">
            Rotterdam Inn Special Promotions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Exclusive Offers & Packages
          </h1>
          <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Take advantage of our specially curated packages for weekend getaways, romantic celebrations, extended stays, and family holidays in Rotterdam.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-200 group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {offer.discount}
                  </span>
                  <span className="absolute top-4 right-4 bg-blue-950/90 backdrop-blur text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    {offer.duration}
                  </span>
                  {offer.badge && (
                    <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-blue-950 text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                      ★ {offer.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-1">{offer.title}</h3>
                    <p className="text-xs font-medium text-slate-500">{offer.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Package Inclusions:</span>
                    <ul className="space-y-1.5">
                      {offer.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <div>
                  <span className="text-xs text-slate-400 line-through">€{offer.originalPrice}</span>
                  <span className="text-xl font-bold text-blue-950 block">€{offer.price} <span className="text-[11px] font-normal text-slate-500">total</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenBooking(offer.title)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow transition-colors"
                  >
                    Book Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="bg-blue-900 text-white py-14 mb-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-emerald-400 font-semibold uppercase tracking-wider text-xs">Custom Group & Corporate Deals</span>
          <h3 className="text-2xl font-bold">Need a Custom Package or Group Booking?</h3>
          <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
            Contact our reservations team directly via WhatsApp or phone for corporate discounts, wedding parties, or extended stays.
          </p>
        </div>
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg transition-all flex items-center gap-2 shrink-0"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp ({HOTEL_INFO.phone})
        </a>
      </section>

    </div>
  );
};
