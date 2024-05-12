import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./Projects.css";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
const Projects = () => {

  const [modal,setModal] = useState(false);
  const toggleModal = ()=> {
      setModal(!modal);
  }
  return (
    <>
      <div className="project-section ftco-section">
          <div className="container">
          <SectionHeader header={"Projects"} desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
              <div className="row"> 
                {[1,2,3,4].map(({index})=>{
                  return (
                    <ProjectCard key={index} toggleModal={toggleModal}/>
                  );
                })}
              </div>
          </div>
      </div>
      {modal && (
      <ProjectDetails toggleModal={toggleModal}/>
      )}
    </>
  )
}

export default Projects
