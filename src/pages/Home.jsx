import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Home.css'

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero section">
        <div className="container">
          <h1 className="home-title">Nathan Lawless</h1>
          <p className="home-description">
            Creative professional specializing in digital projects and visual storytelling.
          </p>
        </div>
      </section>

      <section className="home-bio section">
        <div className="container">
          <p className="bio-text">
            I am a digital marketing graduate of IADT. I have really enjoyed the course and made lifelong friends along the way.
          </p>
        </div>
      </section>

      <section className="home-projects section">
        <div className="container">
          <h2 className="home-section-title">Featured Projects</h2>
          <div className="home-projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta section">
        <div className="container">
          <h2 className="cta-title">Get In Touch</h2>
          <p className="cta-description">
            If you have any project you would like me to work on please let me know!
          </p>
          <Link to="/contact" className="cta-button">Contact Me</Link>
        </div>
      </section>
    </main>
  )
}
