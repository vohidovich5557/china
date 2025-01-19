

export const ServiceCard = ({item}) => {
    return (
        <>
         <div key={item.id} className="py-[35px] group flex flex-col transition-all duration-300 ease-in-out hover:bg-greenMain items-center gap-[20px] px-[40px] border-greenMain border-2">
            <div className="flex items-center justify-center w-[100%] gap-[30px]">
                <span className="group-hover:text-white text-greenMain"><item.icon /></span>
                <span className="text-[18px] xl:text-[20px] group-hover:text-white font-[700] text-main">{item.title}</span>
            </div>
            <div className="w-[100%] flex items-center justify-center">
                <span className="text-[16px] group-hover:text-white font-[400] text-main/50 w-[100%] text-center">{item.text}</span>
            </div>
         </div>
        </>
    )
}