import { BusinessIcon, LangIcon, StudyIcon } from "../../assets/svg"
import { ServiceCard } from "./component/ServiceCard"


const data = [
    {
        id: 1,
        icon: StudyIcon,
        title: 'Xitoyda o`qish',
        text: 'Biz sizga xitoyning top universitetlariga hech qanday imtixonlarsiz toliq grant asosida oqishga kirishingizga yordam beramiz va bu Grant bepul oqish, bepul yotoqxona hamda har oy 300$ stipendiyani oz ichiga oladi. Buning uchun sizdan faqatgina maktabni tugatganlik attestati kerak boladi.'
    },
    {
        id: 2,
        icon: BusinessIcon,
        title: 'Xitoy Uskunalar',
        text: 'Biz sizga Xitoydan turli xil uskunalar va texnologiyalarni yetkazib berish bo‘yicha xizmatlarni taklif etamiz. Ishlab chiqarish zavodlari, fabrikalar va boshqa sanoat korxonalari uchun zarur bo‘lgan yuqori sifatli uskunalarni qulay sharoitlarda olib kelamiz.'
    },
    {
        id: 3,
        icon: LangIcon,
        title: 'Xitoy til Kursi',
        text: 'Agar siz xitoy tilini organishni uzoq vaqtdan beri orzu qilgan bolsangiz yoki bilimingizni chuqurlashtirishni istasangiz, hozir birinchi qadamni qoyish vaqti keldi!. Biz sizga malakali ustozlar, zamonaviy oquv metodikasi, HSK imtihonlariga tayyorlov, xitoyga grant yutish imkoniyati, qulay joylashuv va narx'
    }
]

export const Industry = () => {
    return (
        <>
         <div className="w-[100%] flex flex-col px-4 xl:px-[50px] items-center gap-[50px]  py-[100px] xl:py-[100px]">
            <div className="flex flex-col items-center gap-[15px]">
                <span className="text-[32px] xl:text-[45px] font-[700] text-main">Xizmatlar</span>
                <span className="text-[16px] xl:text-[18px] font-[400] text-main/50 text-center xl:w-[60%] w-[90%]">
                    Bizning kompaniyamiz tomonidan siz foydalana oladigan xizmatlar
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