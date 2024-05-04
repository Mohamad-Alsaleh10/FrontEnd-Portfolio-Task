import "./App.css";
import { Navbars } from './components/Navbar/Navbar'
import { Hero } from './sections/HeroSection/Hero'
import Skills from './sections/SkillsSection/Skills'
import Services from "./sections/ServicesSection/Services";
import Projects from './sections/ProjectsSection/Projects'

function App() {
  return (
    <>
      <Projects/>
      <Navbars/>
      <Hero />
      <Skills/>
      <Services />
    </>
  );
}

export default App;
