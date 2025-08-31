
import Header from "./header";
import ResponsiveDrawer from "./maindashboard";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EventDetail from "./eventdetail";
import NotificationDetail from "./notificationdetail";
import cardPayment from "../../assets/notification/Card Payment.svg"
import alarmClock from "../../assets/notification/Alarm Clock.svg"
import bank from "../../assets/notification/Bank Building.png"
import event1 from "../../assets/events/image.svg"
import event2 from "../../assets/events/image 7.svg"
import event3 from "../../assets/events/image 8.svg"
import event4 from "../../assets/events/image 9.svg"
import event5 from "../../assets/events/image 10.svg"
import dancing from "../../assets/row1/Dancing.png"
import transcation from "../../assets/row1/Transaction.png"
import ticket from "../../assets/row1/Movie Ticket.svg"
import NetSalesCard from "./linechart";
import CustomerEngagementCard from "./piechart";
import SeatHeatmap from "./heatmap";
import { useAuth } from "../Auth/AuthContext";
export default function Dashboard() {
    const { user } = useAuth();
    const event = [
        {name: "Cynosure Festival",
        date: "24 March 2025",
        image:event1},
        {name: "Nightor Festival",
        date: " 30 March 2025",
        image:event2},
        {name: "Cyndrex Festival",
        date: " 03 April 2025",
        image:event3},
        {name: " Hyper Festival",
        date: " 10 April 2025",
        image:event4},
        {name: " EDM Festival",
        date: " 15 April 2025",
        image:event5},
    ];
    const notification = [
       {description: "Paycheck released for artists @Wayo Event",image:cardPayment},
       {description: "Total revenue has been transferred to bank",image:alarmClock},
       {description: "@Alan Walker Event in 3 days",image:bank},
       {description: "Paycheck released for artists @Cynderex Event",image:cardPayment},
       {description: "Paycheck released for artists @Get Together Event",image:cardPayment},
    ];
    return(
      <ResponsiveDrawer>
        <div className="  h-full bg-[#F2F2F2] rounded-[15px] mr-[20px]   ">
            <div className="ml-[20px] pt-[5px] mr-[40px]"><Header/></div>
          <div className="grid grid-cols-4 m-[20px]">
            <div className="col-span-3  ">
                <div className="grid grid-cols-3 gap-[20px]">
                <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
          <div className="ml-[5px]"><img className=" w-[55px] h-[55px] rounded-full"src={dancing} alt="" /></div>
          <div className="text-[12px]">
            <div className=" font-bold">EVENTS</div>
            <div className="text-[24px] text-[#1968AF] font-bold">28 events</div>
          </div>
        </div>
        <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
          <div className="ml-[5px]"><img className=" w-[55px] h-[55px] rounded-full"src={ticket} alt="" /></div>
          <div className="text-[12px]">
            <div className=" font-bold">BOOKINGS</div>
            <div className="text-[24px] text-[#F29D38] font-bold">2,7598</div>
          </div>
        </div>
        <div className="h-[100px] flex items-center justify-start bg-[#ffffff] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
          <div className="ml-[5px]"><img className=" w-[55px] h-[55px] rounded-full"src={transcation} alt="" /></div>
          <div className="text-[12px]">
            <div className=" font-bold">REVENUE</div>
            <div className="text-[24px] text-[#197920] font-bold">623,500LKR</div>
          </div>
        </div>
                </div>
            <div className="flex mt-[20px] gap-[20px] mr-[20px]">
                <div  ><NetSalesCard/></div>
                <div ><CustomerEngagementCard/></div></div>
            <div className="grid grid-cols-1 mt-[20px] mr-[20px]"><div ><SeatHeatmap/></div></div></div>
            <div className="col-span-1 "><div className=" bg-white rounded-[10px] pb-[10px] mb-[30px]">
                <div className="flex items-center justify-between p-[20px] "><div>UPCOMING EVENTS</div><div><button ><ArrowRightAltIcon sx={{fontSize: '50px'}}/></button></div></div>
                
                {event.map((event)=>{
                    return(
                        <EventDetail event={event}/>
                    )
                })}
               
               <div className="flex items-center justify-end pt-[10px] pr-[20px]"><button><u className="text-[12px]">see All</u></button></div>
                </div>
                <div><div className=" bg-white rounded-[10px] pb-[10px]">
                <div className="flex items-center justify-between p-[20px] "><div>Notifications</div><div><button ><ArrowRightAltIcon sx={{fontSize: '50px'}}/></button></div></div>
                {notification.map((notification)=>{
                    return(
                        <NotificationDetail notification={notification}/>
                    )
                })}
               
                <hr className="ml-[20px] mr-[20px]"/>
               <div className="flex items-center justify-end pt-[10px] pr-[20px]"><button><u className="text-[12px]">see All</u></button></div>
                </div></div>
                </div>
          </div>
        </div>
      </ResponsiveDrawer>
    )
}