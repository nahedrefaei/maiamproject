import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Scatter,
  LabelList
} from "recharts";

// Original data
const rawData = [
  { day: "01", age18_24: 19, age25_34: 28, age35_44: 38, age45: 51 },
  { day: "02", age18_24: 20, age25_34: 31, age35_44: 39, age45: 47 },
  { day: "03", age18_24: 23, age25_34: 25, age35_44: 41, age45: 48 },
  { day: "04", age18_24: 21, age25_34: 25, age35_44: 41, age45: 44 },
  { day: "05", age18_24: 21, age25_34: 28, age35_44: 43, age45: 49 },
  { day: "06", age18_24: 22, age25_34: 29, age35_44: 41, age45: 48 },
  { day: "07", age18_24: 18, age25_34: 31, age35_44: 41, age45: 49 },
  { day: "08", age18_24: 20, age25_34: 31, age35_44: 41, age45: 49 },
  { day: "09", age18_24: 21, age25_34: 33, age35_44: 37, age45: 52 },
  { day: "10", age18_24: 22, age25_34: 32, age35_44: 37, age45: 52 },
  { day: "11", age18_24: 18, age25_34: 29, age35_44: 36, age45: 45 },
  { day: "12", age18_24: 19, age25_34: 24, age35_44: 38, age45: 45 },
  { day: "13", age18_24: 20, age25_34: 33, age35_44: 39, age45: 46 },
  { day: "14", age18_24: 22, age25_34: 33, age35_44: 41, age45: 46 },
  { day: "15", age18_24: 21, age25_34: 33, age35_44: 41, age45: 46 }
];

// Add stick min & max
const data = rawData.map(d => {
  const values = [d.age18_24, d.age25_34, d.age35_44, d.age45];
  return {
    ...d,
    stickMin: Math.min(...values),
    stickMax: Math.max(...values)
  };
});

// Custom circle shape with bigger radius
const BigCircle = ({ cx, cy, fill }) => {
  return <circle cx={cx} cy={cy} r={14} fill={fill} stroke="#fff" strokeWidth={2} />;
};

const AttendeeAgeLollipopChart = () => {
  return (
    <div className="w-full h-[300px] bg-white ">
      <h2 className="text-lg font-semibold mb-4">Attendee Age</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />

          {/* Stick (thin vertical line) */}
          <Bar dataKey="stickMax" fill="#cccccc" barSize={2} isAnimationActive={false} />

          {/* Bigger Scatter dots for each age group */}
          <Scatter name="18 - 24" dataKey="age18_24" fill="#3b82f6" shape={BigCircle}>
            <LabelList dataKey="age18_24" position="inside" fill="#fff" fontSize={12} />
          </Scatter>
          <Scatter name="25 - 34" dataKey="age25_34" fill="#facc15" shape={BigCircle}>
            <LabelList dataKey="age25_34" position="inside" fill="#000" fontSize={12} />
          </Scatter>
          <Scatter name="35 - 44" dataKey="age35_44" fill="#ef4444" shape={BigCircle}>
            <LabelList dataKey="age35_44" position="inside" fill="#fff" fontSize={12} />
          </Scatter>
          <Scatter name="45+" dataKey="age45" fill="#22c55e" shape={BigCircle}>
            <LabelList dataKey="age45" position="inside" fill="#fff" fontSize={12} />
          </Scatter>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendeeAgeLollipopChart;
