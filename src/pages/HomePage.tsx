import React, { useState } from 'react';
import { 
  Hotel, Star, MapPin, Phone, MessageCircle, Calendar, ArrowRight, 
  Wifi, Coffee, ShieldCheck, Car, Wine, CheckCircle2, ChevronRight, Quote, QrCode
} from 'lucide-react';
import { ROOMS, OFFERS, FACILITIES, INITIAL_REVIEWS, HOTEL_INFO, Review } from '../data/hotelData';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onOpenBooking: (roomName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onOpenBooking }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-blue-950 text-white overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="Rotterdam Inn Luxury Hotel"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                Rotterdam's Premier Canal Hotel
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Experience Luxury at <span className="text-red-500">Rotterdam Inn</span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl font-light leading-relaxed">
                Nestled at 59 Provenierssingel in the vibrant cultural heart of Rotterdam. Enjoy timeless elegance, modern comforts, and warm Dutch hospitality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Stay Now
                </button>
                <button
                  onClick={() => { setCurrentPage('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Rooms & Suites
                  <ArrowRight className="w-5 h-5 text-red-500" />
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs text-blue-200 border-t border-blue-800/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Best Rate Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Free Cancellation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>4-Min Walk to Station</span>
                </div>
              </div>
            </div>

            {/* Hero Quick Booking Card */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-white/20 text-left">
              <h3 className="text-xl font-bold text-blue-950 mb-1">Check Availability</h3>
              <p className="text-xs text-slate-500 mb-6">Secure your room instantly with Rotterdam Inn</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Check-in / Check-out</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="date" defaultValue="2026-12-01" className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-800" />
                    <input type="date" defaultValue="2026-12-03" className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-800" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Guests & Room Type</label>
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs font-medium text-slate-800">
                    {ROOMS.map(r => <option key={r.id}>{r.name} (2 Guests)</option>)}
                  </select>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-red-500" />
                  Check Rates & Reserve
                </button>

                <div className="text-center pt-2">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn,%20I%20would%20like%20to%20book%20a%20room.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Or chat instantly on WhatsApp (+31 6 2490 8319)
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 2: ABOUT ROTTERDAM INN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-600 font-semibold tracking-wider uppercase text-xs">
                Welcome to Rotterdam Inn
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight leading-tight">
                Where Dutch Heritage Meets Contemporary Luxury
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Situated along the tranquil Provenierssingel in Noord Rotterdam, our hotel offers a peaceful sanctuary just steps away from Rotterdam Centraal Station. Whether you are visiting for business, a romantic canal weekend, or a cultural family holiday, Rotterdam Inn delivers unmatched personalized hospitality.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Each of our rooms and suites is meticulously designed with modern amenities, plush bedding, high-speed fiber Wi-Fi, and picturesque views of the city canal or Rotterdam skyline.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
                  <span className="block text-2xl font-bold text-blue-900">4-Min</span>
                  <span className="text-xs text-slate-600 font-medium">To Centraal Station</span>
                </div>
                <div className="bg-red-50/70 p-4 rounded-xl border border-red-100">
                  <span className="block text-2xl font-bold text-red-600">4.8★</span>
                  <span className="text-xs text-slate-600 font-medium">Guest Satisfaction</span>
                </div>
                <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 col-span-2 sm:col-span-1">
                  <span className="block text-2xl font-bold text-blue-900">24/7</span>
                  <span className="text-xs text-slate-600 font-medium">Concierge Service</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { setCurrentPage('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all"
                >
                  Discover Our Accommodations
                  <ChevronRight className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop"
                  alt="Rotterdam Inn Room"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                  alt="Hotel Lounge"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                  alt="Suite Interior"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
                  alt="Canal View"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs">
              Luxurious Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Rooms & Accommodation
            </h2>
            <p className="text-slate-600">
              Choose from our selection of beautifully designed rooms and suites, tailored for ultimate relaxation in central Rotterdam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.popular && (
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-4 right-4 bg-blue-950/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow">
                    €{room.price} <span className="text-xs font-normal text-blue-200">/ night</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">{room.capacity} • {room.size}</span>
                    <h3 className="text-xl font-bold text-blue-950">{room.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{room.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">{room.bed}</span>
                    <button
                      onClick={() => onOpenBooking(room.name)}
                      className="bg-blue-900 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => { setCurrentPage('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow transition-all cursor-pointer"
            >
              View All 5 Rooms & Suites
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 4: HOTEL FACILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs">
              World-Class Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Hotel Facilities & Services
            </h2>
            <p className="text-slate-600">
              Everything you need for a seamless, comfortable, and memorable stay in Rotterdam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <div key={facility.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-blue-900/90 backdrop-blur text-white flex items-center justify-center shadow">
                    {facility.id === 'wifi' && <Wifi className="w-5 h-5" />}
                    {facility.id === 'dining' && <Coffee className="w-5 h-5" />}
                    {facility.id === 'concierge' && <ShieldCheck className="w-5 h-5" />}
                    {facility.id === 'location' && <MapPin className="w-5 h-5" />}
                    {facility.id === 'parking' && <Car className="w-5 h-5" />}
                    {facility.id === 'lounge' && <Wine className="w-5 h-5" />}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-lg font-bold text-blue-950">{facility.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5: SPECIAL OFFERS & PACKAGES */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-red-400 font-semibold tracking-wider uppercase text-xs">
                Exclusive Deals
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Special Offers & Packages
              </h2>
              <p className="text-blue-200 text-sm">
                Enhance your stay with our curated weekend getaways, romantic packages, and seasonal promotions.
              </p>
            </div>
            <button
              onClick={() => { setCurrentPage('offers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors shrink-0"
            >
              View All Offers
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFERS.slice(0, 3).map((offer) => (
              <div key={offer.id} className="bg-blue-900/80 rounded-2xl overflow-hidden border border-blue-800 flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {offer.discount}
                    </span>
                    <span className="absolute top-4 right-4 bg-blue-950/80 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg">
                      {offer.duration}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                    <p className="text-xs text-blue-200">{offer.description}</p>
                    <ul className="space-y-1.5 pt-2 text-xs text-blue-100">
                      {offer.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-blue-800/80 mt-4">
                  <div>
                    <span className="text-xs text-blue-300 line-through">€{offer.originalPrice}</span>
                    <span className="text-lg font-bold text-white block">€{offer.price}</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(offer.title)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Book Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 6: CUSTOMER REVIEWS & CONTACT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-xs">
              Guest Feedback & Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Customer Reviews & Contact
            </h2>
            <p className="text-slate-600">
              See what our guests say about their stay at Rotterdam Inn, and get in touch with our front desk team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Reviews Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-blue-950">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">Based on 348+ verified reviews across Google & Trustpilot</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                  >
                    See All Reviews
                  </button>
                  <button
                    onClick={() => setShowQrModal(true)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-300"
                  >
                    <QrCode className="w-4 h-4 text-red-600" />
                    Review QR
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reviews.slice(0, 2).map((rev) => (
                  <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                            <span className="text-[11px] text-slate-500">{rev.location}</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-blue-50 text-blue-900 font-semibold px-2 py-0.5 rounded">
                          {rev.source}
                        </span>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">"{rev.comment}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Address Column */}
            <div className="lg:col-span-5 bg-blue-900 text-white rounded-2xl p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold">Rotterdam Inn Contact Desk</h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                Our front desk is staffed 24 hours a day to assist you with inquiries, reservations, or local recommendations.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Address</span>
                    <span className="text-blue-200 text-xs">59 Provenierssingel, Noord, 3033 EH Rotterdam, Netherlands</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">Phone Number</span>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="text-blue-200 text-xs hover:text-white transition-colors">
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">WhatsApp Booking</span>
                    <a
                      href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 text-xs hover:underline font-medium"
                    >
                      +31 6 2490 8319 (Instant Chat)
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-xs transition-colors shadow text-center"
                >
                  Contact & Map Page
                </button>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20Rotterdam%20Inn`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold text-xs transition-colors shadow text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QR Code Modal Simulation */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <QrCode className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Scan to Review Us</h3>
              <p className="text-xs text-slate-500">Scan this QR code with your smartphone camera to leave a review on Google or Trustpilot for Rotterdam Inn.</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex items-center justify-center">
              <div className="w-40 h-40 bg-white border-2 border-slate-900 p-2 flex flex-col justify-between font-mono text-[10px] text-slate-400">
                <div className="flex justify-between"><span>■■■</span><span>■■■</span></div>
                <div className="text-center font-bold text-slate-800 text-xs py-4">ROTTERDAM INN<br/>REVIEW QR</div>
                <div className="flex justify-between"><span>■■■</span><span>■■■</span></div>
              </div>
            </div>
            <button
              onClick={() => setShowQrModal(false)}
              className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-xl font-medium text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
