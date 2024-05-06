import "./App.css";
import { Navbars } from './components/Navbar/Navbar'
import { Hero } from './sections/HeroSection/Hero'
import Skills from './sections/SkillsSection/Skills'
import Services from "./sections/ServicesSection/Services";
import Projects from './sections/ProjectsSection/Projects'
import Contact from "./sections/ContactSection/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbars/>
      <Hero />
      <Projects/>
      <Skills/>
      <Services />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
