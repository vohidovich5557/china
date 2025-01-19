import { Contact } from "../../sections/Contact"
import { Hero } from "../../sections/Hero"
import { Industry } from "../../sections/Industry"
import { Location } from "../../sections/Location"


export const Home = () => {
    return (
        <>
         <div className="w-[100%] pt-[10px] border-black">
            <section>
                <Hero />
            </section>
            <section>
                <Industry />
            </section>
            <section>
                <Location />
            </section>
            <section>
                <Contact />
            </section>
         </div>
        </>
    )
}