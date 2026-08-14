import { profile } from './data/profile'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__atmosphere" aria-hidden="true" />
        <div className="hero__grain" aria-hidden="true" />
        <nav className="nav">
          <a className="nav__skip" href="#projects">
            Projects
          </a>
          <a className="nav__skip" href="#adventures">
            Adventures
          </a>
          <a
            className="nav__skip"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

        <div className="hero__content">
          <div className="hero__brand-row">
            <p className="hero__brand">{profile.name}</p>
            <img
              className="hero__logo"
              src="/assets/mountain-runner-logo.png"
              alt=""
              width={512}
              height={512}
            />
          </div>
          <h1 className="hero__title">{profile.title}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View projects
            </a>
            <a
              className="btn btn--ghost"
              href={`mailto:${profile.email}`}
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="projects" id="projects">
          <div className="section-head">
            <h2>Projects</h2>
            <p>Selected work and places to explore further.</p>
          </div>

          <ul className="project-list">
            {profile.projects.map((project) => (
              <li key={project.title}>
                <a
                  className="project"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project__copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project__tags" aria-label="Tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="adventures" id="adventures">
          <div className="section-head">
            <h2>Adventures</h2>
            <p>Long days on trail, mountains, and the stories that come with them.</p>
          </div>

          <ul className="adventure-list">
            {profile.adventures.map((adventure) => (
              <li key={adventure.title}>
                <a
                  className="adventure"
                  href={adventure.href}
                  target="_blank"
                  rel="noreferrer"
                >
              
                  <div className="adventure__copy">
                    <h3>{adventure.title}</h3>
                    <p>{adventure.description}</p>
                    <span className="adventure__cta">
                      View on Instagram
                      <span aria-hidden="true"> →</span>
                    </span>
                  </div>
                <div className="adventure__image-container">
                <img
                    className="adventure__image"
                    src={adventure.image}
                    alt={adventure.imageAlt}
                    />
                </div>
                    </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
