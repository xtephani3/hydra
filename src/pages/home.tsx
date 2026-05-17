import { NavBar} from "../components/ui/nav-bar"
import { HeroSection } from "../components/home/hero"
import { AboutUs } from "../components/home/about-us"
import { WhyUs } from "../components/home/why-us"
import { Technologies } from "../components/home/technologies"
import { HowWeBuild } from "../components/home/how-we-build"
import { JoinHydra } from "../components/home/join-hydra"
import { Footer } from "../components/home/footer"


export function Home(){
    return(
        <div className='min-h-screen overflow-hidden bg-[url("/hydra-bg-1.png")] bg-no-repeat bg-cover font-montserrat px-5 py-7 sm:px-8 lg:px-21 lg:py-12.5'>
            <NavBar/>
            <HeroSection/>
            <AboutUs/>
            <WhyUs/>
            <Technologies/>
            <HowWeBuild/>
            <JoinHydra/>
            <Footer/>
        </div>
    )
}
