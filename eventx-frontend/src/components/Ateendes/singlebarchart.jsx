// src/components/AttendeeLocationsChart.jsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList,
  } from "recharts";
  
  const data = [
    { location: "Loc1", attendees: 853, percentage: "11.7%", fill: "#3366FF" },
    { location: "Loc2", attendees: 743, percentage: "10.2%", fill: "#FF3333" },
    { location: "Loc3", attendees: 763, percentage: "10.5%", fill: "#339933" },
    { location: "Loc4", attendees: 934, percentage: "12.8%", fill: "#9933FF" },
    { location: "Loc5", attendees: 783, percentage: "10.8%", fill: "#000000" },
 
  ];
  
  export default function AttendeeLocationsChart() {
    return (
      <div className="p-4 bg-white rounded-2xl shadow-md mr-[20px]">
        <h2 className="text-lg font-semibold mb-2">All Attendee Locations</h2>
        <ResponsiveContainer width="100%" height={277}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
            barCategoryGap="15%" // space between bars (try 10% or 20% to adjust)
          >
            <CartesianGrid strokeLinejoin="round" vertical={false} />
            <XAxis  dataKey="attendees" tickLine={false} axisLine={false} />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}`, "Attendees"]} />
  
            <Bar dataKey="attendees" barSize={30} radius={[12, 12, 0, 0]}>
              {/* Show attendees number on top of bar */}
             
              {/* Show percentage below XAxis */}
              <LabelList dataKey="percentage" position="insideBottom" dy={50} fill="#555" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  