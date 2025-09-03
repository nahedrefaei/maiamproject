// NetSalesCard.jsx
import Filter from "../../assets/Filter.svg";
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

// Utility: format 15600 -> "15,600"
const fmtNumber = (n) => (n || 0).toLocaleString();

// The component now accepts props for summary and trend data
export default function NetSalesCard({ summary, trendData = [] }) { // Default to empty array to prevent crashes
  
  // Compute total & percentage per point using the trendData prop
  const data = useMemo(() => {
    // If no trend data is provided, return an empty array for the chart
    if (!trendData || trendData.length === 0) {
      return [];
    }
    const total = trendData.reduce((s, p) => s + p.revenue, 0);
    return trendData.map((p) => ({
      ...p,
      labelValue: fmtNumber(p.revenue),
      labelPct: total > 0 ? `${((p.revenue / total) * 100).toFixed(1)}%` : '0%',
    }));
  }, [trendData]);

  return (
    <div
      className="w-full max-w-4xl rounded-2xl p-6"
      style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight">NET SALES <ArrowDropDownIcon sx={{ fontSize: '50px' }} /></h2>
        <button
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
          style={{ background: "#111", color: "#fff" }}
        >
          <img src={Filter} alt="" /> Filter: <strong>Weekly</strong>
        </button>
      </div>

      {/* Top metrics now use the summary prop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
        <Metric title="Total Revenue" value={`${fmtNumber(summary?.revenue)} LKR`} />
        <Metric title="Total Tickets" value={`${fmtNumber(summary?.ticketsSold)} Tickets`} />
        <Metric title="Total Events" value={`${fmtNumber(summary?.totalEvents)} Events`} />
      </div>

      {/* Chart */}
      <div className="h-72">
        {/* Show a message if there is no data for the chart */}
        {data.length > 0 ? (
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
                <LabelList
                  dataKey="labelValue"
                  position="top"
                  offset={12}
                  className="text-xs fill-rose-600 font-bold"
                />
                <LabelList
                  dataKey="labelPct"
                  position="bottom"
                  offset={8}
                  className="text-xs fill-rose-600"
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            No weekly sales trend data available.
          </div>
        )}
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