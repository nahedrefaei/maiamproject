import { ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pen from "../../assets/manageevents/even/Pen.png";
import TimeMachine from "../../assets/manageevents/even/Time Machine.png";
import WindowColor from "../../assets/manageevents/even/Window Color.png";
import EventLocation from "../../assets/manageevents/even/Location.png";
import PriceTagUSD from "../../assets/manageevents/even/Price Tag USD.svg";
import FlightSeat from "../../assets/manageevents/even/Flight Seat.svg";
import Popular from "../../assets/manageevents/even/Popular.svg";
import WaitingRoom from "../../assets/manageevents/even/Waiting Room.png";
import LatestEventSeatMap from "./seatallocation";
import Tags from "../../assets/manageevents/even/Tags.png";
import Group from "../../assets/manageevents/even/Group.png";
import frame from "../../assets/manageevents/even/frame 1.svg";
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
import { getEventService, updateEventService } from "../services/authService";

export default function EventInfo() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!eventId) throw new Error("No Event ID provided.");
        
        const { data } = await getEventService(eventId);
        const eventData = data.event || data;
        
        // Set the initial state for the form, formatting the date correctly
        setFormData(eventData);

      } catch (err) {
        console.error("Failed to fetch event:", err);
        setError("Failed to load event details. It may not exist.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  // Handles changes for all input fields, converting numbers correctly
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'number' ? Number(value) : value;
    setFormData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Destructure formData to remove server-controlled fields before sending
    const { 
      _id, seats, status, createdBy, createdAt, updatedAt, __v, popularity, 
      ...payload 
    } = formData;

    try {
      // Send the clean 'payload' object
      await updateEventService(eventId, payload);
      alert("Event updated successfully!");
      navigate("/manage-events");
    } catch (err) {
      console.error("Update failed:", err);
      const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
      alert(`Update failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <ResponsiveDrawer><div className="p-10 text-center">Loading...</div></ResponsiveDrawer>;
  if (error) return <ResponsiveDrawer><div className="p-10 text-center text-red-500">{error}</div></ResponsiveDrawer>;
  if (!formData) return <ResponsiveDrawer><div className="p-10 text-center">Event not found.</div></ResponsiveDrawer>;

  const bookedSeats = formData.seats?.filter(s => s.isBooked).length || 0;
  const availableSeats = (formData.totalSeats || 0) - bookedSeats;

  // Format date for the datetime-local input
  const formattedDate = formData.date ? new Date(formData.date).toISOString().slice(0, 16) : '';

  return (
    <ResponsiveDrawer>
      <div className="h-full bg-[#ffffff] rounded-[15px] mr-[20px] p-[20px] pl-[50px] ">
        <div className="ml-[20px] pt-[5px] mr-[40px] flex items-center ">
          <Link to="/manage-events" className="p-1 rounded-full border-[3px] border-[#111111] hover:bg-[#111111] hover:text-white">
            <ArrowLeft size={30} />
          </Link>
          <h1 className="text-[24px] font-bold text-center m-auto mt-[0px]">
            Edit Event Details
          </h1>
        </div>
        <div className="ml-[20px]">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-[10px] ">
              <div className="mt-[20px]">
                <div><label className="text-[16px] font-bold">Event Name</label></div>
                <div className="w-[750px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
                  <input name="title" onChange={handleChange} value={formData.title || ''} className="w-full h-[48px] bg-transparent outline-none" type="text" required />
                  <img src={Pen} alt="edit icon" />
                </div>
              </div>
              <div className="mt-[20px]">
                <div><label className="text-[16px] font-bold">Event Date & Time</label></div>
                <div className="w-[280px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
                  <input name="date" onChange={handleChange} value={formattedDate} className="w-full h-[48px] bg-transparent outline-none" type="datetime-local" required />
                </div>
              </div>
            </div>

            <div className="mt-[30px]">
              <div><label className="text-[16px] font-bold">Event Venue</label></div>
              <div className="w-[full] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px] mr-[65px]">
                <input name="venue" onChange={handleChange} value={formData.venue || ''} className="w-full h-[48px] bg-transparent outline-none" type="text" required />
                <img src={EventLocation} alt="location icon" />
              </div>
         
            </div>
            
            <div className="mt-[30px] mr-[50px]">
              <div><label className="text-[16px] font-bold">Event Description</label></div>
              <div>
                <textarea name="description" onChange={handleChange} value={formData.description || ''} className="w-full h-[120px] rounded-[10px] border-[1px] border-[#ADADAD] p-3 bg-transparent outline-none" required />
              </div>
            </div>

            <div className="mt-[50px] grid grid-cols-4 gap-[10px]">
              <div>
                <div><label>Ticket Price</label></div>
                <div className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] pr-[10px] pl-[10px]">
                  <input name="price" type="number" min="0" onChange={handleChange} value={formData.price || 0} className="w-full bg-transparent outline-none" required />
                  <img src={PriceTagUSD} alt="price icon" />
                </div>
              </div>
              <div>
                <div><label>Total Seats</label></div>
                <div className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] pr-[10px] pl-[10px]">
                  <input name="totalSeats" type="number" min="0" onChange={handleChange} value={formData.totalSeats || 0} className="w-full bg-transparent outline-none" required />
                  <img src={FlightSeat} alt="seat icon" />
                </div>
              </div>
              <div>
                <div><label>Available Seats</label></div>
                <div className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] pr-[10px] pl-[10px]">
                  <input className="w-full bg-transparent outline-none" type="text" value={availableSeats} readOnly />
                  <img src={WaitingRoom} alt="available seats icon" />
                </div>
              </div>
              <div>
                <div><label>Popularity</label></div>
                <div className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] pr-[10px] pl-[10px]">
                   <input className="w-full bg-transparent outline-none" type="text" value={formData.popularity || 0} readOnly />
                  <img src={Popular} alt="popularity icon" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-[60%_40%] gap-[20px]">
              <div>
                <LatestEventSeatMap eventSeats={formData.seats} />
              </div>
              <div className="mt-[20px]">
                {/* Other non-editable info */}
                <div className="flex items-center gap-[30px] mt-[25px] w-[370px] h-[280px] border-[1px] rounded-[10px] border-[#ADADAD] pr-[10px] pl-[10px]">
                  <div><img src={frame} alt="qr frame"/></div>
                  <div><p>Scan QR code for easy payments</p></div>
                </div>
                <div className="flex items-center gap-[20px] mt-[30px] ">
                    <button type="submit" disabled={isSubmitting} className="w-[170px] h-[50px] bg-[#CF730A] rounded-[10px] text-white font-bold disabled:bg-gray-400">
                      {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button type="button" className="w-[180px] h-[50px] bg-[#1A6291] rounded-[10px] text-white font-bold">
                        Attendee Insight
                    </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ResponsiveDrawer>
  );
}