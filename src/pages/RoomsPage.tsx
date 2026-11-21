import React, { useState } from 'react';
import { Hotel, CheckCircle2, Users, Maximize2, Bed, Calendar, ArrowRight, ShieldCheck, Wifi, Coffee, Sparkles, X } from 'lucide-react';
import { ROOMS, Room } from '../data/hotelData';

interface RoomsPageProps {
  onOpenBooking: (roomName?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [capacityFilter, setCapacityFilter] = useState<string>('all');

  const filteredRooms = capacityFilter === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.capacity.toLowerCase().includes(capacityFilter));

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="bg-blue-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop"
            alt="Rooms background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-xs">
            Rotterdam Inn Accommodation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Rooms & Suites Collection
          </h1>
          <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Discover our exquisitely designed rooms and suites located at 59 Provenierssingel, Rotterdam. Designed for maximum tranquility and comfort.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase">Filter by Capacity:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['all', '2 guests', '3', '4'].map((filter) => (
              <button
                key={filter}
                onClick={() => setCapacityFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                  capacityFilter === filter
                    ? 'bg-red-600 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter === 'all' ? 'All Rooms' : filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-200 group"
            >
              <div>
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

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-red-600" /> {room.capacity}</span>
                    <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-red-600" /> {room.size}</span>
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-red-600" /> {room.bed}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-1">{room.name}</h3>
                    <p className="text-xs font-medium text-red-600 mb-2">{room.tagline}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{room.description}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-1 rounded-md">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-semibold transition-colors text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenBooking(room.name)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl text-xs font-semibold transition-colors text-center shadow"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-100 my-8">
            <div className="relative h-72 sm:h-80">
              <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-blue-950/90 text-white px-4 py-2 rounded-xl text-lg font-bold">
                €{selectedRoom.price} <span className="text-xs font-normal text-blue-200">/ night</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">{selectedRoom.capacity} • {selectedRoom.size} • {selectedRoom.bed}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mt-1">{selectedRoom.name}</h2>
                <p className="text-xs font-medium text-slate-500 mt-0.5">{selectedRoom.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedRoom.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Room Amenities & Facilities</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {selectedRoom.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-xl text-xs font-semibold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedRoom.name;
                    setSelectedRoom(null);
                    onOpenBooking(name);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl text-xs font-semibold transition-colors shadow"
                >
                  Reserve {selectedRoom.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
