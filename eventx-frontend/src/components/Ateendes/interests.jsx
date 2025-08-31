// src/components/AttendeeInterestsChart.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import CircleLegend from "./circlelegend";
const data = [
  { name: "Interest A", value: 265 },
  { name: "Interest B", value: 234 },
  { name: "Interest C", value: 212 },
  { name: "Interest D", value: 123 },
  { name: "Interest E", value: 218 },
];

const COLORS = ["#8884d8", "#FF8042", "#FFBB28", "#00C49F", "#FF4444"];

export default function AttendeeInterestsChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-[20px]">
      <h2 className="text-lg font-semibold mb-2">Attendee Interests</h2>
      <ResponsiveContainer width="100%" height={335}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={<CircleLegend />}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
