import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import MouseHover from "./components/MouseHover/MouseHover";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SideNavbar from "./components/SideNavbar/SideNavbar";

function App() {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <HeroSection />
      <MouseHover />
      <AboutMe />
      
      <Projects />

      <Footer />




    </>
  );
}

export default App;
