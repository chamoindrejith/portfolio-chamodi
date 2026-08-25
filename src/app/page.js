import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Education/>
      <Research/>
      <Projects/>
      <Volunteer/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
