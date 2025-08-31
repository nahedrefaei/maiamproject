import Filter from "../../assets/manageevents/Tune.svg"
import Search from "../../assets/Search.png"
import People from "../../assets/People.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Users from "../../assets/Users.svg"
import AgeStatsCard from "./card";
import Gender from "../../assets/attende/Gender.svg"
import GoogleGroups from "../../assets/attende/Google Groups.svg"
import WebAdvertising from "../../assets/attende/Web Advertising.svg"
import upArrow from "../../assets/attende/up.svg"
import downArrow from "../../assets/attende/down.png"
import Age from "../../assets/attende/Age.svg"
import PlaceMaker from "../../assets/attende/Place Marker.svg"
import AttendeeLocationsChart from "./barchartatt"
import AttendeeInterestsChart from "./interests"
import AttendeeAgesChart from "./age"
import ResponsiveDrawer from "../DashboardScreen/maindashboard"
export default function AllAteendie() {
    const cards=[
        {
            title:"ATTENDEE AGE",
            ageRange:"18 - 24 Years",
            percentage:"30%",
            value:2345,
            image:Age,
            icon:upArrow
        },
        {
            title:"ATTENDEE GENDER",
            ageRange:"male",
            percentage:"18%",
            value:2345,
            image:Gender,
            icon:upArrow
        },
        {
            title:" ATTENDEE LOCATION",
            ageRange:"Colombo",
            percentage:"15%",
            value:2345,
            image:PlaceMaker,
            icon:upArrow
        },
        {
            title:"ATTENDEE INTERESTS",
            ageRange:"EDM music",
            percentage:"63%",
            value:2345,
            image:GoogleGroups,
            icon:downArrow
        },
        {
            title:"TOTAL ENGAGEMENT",
            ageRange:"Facebook ADS",
            percentage:"21%",
            value:2345,
            image:WebAdvertising,
            icon:downArrow
        },
        
    ]
    return (
        <ResponsiveDrawer>
        <div className="h-full bg-[#f2f2f2] rounded-[15px] mr-[20px] p-[20px] pl-[50px] ">
             <div className=" h-[100px] flex items-center justify-between mb-[20px] bg-[#ffffff] rounded-[15px]   shadow-[0px_0px_2px_0px_#111111] p-[20px]">
                               <div className="flex items-center gap-[10px]"><div><img src={People} alt="" /></div><div><h1 className="text-[24px] font-bold"> All Attendee Insights</h1></div></div>
                               <div className="flex items-center gap-[10px]">
                               <div className="w-[180px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><button>Attendees: 7523</button><img src={Users} alt="" /></div>
                                   <div className="w-[120px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><img src={Filter} alt="" /><button>filter</button> <ArrowDropDownIcon sx={{ fontSize: '50px' }} /></div>
                                   <div className="w-[291px] h-[42px] bg-white rounded-[10px] flex items-center border-[1px] border-[#111111] gap-[10px] pl-[10px]"><button ><img src={Search} alt="" /></button><input type="text" placeholder="Search..." /></div>
                               </div>
                           </div>
                           <div className="grid grid-cols-[30%_70%]  gap-[20px]">
                            <div >
                              {cards.map((card,index)=>(
                                <div key={index}><AgeStatsCard
       title={card.title}
       ageRange={card.ageRange}
       percentage={card.percentage}
       value={card.value}
       image={card.image}
       icon={card.icon}
      /></div>  
                              ))}
                            </div>
                            <div>
                               <div>
                               <AttendeeLocationsChart />
                               </div>
                               <div className="grid grid-cols-[47%_47%] gap-[20px] ">
                               <div>
                               <AttendeeInterestsChart />
                              
                               </div>
                               <div><AttendeeAgesChart /></div>
                               </div>
                            </div>
                           </div>
        </div>
        </ResponsiveDrawer>
    );
}