// CustomerEngagementCard.jsx
// React component for Customer Engagement with donut chart.
// Requirements: npm i recharts
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Label,
} from "recharts";

// --- Raw engagement data (sample) ---
const RAW_EVENTS = [
  { name: "Event- A", value: 450, color: "#7A5AF8" }, // purple
  { name: "Event- B", value: 250, color: "#2563EB" }, // blue
  { name: "Event- C", value: 170, color: "#F59E0B" }, // amber
  { name: "Event- D", value: 370, color: "#34D399" }, // green
  { name: "Event- E", value: 290, color: "#F43F5E" }, // red
];

// Utility: format 15600 -> "15,600"
const fmtNumber = (n) => n.toLocaleString();

export default function CustomerEngagementCard() {
  // Compute total & with percentage
  const { total, data } = useMemo(() => {
    const totalValue = RAW_EVENTS.reduce((s, e) => s + e.value, 0);
    const withPct = RAW_EVENTS.map((e) => ({
      ...e,
      pct: Math.round((e.value / totalValue) * 1000) / 10, // 1 decimal %
    }));
    return { total: totalValue, data: withPct };
  }, []);

  return (
    <div
      className="w-full max-w-md rounded-2xl p-6"
      style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    >
      {/* Header */}
      <h2 className="text-2xl font-extrabold text-center mb-6">
        Customer Engagement
      </h2>

      {/* Chart */}
      <div className="h-92">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="100%"
              paddingAngle={3}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              {/* Center Label */}
              <Label
                value={`Total: ${fmtNumber(total)}`}
                position="center"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fill: "#111",
                }}
              />
            </Pie>

            <Tooltip
              formatter={(val, name, props) => [
                fmtNumber(val),
                `${props.payload.name} (${props.payload.pct}%)`,
              ]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm font-medium">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
