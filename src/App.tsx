/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { OffersPage } from './pages/OffersPage';
import { ContactReviewsPage } from './pages/ContactReviewsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [initialRoomName, setInitialRoomName] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomName?: string) => {
    setInitialRoomName(roomName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setInitialRoomName(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins',sans-serif] bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage setCurrentPage={setCurrentPage} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'rooms' && (
          <RoomsPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'offers' && (
          <OffersPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'contact' && (
          <ContactReviewsPage onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialRoomName={initialRoomName}
      />
    </div>
  );
}
