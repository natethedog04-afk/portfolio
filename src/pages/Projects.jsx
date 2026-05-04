import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-description">
            A collection of my work across various domains and disciplines.
          </p>
        </div>
      </section>

      <section className="projects-list section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
