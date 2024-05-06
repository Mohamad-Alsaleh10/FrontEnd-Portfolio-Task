import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./Projects.css";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
const Projects = () => {

  const [modal,setModal] = useState(false);
  const toggleModal = ()=> {
      setModal(!modal);
  }
  return (
    <>
      <div className="project-section">
          <div className="container">
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
