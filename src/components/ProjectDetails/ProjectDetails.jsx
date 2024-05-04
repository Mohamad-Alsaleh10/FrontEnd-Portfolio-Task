import "./ProjectDetails.css"
import Image from "./../../assets/project-5.jpg"
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";


// eslint-disable-next-line react/prop-types
const ProjectDetails = ({toggleModal}) => {
  return (
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
          <button type="button" className="btn close" onClick={()=>{toggleModal()}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img className="modal-image" src={Image}></img>
        <div className="modal-body">
          <div className="tags">
            <span className="tag">html</span>
            <span className="tag">html</span>
            <span className="tag">html</span>
          </div>
          <h5 className="card-title">Card title</h5>
          <span className="date">12 April</span>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card`s content.
          </p>
        </div>
        <div className="modal-footer">
          <a className="github-icon" data-dismiss="modal"><FaGithub /></a>
          <a className="link-icon"><IoIosLink /></a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProjectDetails
