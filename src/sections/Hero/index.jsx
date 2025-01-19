import ChinaImg from '../../assets/chinaImg.jpg';

export const Hero = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${ChinaImg})`,
                }}
            >
                {/* Overlay to reduce opacity */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative flex flex-col py-[50px] xl:py-[150px] items-center gap-[30px] xl:gap-[40px]">
                    <div className="flex flex-col items-center gap-[15px] xl:gap-[20px]">
                        <span className="text-[32px] xl:text-[50px] font-[700] text-center w-[80%] text-white">
                            First-Class Business Consultant
                        </span>
                        <span className="text-[16px] xl:text-[18px] xl:w-[60%] font-[400] text-white/70 text-center w-[80%]">
                            We know how large objects will act, but things on a small scale just do not act that way.
                        </span>
                    </div>
                    <div className="flex flex-col xl:flex-row items-center gap-[20px]">
                        <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="py-[11px] px-[36px] rounded-[20px] hover:text-orangeMain hover:bg-transparent border-2 border-orangeMain transition-all duration-300 ease-in-out text-white font-[600] bg-orangeMain">
                            Savolingizni qoldiring
                        </button>
                        <button onClick={() => document.getElementById("industry").scrollIntoView({ behavior: "smooth" })} className="py-[10px] px-[36px] rounded-[20px] hover:text-main hover:bg-white transition-all duration-300 ease-out text-white font-[600] border-white border-2">
                            Ko`proq ma`lumot
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};