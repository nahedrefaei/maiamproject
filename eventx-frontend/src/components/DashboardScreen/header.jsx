import image from "../../assets/image.svg"
import Search from "../../assets/Search.png"
import Notification from "../../assets/Notification.svg"
import EventAccepted from "../../assets/EventAccepted.svg"
import { useAuth } from "../Auth/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function Header() {
    const { user } = useAuth();
    return(
        <header>
            <div className="w-full h-[91px] bg-[#111111] mt-[5px] rounded-[20px] flex items-center justify-between">
                <div className="flex items-center ml-[32px] gap-[10px]"><div>{user.role === "admin" ? <AdminPanelSettingsIcon sx={{ fontSize: '50px', color: '#fff' }} /> : <AccountCircleIcon sx={{ fontSize: '50px', color: '#fff' }} />}</div><div className="text-white"><h1 className="text-[30px]">Welcome {user.name}</h1><h6 className="text-[10px]"> {user.role}</h6></div></div>
                <div className="flex items-center gap-[10px]">
                <div className="w-[291px] h-[42px] bg-white rounded-[10px] flex items-center"><button ><img src={Search} alt=""/></button><input type="text" placeholder="Search..."/></div>
                <div className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center"><button ><img src={Notification} alt=""/></button></div>
                <div className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center mr-[32px]"><button ><img src={EventAccepted} alt=""/></button></div>
                </div>
                </div>
        </header>
    )   
}