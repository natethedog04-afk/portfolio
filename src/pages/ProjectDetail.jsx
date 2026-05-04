import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <p>Project not found</p>
          <Link to="/projects">Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="project-detail">
      <section className="project-hero" style={{ backgroundColor: project.bgColor, color: project.textColor }}>
        <div className="container">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <p className="project-detail-year">{project.year}</p>
        </div>
      </section>

      {project.image && (
        <section className="project-image-section section">
          <div className="container">
            <div className="project-image-large">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </section>
      )}

      <section className="project-content section">
        <div className="container">
          <div className="project-content-grid">
            <div className="project-description">
              <h2>About this project</h2>
              <p>{project.fullDescription}</p>
            </div>
            <div className="project-sidebar">
              <div className="project-tech">
                <h3>Technologies & Skills</h3>
                <ul>
                  <li>Project Strategy</li>
                  <li>Creative Direction</li>
                  <li>Digital Design</li>
                  <li>Brand Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta section">
        <div className="container">
          <h2>Interested in working together?</h2>
          <Link to="/contact" className="cta-button">Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
