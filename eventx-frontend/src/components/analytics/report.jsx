import React, { useState, useEffect, useMemo } from 'react';
import { getSummaryService, getDemographicsService } from '../services/authService'; // Adjust the import path as needed
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, Ticket, Calendar, Users, Download } from 'lucide-react';
import AttendeeLocationsChart from "../Ateendes/barchartatt";
import AttendeeInterestsChart from "../Ateendes/interests";
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
// --- Reusable Components (usually in separate files, but combined here for simplicity) ---

// 1. Reusable card for the top summary stats
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
      <Icon className="text-white" size={24} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// 2. Placeholder/Live component for the Age Bar Chart
const AgeChart = ({ data }) => {
    const chartData = useMemo(() => data ? Object.entries(data).map(([name, value]) => ({ name, count: value })) : [], [data]);
    if (!data || chartData.length === 0) return <ChartPlaceholder message="No Age Data" />;
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <Tooltip wrapperClassName="!bg-white !border-gray-200 !rounded-lg !shadow-lg" />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

// 3. Placeholder/Live component for the Gender Pie Chart
const GenderChart = ({ data }) => {
    const COLORS = ['#3b82f6', '#ef4444', '#f97316'];
    const chartData = useMemo(() => data ? Object.entries(data).map(([name, value]) => ({ name, value })) : [], [data]);
    if (!data || chartData.length === 0) return <ChartPlaceholder message="No Gender Data" />;
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

// Helper for empty chart states
const ChartPlaceholder = ({ message }) => (
    <div className="w-full h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-400">{message}</p>
    </div>
);


// --- Main Dashboard Component ---

export default function AnalyticsDashboard() {
  const [summary, setSummary] = useState(null);
  const [demographics, setDemographics] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch both summary and demographics data concurrently
        const [summaryRes, demographicsRes] = await Promise.all([
          getSummaryService(),
          getDemographicsService()
        ]);
        setSummary(summaryRes.data);
        setDemographics(demographicsRes.data);
      } catch (error) {
        console.error("Failed to fetch analytics data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading Analytics Dashboard...</div>;
  }
  
  return (
    <ResponsiveDrawer>
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Analytics & Reports</h1>
          <p className="text-gray-500 mt-1">An overview of your event performance and attendee insights.</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition">
          <Download size={18} />
          <span>Export to CSV</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value={`$${summary?.revenue?.toLocaleString() || '0'}`} icon={DollarSign} color="bg-green-500" />
        <StatCard title="Tickets Sold" value={summary?.ticketsSold?.toLocaleString() || '0'} icon={Ticket} color="bg-blue-500" />
        <StatCard title="Total Events" value={summary?.totalEvents?.toLocaleString() || '0'} icon={Calendar} color="bg-purple-500" />
        <StatCard title="Unique Attendees" value={summary?.uniqueAttendees?.toLocaleString() || '0'} icon={Users} color="bg-orange-500" />
      </div>

      {/* Charts Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-700">Attendee Insights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Age Distribution Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-4">Attendee Age Distribution</h3>
            <AgeChart data={demographics?.ageBuckets} />
          </div>

          {/* Gender Breakdown Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-4">Attendee Gender Breakdown</h3>
            <GenderChart data={demographics?.byGender} />
          </div>

          {/* Locations Chart - Placeholder */}
           <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Top Attendee Locations</h3>
            {/* Replace with your actual LocationsBarChart component */}
            < AttendeeLocationsChart data={demographics?.byLocation} />
          </div>

          {/* Interests Chart - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-4">Popular Attendee Interests</h3>
             {/* Replace with your actual InterestsPieChart component */}
            <AttendeeInterestsChart data={demographics?.byInterests} />
          </div>
        </div>
      </div>
    </div>
    </ResponsiveDrawer>
  );
}

