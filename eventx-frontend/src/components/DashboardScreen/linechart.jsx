// NetSalesCard.jsx
// React component for NET SALES card with rose-colored metrics & chart labels.
// Requirements: npm i recharts
import Filter from "../../assets/Filter.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

// --- Fake weekly data (sample) ---
const RAW_POINTS = [
  { week: "W1", revenue: 35000 },
  { week: "W2", revenue: 22000 },
  { week: "W3", revenue: 46000 },
  { week: "W4", revenue: 15000 },
  { week: "W5", revenue: 28000 },
  { week: "W6", revenue: 34000 },
  { week: "W7", revenue: 22500 },
];

// Fake headline stats
const TOTAL_TICKETS = 2438;
const TOTAL_EVENTS = 32;

// Utility: format 15600 -> "15,600"
const fmtNumber = (n) => n.toLocaleString();

export default function NetSalesCard() {
  // Compute total & percentage per point
  const { totalRevenue, data } = useMemo(() => {
    const total = RAW_POINTS.reduce((s, p) => s + p.revenue, 0);
    const withPct = RAW_POINTS.map((p) => ({
      ...p,
      pct: Math.round((p.revenue / total) * 1000) / 10, // 1 decimal
      labelValue: fmtNumber(p.revenue), // "35,000"
      labelPct: `${Math.round((p.revenue / total) * 1000) / 10}%`, // "17.3%"
    }));
    return { totalRevenue: total, data: withPct };
  }, []);

  return (
    <div
      className="w-full max-w-4xl rounded-2xl p-6"
      style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight">NET SALES  <ArrowDropDownIcon sx={{fontSize: '50px'}}/></h2>
        <button
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
          style={{ background: "#111", color: "#fff" }}
        >
          <span role="img" aria-label="filter"><img src={Filter} alt=""/></span> Filter: <strong>Weekly</strong>
        </button>
      </div>

      {/* Top metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
        <Metric title="Total Revenue" value={`${fmtNumber(totalRevenue)} LKR`} />
        <Metric title="Total Tickets" value={`${fmtNumber(TOTAL_TICKETS)} Tickets`} />
        <Metric title="Total Events" value={`${fmtNumber(TOTAL_EVENTS)} Events`} />
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 24, bottom: 8, left: 12 }}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(v) => fmtNumber(v)}
              width={60}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(val) => [fmtNumber(val) + " LKR", "Revenue"]}
              labelFormatter={(label) => `Week: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#e66b6b"
              strokeWidth={4}
              dot={{ r: 5, strokeWidth: 2, stroke: "#e66b6b", fill: "#fff" }}
              activeDot={{ r: 6 }}
            >
              {/* Value labels above points */}
              <LabelList
                dataKey="labelValue"
                position="top"
                offset={12}
                className="text-xs fill-rose-600 font-bold"
              />
              {/* Percentage labels below points */}
              <LabelList
                dataKey="labelPct"
                position="bottom"
                offset={8}
                className="text-xs fill-rose-600"
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-600 text-sm font-semibold">{title}</span>
      <span className="mt-1 text-lg font-extrabold text-rose-600">
        {value}
      </span>
    </div>
  );
}
