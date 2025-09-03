import image1 from "../../assets/events/image 7.svg"
import image2 from "../../assets/events/image 8.svg"
import image3 from "../../assets/events/image 9.svg"
import image4 from "../../assets/events/image 10.svg"
const images = [image1, image2, image3, image4];
export default function EventDetail({event}) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return(
        <div className="flex items-center justify-start bg-[#F7F7F7] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
          <div className="ml-[5px]"><img className=" w-[36px] h-[36px] rounded-full"src={randomImage} alt="" /></div>
          <div className="text-[12px]">
            <div>Event :  {event.title}</div>
            <div>Date  :  {event.date}</div>
          </div>
        </div>
    )
}