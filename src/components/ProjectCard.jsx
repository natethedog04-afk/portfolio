import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card-content" style={{ backgroundColor: project.bgColor, color: project.textColor }}>
        <div className="project-card-text">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle">{project.subtitle}</p>
        </div>
        {project.image && (
          <div className="project-card-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
      </div>
    </Link>
  )
}
