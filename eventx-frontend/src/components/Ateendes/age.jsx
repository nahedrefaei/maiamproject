// src/components/AttendeeAgesChart.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import CircleLegend from "./circlelegend";
const data = [
  { name: "18 - 24 Years", value: 2345 },
  { name: "25 - 34 Years", value: 1342 },
  { name: "35 - 44 Years", value: 245 },
  { name: "44+ Years", value: 124 },
];

const COLORS = ["#8884d8", "#FF4444", "#00C49F", "#FFBB28"];

export default function AttendeeAgesChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-[20px]">
      <h2 className="text-lg font-semibold mb-2">Attendee Ages</h2>
      <ResponsiveContainer width="100%" height={335}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={<CircleLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
