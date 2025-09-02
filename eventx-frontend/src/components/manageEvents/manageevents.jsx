import { useEffect, useState, useRef } from "react";
import Search from "../../assets/Search.png";
import Filter from "../../assets/manageevents/Tune.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import EventCard from "./detailEvent";
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
import { Link } from "react-router-dom";
// 1. Import deleteEventService
import { listEventsService, deleteEventService } from "../services/authService";

export default function ManageEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);
  const [closedEvents, setClosedEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Fetch events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await listEventsService();
      const items = res.data.items || [];

      // Categorize by status
      setUpcomingEvents(items.filter((e) => e.status === "published"));
      setPendingEvents(items.filter((e) => e.status === "pending"));
      setClosedEvents(items.filter((e) => e.status === "closed"));
    } catch (err) {
      setError("Failed to fetch events");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 2. Create the handleDelete function
  const handleDelete = async (eventId) => {
    // Add a confirmation dialog for safety
    if (!window.confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      return;
    }

    try {
      await deleteEventService(eventId);
      // After successful deletion, refetch all events to update the UI
      fetchEvents();
    } catch (err) {
      console.error("Failed to delete event:", err);
      alert("Failed to delete the event. Please try again.");
    }
  };

  return (
    <ResponsiveDrawer>
      <div className="h-full bg-[#F2F2F2] rounded-[15px] mr-[20px] ">
        {/* Header Section */}
        <div className=" bg-[#ffffff]  rounded-[15px] rounded-bl-[0px] rounded-br-[0px] p-[20px]">
          {/* ...omitted for brevity... */}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-3 gap-[20px] p-[20px]">
          {/* Upcoming */}
          <div>
            <div className="flex items-center justify-center gap-[10px]">
              <CircleIcon sx={{ fontSize: "25px", color: "#0122F5" }} />
              <h1>Up-Coming Events</h1>
            </div>
            <div>
              {upcomingEvents.map((event) => (
                // 3. Pass the onDelete handler to each EventCard
                <EventCard key={event._id} event={event} onDelete={handleDelete} />
              ))}
            </div>
          </div>

          {/* Pending */}
          <div>
            <div className="flex items-center justify-center gap-[10px]">
              <CircleIcon sx={{ fontSize: "25px", color: "#1ABF46" }} />
              <h1>Pending Events</h1>
            </div>
            <div>
              {pendingEvents.map((event) => (
                // 3. Pass the onDelete handler to each EventCard
                <EventCard key={event._id} event={event} onDelete={handleDelete} />
              ))}
            </div>
          </div>

          {/* Closed */}
          <div>
            <div className="flex items-center justify-center gap-[10px]">
              <CircleIcon sx={{ fontSize: "25px", color: "#BF1A1A" }} />
              <h1>Closed Events</h1>
            </div>
            <div>
              {closedEvents.map((event) => (
                // 3. Pass the onDelete handler to each EventCard
                <EventCard key={event._id} event={event} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ResponsiveDrawer>
  );
}