import LogoMini from '../../assets/logoMini.png'
import { InstagramIcon, WhiteTelegram } from '../../assets/svg'

export const Footer = () => {
    return (
        <>
        <div className="w-[100%] px-4 xl:px-[32px] py-[20px] xl:py-[50px] flex flex-col items-start gap-[20px] border bg-main border-black">
            <div className="flex flex-col items-start gap-[15px]">
                 <div onClick={() => navigate('/')} className="flex items-center cursor-pointer gap-[10px]">
                         <div  className="xl:w-[50px] xl:h-[50px] w-[35px] h-[35px]">
                             <img src={LogoMini} alt="logo" className="w-[100%] h-[100%]" />
                         </div>
                         <span className="text-white text-[18px] xl:text-[20px] md:text-[18px] font-bold">BK-NIHAO CHINA</span>
                  </div>
                  <div className='flex items-center gap-[15px]'>
                    <a href="" className='text-white w-[50px] h-[50px]'>
                        <InstagramIcon />
                    </a>
                    <a href="" className='text-white w-[50px] h-[50px]'>
                        <WhiteTelegram />
                    </a>
                  </div>
            </div>
        </div>
        </>
    )
}