import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageCircle, Star, Send, QrCode, 
  CheckCircle2, Hotel, User, ThumbsUp, MessageSquare 
} from 'lucide-react';
import { INITIAL_REVIEWS, HOTEL_INFO, Review } from '../data/hotelData';

interface ContactReviewsPageProps {
  onOpenBooking: () => void;
}

export const ContactReviewsPage: React.FC<ContactReviewsPageProps> = ({ onOpenBooking }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newSource, setNewSource] = useState<'Google Reviews' | 'Trustpilot' | 'Booking.com' | 'Direct Guest'>('Google Reviews');
  const [submittedReview, setSubmittedReview] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthor.trim() && newComment.trim()) {
      const rev: Review = {
        id: `rev-${Date.now()}`,
        author: newAuthor,
        location: newLocation || 'Rotterdam, Netherlands',
        rating: newRating,
        date: 'Just now',
        source: newSource,
        comment: newComment,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
        verified: true,
      };
      setReviews([rev, ...reviews]);
      setNewAuthor('');
      setNewLocation('');
      setNewComment('');
      setSubmittedReview(true);
      setTimeout(() => setSubmittedReview(false), 5000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName.trim() && contactMessage.trim()) {
      setContactSent(true);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => setContactSent(false), 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="bg-blue-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-xs">
            Rotterdam Inn Support & Feedback
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Guest Reviews
          </h1>
          <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Get in touch with our team at Provenierssingel, check our location on Google Maps, and read genuine reviews from our valued guests.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-16">
        
        {/* Contact & Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info & Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 shadow-md border border-slate-200 space-y-6">
            <div>
              <span className="text-red-600 font-semibold text-xs uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-2xl font-bold text-blue-950 mt-1">Send Us a Message</h2>
              <p className="text-xs text-slate-500 mt-1">We respond to all inquiries within 2 hours.</p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-blue-950 font-semibold">Hotel Address</strong>
                  <span className="text-slate-600 text-xs">{HOTEL_INFO.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <strong className="block text-blue-950 font-semibold">Phone</strong>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="text-slate-600 text-xs hover:text-blue-900">{HOTEL_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-blue-950 font-semibold">WhatsApp</strong>
                    <a href={`https://wa.me/${HOTEL_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 text-xs font-medium hover:underline">+31 6 2490 8319</a>
                  </div>
                </div>
              </div>
            </div>

            {contactSent ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Message received! Our front desk team will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sophie van Dijk"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="sophie@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you with your stay?"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-900 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-red-500" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Embed / Simulation Column */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 shadow-md border border-slate-200 space-y-6">
            <div>
              <span className="text-red-600 font-semibold text-xs uppercase tracking-wider">Location & Directions</span>
              <h2 className="text-2xl font-bold text-blue-950 mt-1">Google Maps Location</h2>
              <p className="text-xs text-slate-500 mt-1">59 Provenierssingel, Noord, 3033 EH Rotterdam, Netherlands</p>
            </div>

            {/* Simulated Interactive Map */}
            <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-300 bg-slate-100 shadow-inner flex flex-col items-center justify-center text-center p-6">
              <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-slate-200 space-y-3">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-blue-950 text-base">Rotterdam Inn</h3>
                <p className="text-xs text-slate-600">59 Provenierssingel, Noord, 3033 EH Rotterdam</p>
                <div className="pt-2 flex items-center justify-center gap-2">
                  <a
                    href="https://maps.google.com/?q=59+Provenierssingel+Rotterdam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Open Google Maps
                  </a>
                  <button
                    onClick={onOpenBooking}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <strong className="block text-blue-950 font-semibold mb-1">From Centraal Station</strong>
                <span>4 minutes walking distance (350 meters)</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <strong className="block text-blue-950 font-semibold mb-1">Parking & Transit</strong>
                <span>On-site valet parking & tram lines nearby</span>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Reviews Section */}
        <div className="space-y-10 pt-10 border-t border-slate-200">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="text-red-600 font-semibold text-xs uppercase tracking-wider">Verified Feedback</span>
              <h2 className="text-3xl font-bold text-blue-950">What Our Guests Say</h2>
              <p className="text-slate-600 text-sm">Discover what travelers love about staying at Rotterdam Inn.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-center px-4 border-r border-slate-200">
                <span className="text-2xl font-extrabold text-blue-950">4.8</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-800 block text-sm">348+ Reviews</span>
                <span>Google & Trustpilot Verified</span>
              </div>
            </div>
          </div>

          {/* Rating Breakdown & QR Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-blue-950 text-sm uppercase">Google Reviews</h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-900">4.9</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />) }
                  </div>
                  <span className="text-xs text-slate-500">194 reviews</span>
                </div>
              </div>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium block pt-1">
                View Google Business Profile →
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-blue-950 text-sm uppercase">Trustpilot Verified</h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-emerald-700">4.7</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />) }
                  </div>
                  <span className="text-xs text-slate-500">154 reviews</span>
                </div>
              </div>
              <a href="https://trustpilot.com" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-700 hover:underline font-medium block pt-1">
                View Trustpilot Page →
              </a>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-md flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl text-slate-900">
                <QrCode className="w-12 h-12 text-red-600" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-red-400">Scan & Review</span>
                <h4 className="font-bold text-sm">Review Us On-Site</h4>
                <p className="text-[11px] text-blue-200">Scan QR code at the reception desk during checkout.</p>
              </div>
            </div>

          </div>

          {/* Reviews List & Add Review Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <img src={rev.avatar} alt={rev.author} className="w-12 h-12 rounded-full object-cover shrink-0" />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{rev.author}</h4>
                          {rev.verified && (
                            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Verified Guest
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 block">{rev.location} • {rev.date}</span>
                        <div className="flex text-amber-400 pt-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">"{rev.comment}"</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-900 font-semibold px-2.5 py-1 rounded self-start shrink-0">
                      {rev.source}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Review Form */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-md border border-slate-200 space-y-6 self-start">
              <div>
                <span className="text-red-600 font-semibold text-xs uppercase tracking-wider">Share Your Experience</span>
                <h3 className="text-xl font-bold text-blue-950 mt-1">Leave a Guest Review</h3>
                <p className="text-xs text-slate-500 mt-1">We value your feedback to continually improve our hospitality.</p>
              </div>

              {submittedReview && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your review has been published successfully.</span>
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mark van Houten"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">City / Country</label>
                    <input
                      type="text"
                      placeholder="e.g. Utrecht, NL"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                    >
                      <option value={5}>★★★★★ (5 Stars)</option>
                      <option value={4}>★★★★☆ (4 Stars)</option>
                      <option value={3}>★★★☆☆ (3 Stars)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Review Source</label>
                  <select
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                  >
                    <option value="Google Reviews">Google Reviews</option>
                    <option value="Trustpilot">Trustpilot</option>
                    <option value="Booking.com">Booking.com</option>
                    <option value="Direct Guest">Direct Guest</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">Your Comments</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your stay at Rotterdam Inn..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow"
                >
                  Submit Review
                </button>
              </form>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
