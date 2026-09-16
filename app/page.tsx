import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { portfolioProjects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Architect · Madrid / Beirut</p>
          <h1>Ali Kansoh<span>Architecture shaped by people, place and making.</span></h1>
        </div>
        <div className="hero-meta">
          <p>M.Arch and B.Arch graduate from Universidad Europea de Madrid, combining design research, technical precision and five years of hands-on digital fabrication.</p>
          <div className="hero-actions">
            <a href="#selected-work" className="text-link">Selected work <ArrowDownRight size={16} /></a>
            <a href="/cv" className="text-link muted-link">View CV <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01—06</div>
      </section>

      <section id="selected-work" className="projects-section">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2022—2026</p>
          <h2>Projects</h2>
          <p className="project-choice-note">Choose a project to explore</p>
        </div>
        <div className="project-grid">
          {portfolioProjects.map((project, index) => (
            <a href={`/projects/${project.slug}`} className="project-card" key={project.slug}>
              <div className="project-card-top">
                <span className="project-number">0{index + 1}</span>
                <span className="open-project" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-caption">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <div className="project-meta">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="profile-strip" id="profile">
        <p className="eyebrow">Profile</p>
        <p className="profile-statement">I move between architecture, environmental thinking and fabrication—translating ambitious concepts into precise drawings, models and buildable systems.</p>
        <div className="profile-facts">
          <div><span>Education</span><strong>M.Arch · B.Arch</strong></div>
          <div><span>Accreditation</span><strong>RIBA · NAAB</strong></div>
          <div><span>Languages</span><strong>English · Arabic · Spanish</strong></div>
          <div><span>Tools</span><strong>Rhino · Revit · AutoCAD · Grasshopper</strong></div>
        </div>
      </section>

      <footer>
        <div><p className="eyebrow">Contact</p><a href="mailto:alikanso725@hotmail.com" className="footer-email">alikanso725@hotmail.com</a></div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/ali-kansoh-822b6b266" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/archiiform" target="_blank" rel="noreferrer">Instagram</a>
          <span>Madrid · 2026</span>
        </div>
      </footer>
    </main>
  );
}
