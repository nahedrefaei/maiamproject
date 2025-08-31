import Filter from "../../assets/manageevents/Tune.svg"
import Search from "../../assets/Search.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Users from "../../assets/Users.svg"
import AttendeeAgeLollipopChart from "./lollipopchart";
import AttendeeLocationsChart from "./singlebarchart";
import Engagment from "./engagment";
import AttendeeLocations from "./tablelocationn";
import AttendeeInterestsChart from "./singlepiechart";
import ResponsiveDrawer from "../DashboardScreen/maindashboard";
export default function Report() {
    return (
        <ResponsiveDrawer>
        <div className="h-full bg-[#F2F2F2] rounded-[15px] mr-[20px] ">
            <div className=" bg-[#ffffff]  rounded-[15px] rounded-bl-[0px] rounded-br-[0px] pt-[20px] pb-[5px]  pl-[30px] pr-[30px]">
                <div className="flex justify-between mb-[20px]">

                    <div className="flex gap-[10px]"> <div className="mr-[10px] mt-[8px]">
                        <button className=" rounded-full border-[3px] border-[#111111] hover:bg-[#111111] hover:text-white">
                            <ArrowLeft size={30} />
                        </button>
                    </div><div><h1 className="text-[24px] font-extrabold">Attendee Insights - Colombo Music Festival 2025</h1>
                            <div className="text-sm space-y-2 ml-[20px]">
                                <p>
                                    <span className="font-thin text-[#111111]">Event Venue :</span>{" "}
                                    <span className="font-thin">Viharamahadevi Open Air Theater, Colombo</span>
                                </p>
                                <p>
                                    <span className="font-thin text-[#111111]">Event Date :</span>{" "}
                                    <span className="font-thin">12 April 2025</span>
                                </p>
                                <p>
                                    <span className="font-thin text-[#111111]">Event Time :</span>{" "}
                                    <span className="font-thin">09.00PM to 11.30PM</span>
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className=" ">

                        <div className="w-[400px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><button ><img src={Search} alt="" /></button><input type="text" placeholder="Search..." /></div>
                       
                        <div className="flex items-center gap-[10px] ml-[90px] mt-[30px] text-[#666666]">
                               <div className="w-[180px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px] "><button >Attendees: 7523</button><img src={Users} alt="" /></div>
                                   <div className="w-[120px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><img src={Filter} alt="" /><button className="">filter</button> <ArrowDropDownIcon sx={{ fontSize: '50px' }} /></div>
                        </div>

                    </div>
                </div>
            </div>
          <div className="grid grid-cols-[65%_35%] gap-[20px] pl-[30px] pr-[30px]">
          <div>
          <div>
         <div className="h-[350px] w-full bg-white shadow rounded-2xl p-4 mt-[20px]"><AttendeeAgeLollipopChart /></div>
         <div className="grid grid-cols-[50%_50%] gap-[20px] mt-[20px] mb-[20px]">
            <div ><AttendeeInterestsChart/>   </div>
            <div><AttendeeLocationsChart/></div>
         </div>
          </div>
          </div>
          <div>
        
          <div className="mt-[20px]">
        <Engagment/>
          </div>
          <div className="mt-[20px]">
            <AttendeeLocations/>
          </div>
          </div>
          </div>
        </div>
        </ResponsiveDrawer>
    );
}