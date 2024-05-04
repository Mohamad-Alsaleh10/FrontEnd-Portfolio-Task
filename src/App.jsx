import "./App.css";
import { Navbar} from './components/Navbar/Navbar'
import { Hero } from './sections/HeroSection/Hero'
import Skills from './sections/SkillsSection/Skills'
import Services from "./sections/ServicesSection/Services";
import Projects from './sections/ProjectsSection/Projects'

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Skills/>
      <Projects/>
      <Services />
    </>
  );
}

export default App;
