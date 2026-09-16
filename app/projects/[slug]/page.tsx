import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { ProjectSlider } from "@/components/project-slider";
import { getProject, portfolioProjects } from "@/lib/projects";

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = portfolioProjects.findIndex((item) => item.slug === slug);
  const nextProject = portfolioProjects[(index + 1) % portfolioProjects.length];

  return (
    <main>
      <Header />
      <section className={`project-hero ${project.thesis ? "thesis-hero" : ""}`}>
        <a href="/#selected-work" className="back-link"><ArrowLeft size={16} /> All projects</a>
        <div className="project-title-block">
          <p className="eyebrow">Project 0{index + 1} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <div className="project-intro-grid">
          <p className="project-description">{project.description}</p>
          <dl>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Typology</dt><dd>{project.type}</dd></div>
            <div><dt>Tools</dt><dd>{project.tools}</dd></div>
          </dl>
        </div>
        {project.thesis && <div className="thesis-concept" aria-label="Project themes"><span>Memory</span><span>Protection</span><span>Community</span><span>Ecology</span></div>}
      </section>

      {project.pages.length > 0 ? (
        <section className="panel-gallery" aria-label={`${project.title} portfolio panels`}>
          <div className="gallery-toolbar">
            <p>{project.pages.length} portfolio pages</p>
            <a href="/#selected-work">Project index</a>
          </div>
          <ProjectSlider title={project.title} pages={project.pages} assetPrefix={project.assetPrefix} />
        </section>
      ) : (
        <section className="thesis-story">
          <div><p className="eyebrow">Design framework</p><h2>From rupture to a layered civic ground.</h2></div>
          <div className="story-columns">
            <article><span>01</span><h3>Urban continuity</h3><p>Public bridges and active edges reconnect Beirut to its port through spaces of exchange and shared daily life.</p></article>
            <article><span>02</span><h3>Protected layers</h3><p>Horizontal slabs create gradients from open public territory to intimate, sheltered community spaces.</p></article>
            <article><span>03</span><h3>Living structure</h3><p>Timber frames, vertical shafts and planted levels bring light, air and ecological repair into the project.</p></article>
          </div>
        </section>
      )}
      <a href={`/projects/${nextProject.slug}`} className="next-project"><div><span>Next project</span><strong>{nextProject.title}</strong></div><ArrowRight size={34} /></a>
    </main>
  );
}
