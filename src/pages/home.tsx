import { NavBar} from "../components/ui/nav-bar"
import { HeroSection } from "../components/home/hero"

export function Home(){
    return(
        <div className='bg-[url("/hydra-bg-1.png")] bg-no-repeat bg-cover font-montserrat px-21 py-12.5'>
            <NavBar/>
            <HeroSection/>
        </div>
    )
}