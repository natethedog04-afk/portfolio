import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-title">Say hello</h1>
          <p className="contact-description">
            Let's collaborate. Feel free to reach out about your project or follow me on social networks.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send me a message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" rows="6" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Connect with me</h2>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/nathanlawless1" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                  <span className="arrow">→</span>
                </a>
                <a href="https://www.youtube.com/@natethedog04" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>YouTube</span>
                  <span className="arrow">→</span>
                </a>
                <a href="mailto:natethedog04@gmail.com" className="social-link">
                  <span>Email</span>
                  <span className="arrow">→</span>
                </a>
              </div>

              <div className="contact-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:natethedog04@gmail.com">natethedog04@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
