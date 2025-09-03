import React, { useState, useEffect } from 'react';
// Import all necessary services
import { getSummaryService, listEventsService, getSalesTrendService } from '../services/authService';
import Header from "./header";
import ResponsiveDrawer from "./maindashboard";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EventDetail from "./eventdetail";
import NotificationDetail from "./notificationdetail";
import cardPayment from "../../assets/notification/Card Payment.svg";
import alarmClock from "../../assets/notification/Alarm Clock.svg";
import bank from "../../assets/notification/Bank Building.png";
import dancing from "../../assets/row1/Dancing.png";
import transaction from "../../assets/row1/Transaction.png";
import ticket from "../../assets/row1/Movie Ticket.svg";
import NetSalesCard from "./linechart";
import CustomerEngagementCard from "./piechart";
import SeatHeatmap from "./heatmap";
import { useAuth } from "../Auth/AuthContext";


export default function Dashboard() {
    const { user } = useAuth();
    
    // State for all dynamic data fetched from the API
    const [summary, setSummary] = useState(null);
    const [allEvents, setAllEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [latestEvent, setLatestEvent] = useState(null);
    const [salesTrend, setSalesTrend] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all dashboard data concurrently for better performance
                const [summaryRes, allEventsRes, upcomingEventsRes, salesTrendRes] = await Promise.all([
                    getSummaryService(),
                    listEventsService(), // Get all events for the pie chart
                    listEventsService({ status: 'published', limit: 10, sortBy: 'date:asc' }), // Get upcoming events
                    getSalesTrendService(),
                ]);
                
                setSummary(summaryRes.data);
                setAllEvents(allEventsRes.data.items || []);
                setSalesTrend(salesTrendRes.data);

                const upcoming = upcomingEventsRes.data.items || [];
                // Get the next 5 upcoming events for the sidebar
                setUpcomingEvents(upcoming.slice(0, 5));
                // Get the single most recent upcoming event for the heatmap
                setLatestEvent(upcoming[0]);

            } catch (err) {
                console.error("Failed to load dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Notifications remain as dummy data until the backend is ready
    const notification = [
        { description: "Paycheck released for artists @Wayo Event", image: cardPayment },
        { description: "Total revenue has been transferred to bank", image: alarmClock },
        { description: "@Alan Walker Event in 3 days", image: bank },
    ];

    if (loading) {
        return <ResponsiveDrawer><div className="p-10 text-center font-semibold text-gray-500">Loading Dashboard...</div></ResponsiveDrawer>;
    }

    return (
        <ResponsiveDrawer>
            <div className="h-full bg-[#F2F2F2] rounded-[15px] mr-[20px]">
                <div className="ml-[20px] pt-[5px] mr-[40px]"><Header /></div>
                <div className="grid grid-cols-4 m-[20px]">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-[20px]">
                            {/* --- Summary Cards - Data from API --- */}
                            <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
                                <div className="ml-[5px]"><img className="w-[55px] h-[55px] rounded-full" src={dancing} alt="" /></div>
                                <div className="text-[12px]">
                                    <div className="font-bold">EVENTS</div>
                                    <div className="text-[24px] text-[#1968AF] font-bold">{summary?.totalEvents || 0} events</div>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
                                <div className="ml-[5px]"><img className="w-[55px] h-[55px] rounded-full" src={ticket} alt="" /></div>
                                <div className="text-[12px]">
                                    <div className="font-bold">BOOKINGS</div>
                                    <div className="text-[24px] text-[#F29D38] font-bold">{summary?.ticketsSold?.toLocaleString() || 0}</div>
                                </div>
                            </div>
                            <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
                                <div className="ml-[5px]"><img className="w-[55px] h-[55px] rounded-full" src={transaction} alt="" /></div>
                                <div className="text-[12px]">
                                    <div className="font-bold">REVENUE</div>
                                    <div className="text-[24px] text-[#197920] font-bold">{summary?.revenue?.toLocaleString() || 0} LKR</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[20px] gap-[20px] mr-[20px]">
                            <div><NetSalesCard summary={summary} trendData={salesTrend} /></div>
                            {/* --- Pass all events to the engagement card --- */}
                            <div><CustomerEngagementCard events={allEvents} /></div>
                        </div>
                        <div className="grid grid-cols-1 mt-[20px] mr-[20px]">
                            <div><SeatHeatmap event={latestEvent} /></div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white rounded-[10px] pb-[10px] mb-[30px]">
                            <div className="flex items-center justify-between p-[20px]"><div>UPCOMING EVENTS</div><div><button><ArrowRightAltIcon sx={{ fontSize: '50px' }} /></button></div></div>
                            {upcomingEvents.map((event) => (
                                <EventDetail key={event._id} event={event} />
                            ))}
                            <div className="flex items-center justify-end pt-[10px] pr-[20px]"><button><u className="text-[12px]">see All</u></button></div>
                        </div>
                        <div>
                            <div className="bg-white rounded-[10px] pb-[10px]">
                                <div className="flex items-center justify-between p-[20px]"><div>Notifications</div><div><button><ArrowRightAltIcon sx={{ fontSize: '50px' }} /></button></div></div>
                                {notification.map((notification, index) => (
                                    <NotificationDetail key={index} notification={notification} />
                                ))}
                                <hr className="ml-[20px] mr-[20px]" />
                      _       <div className="flex items-center justify-end pt-[10px] pr-[20px]"><button><u className="text-[12px]">see All</u></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ResponsiveDrawer>
    );
}
