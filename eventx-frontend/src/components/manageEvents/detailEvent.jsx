import React, { useState, useEffect, useRef } from "react";
import { Ticket, ShoppingCart, Banknote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Derived values
  const sold = event.seats.filter((s) => s.isBooked).length;
  const available = event.totalSeats - sold;
  const dateObj = new Date(event.date);
  const date = dateObj.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-sm rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mt-[20px] p-4 bg-white hover:bg-[#f8f8f8]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <img
            src="/event-icon.png" // you can replace with dynamic icon if available
            alt=""
            className="w-6 h-6"
          />
          <h2 className="font-semibold text-lg">{event.title}</h2>
        </div>

        {/* Dropdown */}
        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            className="text-[#666666] hover:text-[#111] font-extrabold text-[30px]"
            onClick={() => setOpen(!open)}
          >
            ⋮
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => alert("Update clicked")}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                Update
              </button>
              <button
                onClick={() => alert("Delete clicked")}
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100 rounded-b-lg"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-start gap-6 mt-3">
        <div className="flex items-center gap-1 text-green-600 font-semibold">
          <Banknote size={18} />
          <span>${event.price}</span>
        </div>
        <div className="flex items-center gap-1 text-red-500 font-semibold">
          <ShoppingCart size={18} />
          <span>{sold}</span>
        </div>
        <div className="flex items-center gap-1 text-purple-600 font-semibold">
          <Ticket size={18} />
          <span>{available}</span>
        </div>
      </div>

      <hr className="my-3" />

      {/* Details */}
      <div className="text-sm space-y-2">
        <p>
          <span className="font-semibold text-[#666666]">Venue :</span>{" "}
          <span className="font-bold">{event.venue}</span>
        </p>
        <p>
          <span className="font-semibold text-[#666666]">Date :</span>{" "}
          <span className="font-bold">{date}</span>
        </p>
        <p>
          <span className="font-semibold text-[#666666]">Time :</span>{" "}
          <span className="font-bold">{time}</span>
        </p>
      </div>

      {/* Action */}
      <div className="flex justify-end mt-3">
        <Link to={`/event-info/${event._id}`}>
          <button className="rounded-full border-[3px] border-[#111111] p-1 hover:bg-[#111111] hover:text-white transition">
            <ArrowRight size={30} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
