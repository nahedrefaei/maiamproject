import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CircleLegend from "./circlelegend";
const data = [
  { name: "Live Music 🎶", value: 50 },
  { name: "Innovation 🧑‍🔬", value: 35 },
  { name: "EDM Music 💃", value: 35 },
  { name: "Food Festivals 🍕", value: 25 },
];

const COLORS = ["#1D4ED8", "#16A34A", "#FACC15", "#EF4444"];

const AttendeeInterestsChart = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md mr-[20px]">
      <h2 className="text-lg font-bold mb-4">ATTENDEE INTERESTS</h2>
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend  content={<CircleLegend />} verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendeeInterestsChart;
