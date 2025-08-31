import Search from "../../assets/Search.png"
import Filter from "../../assets/manageevents/Tune.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import EventCard from "./detailEvent";
import Microphone from "../../assets/manageevents/even/Microphone.png"
import Automobile from "../../assets/manageevents/even/Automobile.svg"
import  Cricket from "../../assets/manageevents/even/Cricket.svg"
import Ellipsis from "../../assets/manageevents/even/Ellipsis.svg"
import  FaceMask from "../../assets/manageevents/even/Face Mask.svg"
import  Laptop11 from "../../assets/manageevents/even/Laptop.svg"
import  Music from "../../assets/manageevents/even/Music.svg"
import paintPalatte from "../../assets/manageevents/even/Paint Palette.svg"
import Popcorn from "../../assets/manageevents/even/Popcorn.svg"
import  RockMusic from "../../assets/manageevents/even/Rock Music.svg"
import Sedan from "../../assets/manageevents/even/Sedan.svg"
import Fireworks from "../../assets/manageevents/even/Fireworks.svg"
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
const pendingEvents = [
    {   
            id:1,
            title: "Lanka Supercar Show",
            price: 5000,
            sold: 2500,
            available: 1800,
            venue: "Open Air Theater, Colombo",
            date: "12 April 2025",
            time: "09.00PM to 11.30PM",
            icon: Automobile
    },
    {
        id:2,
        title: "Kandy Art Exhibition",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: paintPalatte
    },
    {
        id:3,
        title: "New Year’s Eve Fireworks",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: Cricket
    },
]
const upcomingEvents = [
    {
        id:1,
        title: "Colombo Music Festival",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
       icon: Microphone
    },
    {
        id:2,
        title: " Galle Literary Fair",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
      icon:FaceMask
    },
    {
        id:3,
        title: "Tech Lanka Expo 2025",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: Laptop11
    },
]
const closedEvents = [
    {
        id:1,
        title: "Rock & Roll Night",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: RockMusic
    },
    {
        id:2,
        title: "Sri Lanka Food Festival",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: Popcorn
    },
    {
        id:3,
        title: "Colombo Music Festival",
        price: 5000,
        sold: 2500,
        available: 1800,
        venue: "Open Air Theater, Colombo",
        date: "12 April 2025",
        time: "09.00PM to 11.30PM",
        icon: Microphone
    },
]
export default function ManageEvents() {
    return (
        <ResponsiveDrawer>
        <div className="h-full bg-[#F2F2F2] rounded-[15px] mr-[20px] ">
            <div className=" bg-[#ffffff]  rounded-[15px] rounded-bl-[0px] rounded-br-[0px] p-[20px]">
                <div className="flex items-center justify-between mb-[20px]">
                    <div><h1 className="text-[24px] font-extrabold">Event Management Section</h1></div>
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[120px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><img src={Filter} alt="" /><button>filter</button> <ArrowDropDownIcon sx={{ fontSize: '50px' }} /></div>
                        <div className="w-[291px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><button ><img src={Search} alt="" /></button><input type="text" placeholder="Search..." /></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[200px] h-[42px] bg-white rounded-[10px] flex items-center border-[2px] border-[#0122F5] gap-[10px] pl-[10px]"><button className="w-[24px] h-[24px]  rounded-[1rem] border-[1px] border-[#0122F5] flex items-center justify-center"><AddIcon color="primary"/></button><h1 className="text-[#0122F5]">New Event </h1></div>
                        <div className="w-[200px] h-[42px] bg-white rounded-[10px] flex items-center border-[2px] border-[#FA921B] gap-[10px] pl-[10px]"><h1 className="text-[#FA921B]">Attendee Insights</h1> <button><ArrowDropDownIcon sx={{ fontSize: '50px', color: '#FA921B' }} /></button></div> </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[220px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><h1>Sort By: &nbsp; &nbsp; &nbsp; Status</h1><button><ArrowDropDownIcon sx={{ fontSize: '50px', color: '#111111' }} /></button> </div> 
                        <div className="w-[150px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><button><CalendarMonthIcon sx={{ fontSize: '25px', color: '#111111' }} /></button><h1 className="pl-[10px]">Pick Date</h1> </div> </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px] p-[20px]">
                <div >
                    <div className="flex items-center justify-center gap-[10px]"><CircleIcon sx={{ fontSize: '25px', color: '#0122F5' }} /><h1>Up-Coming Events</h1></div>
                    <div>
                        
                            {upcomingEvents.map((event)=>{
                                              return(
                                                  <EventCard key={event.id} event={event}/>
                                              )
                                          })}
                        
                    </div>
                </div>
                <div><div className="flex items-center justify-center gap-[10px]"><CircleIcon sx={{ fontSize: '25px', color: '#1ABF46' }} /><h1>Pending Events</h1></div><div>
                    {pendingEvents.map((event)=>{
                        return(
                            <EventCard key={event.id} event={event}/>
                        )
                    })}
                    </div></div>
                <div><div className="flex items-center justify-center gap-[10px]"><CircleIcon sx={{ fontSize: '25px', color: '#BF1A1A' }} /><h1>Closed Events</h1></div><div>
                    {closedEvents.map((event)=>{
                        return(
                            <EventCard key={event.id} event={event}/>
                        )
                    })}
                    </div></div>
            </div>
        </div>
        </ResponsiveDrawer>
            );
}