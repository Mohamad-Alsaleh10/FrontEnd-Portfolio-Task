import Image from "./../../assets/project-5.jpg"
import "./ProjectCard.css"
// eslint-disable-next-line react/prop-types
const ProjectCard = ({toggleModal}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={Image} alt="Card image cap"></img>
          <div className="card-body">
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
            <div className="col-md-12 text-center card-button">
              <button href="#" className="btn" onClick={() =>toggleModal()}>Show Details</button>
            </div>
          </div>
        </div>
    );
}

export default ProjectCard
