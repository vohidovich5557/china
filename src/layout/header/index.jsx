import { useState, useEffect } from "react";
import { Burger } from "../../assets/svg";
import LogoMini from '../../assets/logoMini.png'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            // Prevent scrolling on the background
            document.body.style.overflow = "hidden";
        } else {
            // Restore scrolling when navigation is closed
            document.body.style.overflow = "auto";
        }

        // Cleanup on component unmount or when `open` changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <>
            <div className="w-full py-[10px]">
                <div className="w-full flex items-center justify-between px-4 xl:px-[32px]">
                    <div onClick={() => navigate('/')} className="flex items-center cursor-pointer gap-[10px]">
                        <div  className="xl:w-[50px] xl:h-[50px] w-[35px] h-[35px]">
                            <img src={LogoMini} alt="logo" className="w-[100%] h-[100%]" />
                        </div>
                        <span className="text-main text-[18px] xl:text-[20px] md:text-[18px] font-bold">BK-NIHAO CHINA</span>
                    </div>
                    <div onClick={() => setOpen(true)} className="cursor-pointer xl:hidden">
                        <Burger />
                    </div>
                    <div className="xl:flex hidden items-center gap-[24px]">
                        <a
                            href="#about"
                            className="relative hover:text-blue-950 text-main/50 group"
                        >
                            Biz haqimizda
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#services"
                            className="relative hover:text-blue-950 text-main/50 group"
                        >
                            Xizmatlar
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#courses"
                            className="relative hover:text-blue-950 text-main/50 group"
                        >
                            Xitoy til kursi
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#contact"
                            className="relative hover:text-blue-950 text-main/50 group"
                        >
                            Biz bilan Bog`laning
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Fullscreen Navigation */}
            <div
                className={`fixed top-0 z-[100] left-0 w-full h-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-500 ${
                    open ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-5 right-5 text-white text-2xl font-bold"
                >
                    ✕
                </button>
                <nav className="flex flex-col gap-6 text-xl font-medium overflow-y-auto">
                    <a href="#about" className="hover:text-blue-950">
                        Biz haqimizda
                    </a>
                    <a href="#services" className="hover:text-blue-950">
                        Xizmatlar
                    </a>
                    <a href="#courses" className="hover:text-blue-950">
                        Xitoy til kursi
                    </a>
                    <a href="#contact" className="hover:text-blue-950">
                        Biz bilan bog`laning
                    </a>
                </nav>
            </div>
        </>
    );
};