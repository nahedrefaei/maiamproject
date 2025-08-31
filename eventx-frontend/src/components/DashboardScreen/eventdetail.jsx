
export default function EventDetail({event}) {
    return(
        <div className="flex items-center justify-start bg-[#F7F7F7] rounded-[1rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
          <div className="ml-[5px]"><img className=" w-[36px] h-[36px] rounded-full"src={event.image} alt="" /></div>
          <div className="text-[12px]">
            <div>Event :  {event.name}</div>
            <div>Date  :  {event.date}</div>
          </div>
        </div>
    )
}