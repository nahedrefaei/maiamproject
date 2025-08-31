
export default function NotificationDetail({notification}) {
    return(
      <>
     <hr className="ml-[20px] mr-[20px]"/>
               <div className="flex items-center justify-start ml-[20px] mr-[20px] mb-[10px] p-[5px] gap-[10px]">
                 <div className="ml-[5px]"><img className=" w-[36px] h-[36px] rounded-full"src={notification.image} alt="" /></div>
                 <div className="text-[12px]">
                   <div>{notification.description}</div>
                   
                 </div>
               </div>
               </>
           )
       }
  