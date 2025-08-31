export default function AttendeeLocations() {
    const data = [
      { location: "Colombo", count: 227, color: "bg-blue-500" },
      { location: "Kandy", count: 123, color: "bg-red-500" },
      { location: "Galle", count: 143, color: "bg-pink-500" },
      { location: "Jaffna", count: 70, color: "bg-yellow-400" },
      { location: "International", count: 52, color: "bg-green-600" },
    ];
  
    return (
      <div className="w-[380px] rounded-xl bg-white p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Title */}
        <h2 className="font-bold text-gray-800 text-[15px] mb-3">
          ATTENDEE LOCATIONS
        </h2>
  
        {/* Table */}
        <table className="w-full border-collapse text-sm text-gray-800 rounded-[10px] p-2 ">
          <thead className="bg-white">
            <tr>
              <th className="border-2 border-collapse border-black px-3 py-2 text-left font-semibold">
                Location
              </th>
              <th className="border-2 border-collapse border-black px-3 py-2 text-left font-semibold">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="border-2 border-collapse border-black px-3 py-2">{item.location}</td>
                <td className="border-2 border-collapse border-black px-3 py-2">
                  <div className="flex items-center justify-between">
                    {item.count}
                    <span
                      className={`w-3 h-3 rounded-full ${item.color}`}
                    ></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  