import React from "react";
import { Mic, Ticket, ShoppingCart, Banknote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mt-[20px] p-4 bg-white hover:bg-[#ccc] ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
         <img src={event.icon} alt="" />
          <h2 className="font-semibold text-lg">{event.title}</h2>
        </div>
        <button className="text-[#666666] hover:text-[#666666] font-extrabold  text-[30px]">⋮</button>
      </div>

      {/* Stats */}
      <div className="flex justify-start gap-15 mt-3">
        <div className="flex items-center gap-1 text-green-600 font-semibold">
          <Banknote size={18} />
          <span>{event.price}</span>
        </div>
        <div className="flex items-center gap-1 text-red-500 font-semibold">
          <ShoppingCart size={18} />
          <span>{event.sold}</span>
        </div>
        <div className="flex items-center gap-1 text-purple-600 font-semibold">
          <Ticket size={18} />
          <span>{event.available}</span>
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
          <span className="font-bold">{event.date}</span>
        </p>
        <p>
          <span className="font-semibold text-[#666666]">Time :</span>{" "}
          <span className="font-bold">{ event.time}</span>
        </p>
      </div>

      {/* Action */}
      <div className="flex justify-end ">
        <button className=" rounded-full border-[3px] border-[#111111] hover:bg-[#111111] hover:text-white">
         <Link to="/event-info"> <ArrowRight size={30} /></Link>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
