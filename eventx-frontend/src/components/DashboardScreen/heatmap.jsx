// LatestEventSeatMap.jsx
import React from "react";

const SEAT_STATUS = {
  PAID: "paid",
  RESERVED: "reserved",
  AVAILABLE: "available",
};

// Seat map: top row fewer seats, bottom row more seats
const SEATS = [
  [SEAT_STATUS.AVAILABLE, SEAT_STATUS.RESERVED, SEAT_STATUS.RESERVED, SEAT_STATUS.PAID, SEAT_STATUS.AVAILABLE],
  [SEAT_STATUS.AVAILABLE, SEAT_STATUS.RESERVED, SEAT_STATUS.PAID, SEAT_STATUS.RESERVED, SEAT_STATUS.RESERVED, SEAT_STATUS.AVAILABLE],
  [SEAT_STATUS.RESERVED, SEAT_STATUS.PAID, SEAT_STATUS.RESERVED, SEAT_STATUS.RESERVED, SEAT_STATUS.PAID, SEAT_STATUS.RESERVED, SEAT_STATUS.AVAILABLE],
  [SEAT_STATUS.PAID, SEAT_STATUS.RESERVED, SEAT_STATUS.RESERVED, SEAT_STATUS.PAID, SEAT_STATUS.RESERVED, SEAT_STATUS.RESERVED, SEAT_STATUS.PAID],
];

const seatColors = {
  [SEAT_STATUS.PAID]: "bg-purple-900",
  [SEAT_STATUS.RESERVED]: "bg-purple-400",
  [SEAT_STATUS.AVAILABLE]: "bg-gray-300",
};

export default function LatestEventSeatMap() {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-start gap-8 rounded-2xl p-6 "
      style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    >
      {/* Left side: Event info + legend */}
      <div className="flex flex-col gap-2 min-w-[200px]">
        <h2 className="text-xl font-extrabold ">Latest Event</h2>
        <p className="text-gray-700 font-medium">Event Name: <p className="text-black font-bold"> Alan Walker EDM Festival</p></p>
        <p className="text-gray-700">Event Date: <p className="text-black font-bold">28 March 2025</p></p>

        <div className="mt-4 flex flex-col gap-2 text-sm">
          <Legend color="bg-purple-900" label="Paid Seats" />
          <Legend color="bg-purple-400" label="Reserved Seats" />
          <Legend color="bg-gray-300" label="To be sold" />
        </div>
      </div>

      {/* Right side: Seat grid */}
      <div className="flex flex-col gap-2 flex-1 items-center justify-center mt-[20px] ">
        {SEATS.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-2 justify-center">
            {row.map((status, cIdx) => (
              <div
                key={cIdx}
                className={`w-12 h-12 rounded-md  ${seatColors[status]} `}
                title={status}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${color}`}></div>
      <span>{label}</span>
    </div>
  );
}
