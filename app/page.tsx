import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Clients from "@/components/Clients";
import Education from "@/components/Education";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import UxUi from "@/components/UxUi";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Socials/>
        <RecentProjects/>
        <UxUi/>
        <Clients/>
        <Education/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  )
}