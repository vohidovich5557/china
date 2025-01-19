import { BusinessIcon, LangIcon, StudyIcon } from "../../assets/svg"
import { ServiceCard } from "./component/ServiceCard"


const data = [
    {
        id: 1,
        icon: StudyIcon,
        title: 'Xitoyda o`qish',
        text: 'the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog'
    },
    {
        id: 2,
        icon: BusinessIcon,
        title: 'Xitoy Uskunalar',
        text: 'the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog'
    },
    {
        id: 3,
        icon: LangIcon,
        title: 'Xitoy til Kursi',
        text: 'the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog'
    }
]

export const Industry = () => {
    return (
        <>
         <div className="w-[100%] flex flex-col px-4 xl:px-[50px] items-center gap-[50px]  py-[100px] xl:py-[100px]">
            <div className="flex flex-col items-center gap-[15px]">
                <span className="text-[32px] xl:text-[45px] font-[700] text-main">Xizmatlar</span>
                <span className="text-[16px] xl:text-[18px] font-[400] text-main/50 text-center xl:w-[60%] w-[90%]">
                    Problems trying to resolve the conflict between the two major realms of
                     Classical physics: Newtonian mechanics
                </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 w-[100%] xl:gap-[50px] gap-[20px]">
                {data?.map((item) => (
                    <ServiceCard item={item} />
                ))}
            </div>
         </div>
        </>
    )
}