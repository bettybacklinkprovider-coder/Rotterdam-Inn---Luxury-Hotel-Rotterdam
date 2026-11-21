import React, { useState } from 'react';
import { X, Calendar, Users, Hotel, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { ROOMS, OFFERS, HOTEL_INFO } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialRoomName }) => {
  const [selectedType, setSelectedType] = useState<'room' | 'offer'>(initialRoomName && initialRoomName.includes('Package') ? 'offer' : 'room');
  const [selectedItem, setSelectedItem] = useState(
    initialRoomName || ROOMS[0].name
  );
  const [checkInDate, setCheckInDate] = useState('2026-12-01');
  const [checkOutDate, setCheckOutDate] = useState('2026-12-03');
  const [guests, setGuests] = useState('2 Adults');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  // Calculate pricing
  const currentObj = selectedType === 'room'
    ? ROOMS.find(r => r.name === selectedItem) || ROOMS[0]
    : OFFERS.find(o => o.title === selectedItem) || OFFERS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Rotterdam Inn,%0A%0AI would like to book:%0A*${selectedItem}* (${selectedType})%0ACheck-in: ${checkInDate}%0ACheck-out: ${checkOutDate}%0AGuests: ${guests}%0AName: ${guestName}%0APhone: ${guestPhone}%0A%0APlease confirm availability!`;
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 my-8">
        
        {/* Header */}
        <div className="bg-blue-950 text-white px-6 py-4 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Reserve Your Stay at Rotterdam Inn</h2>
              <p className="text-xs text-blue-200">59 Provenierssingel, Rotterdam • Best Price Guarantee</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-blue-300 hover:text-white p-1 rounded-lg hover:bg-blue-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Booking Request Received!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                Thank you, <span className="font-semibold text-slate-800">{guestName}</span>. We have provisionally reserved <span className="font-semibold text-blue-900">{selectedItem}</span> for you from {checkInDate} to {checkOutDate}.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-left max-w-md mx-auto text-sm space-y-1.5 border border-slate-200">
              <p><span className="text-slate-500">Guests:</span> {guests}</p>
              <p><span className="text-slate-500">Email:</span> {guestEmail}</p>
              <p><span className="text-slate-500">Phone:</span> {guestPhone}</p>
              <p><span className="text-slate-500">Total Est.:</span> €{currentObj.price} per night</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Confirm Instantly via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-xl font-medium text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            
            {/* Selection Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => { setSelectedType('room'); setSelectedItem(ROOMS[0].name); }}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedType === 'room' ? 'bg-blue-900 text-white shadow' : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                Rooms & Suites
              </button>
              <button
                type="button"
                onClick={() => { setSelectedType('offer'); setSelectedItem(OFFERS[0].title); }}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedType === 'offer' ? 'bg-red-600 text-white shadow' : 'text-slate-700 hover:text-red-600'
                }`}
              >
                Special Packages
              </button>
            </div>

            {/* Item Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Select {selectedType === 'room' ? 'Room / Suite' : 'Offer / Package'}
              </label>
              <select
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-blue-900"
              >
                {selectedType === 'room'
                  ? ROOMS.map(r => <option key={r.id} value={r.name}>{r.name} — €{r.price}/night</option>)
                  : OFFERS.map(o => <option key={o.id} value={o.title}>{o.title} — €{o.price} total</option>)
                }
              </select>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-600" /> Check-in Date
                </label>
                <input
                  type="date"
                  required
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-600" /> Check-out Date
                </label>
                <input
                  type="date"
                  required
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-red-600" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="Family (4 Guests)">Family (4 Guests)</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jan de Vries"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number (WhatsApp preferred)</label>
                <input
                  type="tel"
                  required
                  placeholder="+31 6 ..."
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Special Requests (Optional)</label>
                <input
                  type="text"
                  placeholder="Early check-in, dietary requirements..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Summary & Buttons */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Estimated Price</span>
                <span className="text-xl font-bold text-blue-950">
                  €{currentObj.price} <span className="text-xs font-normal text-slate-500">{selectedType === 'room' ? 'per night' : 'total package'}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-medium text-xs shadow-md transition-colors"
                >
                  Confirm Reservation
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
