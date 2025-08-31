import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Pen from "../../assets/manageevents/even/Pen.png"
import TimeMachine from "../../assets/manageevents/even/Time Machine.png"
import  WindowColor from "../../assets/manageevents/even/Window Color.png"
import  EventLocation from "../../assets/manageevents/even/Location.png"
import PriceTagUSD from "../../assets/manageevents/even/Price Tag USD.svg"
import FlightSeat from "../../assets/manageevents/even/Flight Seat.svg"
import Popular from "../../assets/manageevents/even/Popular.svg"
import WaitingRoom from "../../assets/manageevents/even/Waiting Room.png"
import LatestEventSeatMap from "./seatallocation";
import Tags from "../../assets/manageevents/even/Tags.png"
import Group from "../../assets/manageevents/even/Group.png"
import frame from "../../assets/manageevents/even/frame 1.svg"
import ResponsiveDrawer from "../DashboardScreen/maindashboard";

export default function EventInfo() {
 
    return (
     <ResponsiveDrawer>
        <div className="h-full bg-[#ffffff] rounded-[15px] mr-[20px] p-[20px] pl-[50px] ">
          <div className="ml-[20px] pt-[5px] mr-[40px] flex items-center ">  <button className=" rounded-full border-[3px] border-[#111111] hover:bg-[#111111] hover:text-white">
         <Link to="/manage-events"> <ArrowLeft size={30} /></Link>
        </button><h1 className="text-[24px] font-bold text-center m-auto mt-[0px]">Event Details</h1></div>
        {/* form event info */}
        <div className="ml-[20px]">
            <form>
            <div className="flex items-center gap-[10px] ">
             <div className="mt-[20px]">
                <div><label htmlFor="" className="text-[16px] font-bold">Event Name</label></div>
                <div >
                <button className="w-[750px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
               <div> <input className="w-full h-[50px]" type="text" value="🎤 Colombo Music Festival 2025" /></div>
               <div><img src={Pen} alt="" /></div>
                </button>
                </div>
             </div>
             <div className="mt-[20px]">
                <div><label htmlFor="" className="text-[16px] font-bold">Event Date</label></div>
             <div>   <button className="w-[280px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
              <div>  <input className="w-full h-[50px]" type="text" value="12 April 2025" /></div>
              <div><img src={WindowColor} alt="" /></div>
                </button></div>
             </div>
            </div>
            <div className="flex items-center gap-[10px] ">
             <div className="mt-[30px]">
                <div><label htmlFor="" className="text-[16px] font-bold">Event Venue</label></div>
                <div >
                <button className="w-[750px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
               <div> <input className="w-full h-[50px]" type="text" value="Viharamahadevi Open Air Theater, Colombo" /></div>
               <div><img src={EventLocation} alt="" /></div>
                </button>
                </div>
             </div>
             <div className="mt-[30px]">
                <div><label htmlFor="" className="text-[16px] font-bold">Event Time</label></div>
             <div>   <button className="w-[280px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD] flex items-center justify-between pr-[10px] pl-[10px]">
              <div>  <input className="w-full h-[50px]" type="text" value="09.00PM to 11.30PM" /></div>
              <div><img src={TimeMachine} alt="" /></div>
                </button></div>
             </div>
            </div>
            <div className="mt-[30px] mr-[50px]">
               <div><label htmlFor="" className="text-[16px] font-bold">Event Description</label></div>
             <div>  <textarea className="w-full h-[120px] rounded-[10px] border-[1px] border-[#ADADAD] p-3" value="Get ready for Sri Lanka’s biggest music festival – the Colombo Music Festival 2025! 🎶🔥 This electrifying open-air concert will feature top international and local artists, bringing an unforgettable night of music, lights, and energy to the heart of Colombo! Join 10,000+ music lovers at the Viharamahadevi Open Air Theater for a night filled with live performances, immersive stage effects, and a festival atmosphere like no other! Whether you're into pop, rock, EDM, or reggae, this festival has something for every music enthusiast! "/></div>
            </div>
            <div className="mt-[50px] grid grid-cols-4 gap-[10px]">
            <div>
                <div>
           <label htmlFor="">Ticket Price</label>
                </div>
                <div className="">
                    <button className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="5000LKR" /> <img src={PriceTagUSD} alt="" /></button>
                </div>
            </div>
            <div>
               <div><label htmlFor="">Seat Amount</label></div>
               <div>
               <button className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="1200" /> <img src={FlightSeat} alt="" /></button>
               </div>
            </div>
            <div>
                <div><label htmlFor="">Available Seats</label></div>
                <div>
                <button className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="532" /> <img src={WaitingRoom} alt="" /></button>
                </div>
            </div>
            <div>
                <div><label htmlFor="">Popularity</label></div>
                <div>
                <button className="flex items-center justify-between w-[230px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="+1000" /> <img src={Popular} alt="" /></button>
                </div>
            </div>
            
            </div>
            <div className="grid grid-cols-[60%_40%]  gap-[20px]">
                <div className="">
                    <LatestEventSeatMap/>
                </div>
                <div className="mt-[20px]">
                 <div className="flex items-center gap-[10px]">
                 <div>
                   <div>
           <label htmlFor="">Tags</label>
                </div>
                <div>
                    <button className="flex items-center justify-between w-[180px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="5000LKR" /> <img src={Tags} alt="" /></button>
                </div>
                   </div>
                   <div>
                   <div>
           <label htmlFor="">Expected Attendance</label>
                </div>
                <div>
                    <button className="flex items-center justify-between w-[180px] h-[50px] rounded-[10px] border-[1px] border-[#ADADAD]  pr-[10px] pl-[10px]"><input className="w-full" type="text" value="5000LKR" /> <img src={Group} alt="" /></button>
                </div>
                   </div>
                 </div>
                 <div className="flex items-center gap-[30px] mt-[25px] w-[370px] h-[200px] border-[1px] rounded-[10px] border-[#ADADAD] pr-[10px] pl-[10px]">
  <div ><img src={frame}/></div>
  <div><p>Scan QR code for easy payments</p></div>
                 </div>
                 <div className="flex items-center gap-[20px] mt-[30px] "><div><button className="w-[170px] h-[50px] bg-[#CF730A] rounded-[10px] text-white font-bold">Edit</button></div><div><button className="w-[180px] h-[50px] bg-[#1A6291] rounded-[10px] text-white font-bold">Attendee Insight</button></div></div>
                </div>
            </div>
        
            </form>
            </div>
      
        </div>
        </ResponsiveDrawer>
    );
}