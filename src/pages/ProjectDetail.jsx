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
        <>
          <section className="linkedin-articles section">
            <div className="container">
              <h2>LinkedIn Articles</h2>
              <p className="articles-description">Written for the Online Content Development module – each piece reached thousands of impressions, connecting with professionals across LinkedIn.</p>
              <div className="articles-grid">
                <a href="https://www.linkedin.com/pulse/5-things-i-like-iadt-nathan-lawless-7ivfe?trackingId=wOwPXLmYShOZHzM64tC%2FXw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BqC9odIrCRsaznB46U3iTqg%3D%3D" target="_blank" rel="noopener noreferrer" className="article-card">
                  <div className="article-impressions">1,556</div>
                  <div className="article-label">impressions</div>
                  <h3>5 Things I Like About IADT</h3>
                  <p className="article-category">Online Content Development</p>
                </a>
                <a href="https://www.linkedin.com/pulse/what-digital-marketing-nathan-lawless-4twie?trackingId=wOwPXLmYShOZHzM64tC%2FXw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BqC9odIrCRsaznB46U3iTqg%3D%3D" target="_blank" rel="noopener noreferrer" className="article-card">
                  <div className="article-impressions">1,678</div>
                  <div className="article-label">impressions</div>
                  <h3>What is Digital Marketing?</h3>
                  <p className="article-category">Online Content Development</p>
                </a>
                <a href="https://www.linkedin.com/pulse/how-create-digital-content-nathan-lawless-kpc4e?trackingId=wOwPXLmYShOZHzM64tC%2FXw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BqC9odIrCRsaznB46U3iTqg%3D%3D" target="_blank" rel="noopener noreferrer" className="article-card">
                  <div className="article-impressions">2,139</div>
                  <div className="article-label">impressions</div>
                  <h3>How to Create Digital Content</h3>
                  <p className="article-category">Online Content Development</p>
                </a>
              </div>
            </div>
          </section>

          <section className="redbull-section section">
            <div className="container">
              <div className="redbull-content">
                <div className="redbull-text">
                  <h2>Red Bull — Advertisement</h2>
                  <p>A video advertisement produced for the Marketing module, created to capture the energy and identity of the Red Bull brand.</p>
                </div>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/Dhp5zqQ1-PQ"
                    title="Red Bull Advertisement"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {project.id === 'work-experience' && (
        <section className="production-process section">
          <div className="container">
            <h2>Production Process</h2>
            <div className="process-content">
              <p>This project involved comprehensive video production and editing. We utilized professional DJI cameras and drones to capture dynamic aerial shots and cinematic footage, providing unique perspectives and high-quality visuals. All raw footage was then meticulously edited using CapCut, allowing for precise color grading, transitions, and effects to create a polished final product that captures the energy and essence of the content.</p>

              <div className="instagram-card-section">
                <a href="https://www.instagram.com/_kassdiarra/" target="_blank" rel="noopener noreferrer" className="instagram-card">
                  <div className="instagram-content">
                    <h3>@_kassdiarra</h3>
                    <p>Instagram Profile</p>
                    <span className="instagram-link-arrow">Visit Profile →</span>
                  </div>
                </a>
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
