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
      </section>{project.id === 'digital-footprint' && (
        <section className="linkedin-articles section">
          <div className="container">
            <h2>LinkedIn Articles</h2>
            <p className="articles-description">Written for the Online Content Development module – each piece reached thousands of impressions, connecting with professionals across LinkedIn.</p>
            <div className="articles-grid">
              <div className="article-card">
                <div className="article-impressions">1,556</div>
                <div className="article-label">impressions</div>
                <h3>5 Things I Like About IADT</h3>
                <p className="article-category">Online Content Development</p>
              </div>
              <div className="article-card">
                <div className="article-impressions">1,678</div>
                <div className="article-label">impressions</div>
                <h3>What is Digital Marketing?</h3>
                <p className="article-category">Online Content Development</p>
              </div>
              <div className="article-card">
                <div className="article-impressions">2,139</div>
                <div className="article-label">impressions</div>
                <h3>How to Create Digital Content</h3>
                <p className="article-category">Online Content Development</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="project-cta section">
        <div className="container">
          <h2>Interested in working together?</h2>
          <Link to="/contact" className="cta-button">Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
