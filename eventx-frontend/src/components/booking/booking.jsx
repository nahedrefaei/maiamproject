import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
// NOTE: We are generating the QR code with a simple utility function
// instead of an external library to avoid compilation issues.
const generateQRCodeSVG = (text) => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
  return url;
};

// Mock data to simulate fetching from a backend API
const mockEvents = [
  {
    _id: '1',
    title: 'The Future of AI',
    date: '2024-10-25T19:00:00Z',
    venue: 'Innovation Hub',
    price: 50,
    seats: 100,
    description: 'A deep dive into the latest advancements in artificial intelligence.',
    image: 'https://placehold.co/400x250/2563EB/ffffff?text=AI+Event',
    popularity: 85,
  },
  {
    _id: '2',
    title: 'Web Dev 2025 Conference',
    date: '2025-01-15T09:00:00Z',
    venue: 'Tech Expo Center',
    price: 150,
    seats: 250,
    description: 'The premier conference for modern web development, covering React, Node.js, and more.',
    image: 'https://placehold.co/400x250/065F46/ffffff?text=Web+Dev+Conf',
    popularity: 92,
  },
  {
    _id: '3',
    title: 'Design Thinking Workshop',
    date: '2024-11-05T10:00:00Z',
    venue: 'Creative Space',
    price: 75,
    seats: 50,
    description: 'Learn how to use design thinking principles to solve complex problems.',
    image: 'https://placehold.co/400x250/F59E0B/ffffff?text=Design+Workshop',
    popularity: 78,
  },
  {
    _id: '4',
    title: 'Introduction to Data Science',
    date: '2024-12-01T14:00:00Z',
    venue: 'University Lecture Hall',
    price: 30,
    seats: 120,
    description: 'A beginner-friendly workshop on the fundamentals of data science and analysis.',
    image: 'https://placehold.co/400x250/4B5563/ffffff?text=Data+Science',
    popularity: 81,
  },
];

const mockTickets = [
  {
    _id: 'ticket-1',
    eventId: '1',
    event: mockEvents[0],
    userId: 'user-123',
    bookingDate: new Date(),
  },
  {
    _id: 'ticket-2',
    eventId: '3',
    event: mockEvents[2],
    userId: 'user-123',
    bookingDate: new Date(),
  },
];

// Reusable Button Component for consistency
const PrimaryButton = ({ onClick, children, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-6 py-3 rounded-xl font-semibold transition-all duration-300
      ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'}
    `}
  >
    {children}
  </button>
);

// Component to display a single event card
const EventCard = ({ event, onSelect }) => {
  return (
   
    <div
      onClick={() => onSelect(event)}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(event.date).toLocaleDateString()} at {event.venue}
        </p>
        <p className="text-lg font-semibold text-blue-600 mt-3">${event.price}</p>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <span>Seats: {event.seats} available</span>
          <span>Popularity: {event.popularity}%</span>
        </div>
      </div>
    </div>
  );
};

// Component to display all events
const EventList = ({ onSelectEvent }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockEvents.map(event => (
          <EventCard key={event._id} event={event} onSelect={onSelectEvent} />
        ))}
      </div>
    </div>
  );
};

// Booking modal component
const BookingModal = ({ event, onClose, onBooked }) => {
  const [numTickets, setNumTickets] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [message, setMessage] = useState('');

  const handleBooking = async () => {
    setIsBooking(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate a successful booking
      const newTicket = {
        _id: `ticket-${Math.random().toString(36).substr(2, 9)}`,
        eventId: event._id,
        event: event,
        userId: 'user-123',
        bookingDate: new Date(),
      };
      
      onBooked(newTicket);
      setMessage('Booking successful! Your ticket has been generated.');
    } catch (error) {
      console.error('Booking error:', error);
      setMessage('Booking failed. Please try again.');
    } finally {
      setIsBooking(false);
    }
  };

  return (
 
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
        <p className="text-gray-600 mb-6">Price per ticket: ${event.price}</p>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Number of Tickets</label>
          <input
            type="number"
            value={numTickets}
            onChange={(e) => setNumTickets(Math.max(1, Math.min(event.seats, Number(e.target.value))))}
            min="1"
            max={event.seats}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <PrimaryButton onClick={handleBooking} disabled={isBooking}>
          {isBooking ? 'Processing...' : `Pay $${(numTickets * event.price).toFixed(2)}`}
        </PrimaryButton>

        {message && (
          <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
   
  );
};

// Component to display user's tickets
const MyTicketsPage = ({ tickets }) => {
  return (
 
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Tickets</h2>
      {tickets.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          You haven't booked any tickets yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map(ticket => (
            <div key={ticket._id} className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ticket.event.title}</h3>
              <p className="text-gray-600">{new Date(ticket.event.date).toLocaleDateString()} at {ticket.event.venue}</p>
              <div className="mt-6 flex justify-center">
                <img src={generateQRCodeSVG(ticket._id)} alt="QR Code for ticket" />
              </div>
              <p className="text-sm text-gray-500 mt-4 break-words">Ticket ID: {ticket._id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
   
  );
};

// Main application component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userTickets, setUserTickets] = useState(mockTickets); // Mock initial user tickets

  const handleBooked = (newTicket) => {
    setUserTickets(prevTickets => [...prevTickets, newTicket]);
    setSelectedEvent(null);
    setCurrentPage('tickets');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <EventList onSelectEvent={setSelectedEvent} />;
      case 'tickets':
        return <MyTicketsPage tickets={userTickets} />;
      default:
        return <EventList onSelectEvent={setSelectedEvent} />;
    }
  };

  return (
    <ResponsiveDrawer>
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">EventX Studio</div>
          <div className="flex space-x-4 sm:space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`font-semibold transition-colors duration-200 hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              Browse Events
            </button>
            <button
              onClick={() => setCurrentPage('tickets')}
              className={`font-semibold transition-colors duration-200 hover:text-blue-600 ${currentPage === 'tickets' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              My Tickets
            </button>
          </div>
        </nav>
      </header>

      <main className="py-8">
        {renderContent()}
      </main>

      {selectedEvent && (
        <BookingModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onBooked={handleBooked}
        />
      )}
    </div>
    </ResponsiveDrawer>
  );
};

export default App;
