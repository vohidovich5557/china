import { Link } from "react-router-dom"
import { Telegram } from "../../assets/svg"


export const Location = () => {
    return (
        <>
         <div className="flex flex-col items-center px-4 xl:py-[40px] mb-[50px] md:mb-[70px] lg:mb-[90px] md:items-center justify-center gap-[40px]">
               <span className="text-[32px] xl:text-[45px] font-[700] text-main">Bizning Manzil</span>
            <div className="w-[100%] md:w-[90%] rounded-[30px] border border-rareBlack overflow-hidden lg:w-[80%] lg:h-[400px] h-[200px] md:h-[300px]">
            <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3066.8817650534497!2d64.43083907597885!3d39.76476297155184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ1JzUzLjIiTiA2NMKwMjYnMDAuMyJF!5e0!3m2!1sen!2s!4v1737358554690!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                />
            </div>
            <div className=" flex flex-col md:flex-row items-center ml-auto mr-auto justify-center gap-[40px]">
            <div className="w-auto py-[10px] hover:shadow-lg hover:shadow-rareBlack transition-all duration-300 shadow-md shadow-gray-400/60 bg-white rounded-[20px]  px-[10px]">
                <span><a href="https://maps.app.goo.gl/dadhvRUXxSbfNdVu8" target="_blank">Uzbekiston, Bukhara</a></span>
            </div>
            <div className="w-auto py-[10px] hover:shadow-lg hover:shadow-red-600/70 transition-all duration-300 shadow-md shadow-gray-400/60 bg-white rounded-[20px]  px-[10px]">
                <span className="text-red-600/80"><a href="tel:+998 93 969 50 55">+998 93 969 50 55</a></span>
            </div>
            <div className="w-auto py-[10px] hover:shadow-lg hover:shadow-rareBlack transition-all duration-300 shadow-md shadow-gray-400/60 bg-white rounded-[20px]  px-[10px]">
                <Link to='https://t.me/nihao_chinaa'>
                  <Telegram />
                </Link>
            </div>
            </div>
         </div>
        </>
    )
}
