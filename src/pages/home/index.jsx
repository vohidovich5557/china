import { Contact } from "../../sections/Contact"
import { Hero } from "../../sections/Hero"
import { Industry } from "../../sections/Industry"
import { Location } from "../../sections/Location"


export const Home = () => {
    return (
        <>
         <div className="w-[100%] pt-[10px] border-black">
            <section id="hero">
                <Hero />
            </section>
            <section id="industry">
                <Industry />
            </section>
            <section id="location">
                <Location />
            </section>
            <section id="contact">
                <Contact />
            </section>
         </div>
        </>
    )
}