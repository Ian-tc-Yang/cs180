import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight } from 'lucide-react';
import './styles.css';

const base = import.meta.env.BASE_URL;

const projects = [
  { number: '0', title: 'Camera & Perspective', href: `${base}project0/` },
  {
    number: '1',
    title: 'Images of the Russian Empire',
    href: `${base}project1/`,
  },
  { number: '2', title: 'Filters & Frequencies', href: `${base}project2/` },
  { number: '3', title: 'Face Morphing', href: `${base}project3/` },
  {
    number: '4',
    title: 'Image Warping & Mosaics',
    href: `${base}project4/`,
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href={base} aria-label="CS 180 portfolio home">
          <span className="wordmark__mark">IY</span>
          <span>CS 180</span>
        </a>
        <nav className="header-links" aria-label="Profile links">
          <a href="https://github.com/Ian-tc-Yang" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a href="https://www.linkedin.com/in/ian--yang" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a
            href={`${base}resume/ian-yang-resume.pdf`}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ian Yang's résumé PDF"
          >
            Résumé <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">UC Berkeley · Computer Vision</p>
          <h1 id="hero-title">
            <span>CS 180</span>
            <span className="hero__discipline">
              Computer Vision &amp; Computational Photography
            </span>
            <em>Project Portfolio</em>
          </h1>
          <p>Ian Yang · EECS</p>
        </section>

        <section className="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Projects</h2>
            <span>Final project + Projects 0–4</span>
          </div>

          <a className="final-card" href={`${base}final/`}>
            <div>
              <span className="final-card__label">Featured · Final project</span>
              <h3>Final Project</h3>
            </div>
            <span className="card-arrow" aria-hidden="true">
              <ArrowUpRight size={24} strokeWidth={1.7} />
            </span>
            <div className="final-card__orb" aria-hidden="true" />
          </a>

          <div className="project-grid">
            {projects.map((project) => (
              <a className="project-card" href={project.href} key={project.number}>
                <span className="project-number">Project {project.number}</span>
                <h3>{project.title}</h3>
                <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>Ian Yang · EECS</span>
        <span>UC Berkeley CS 180</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
