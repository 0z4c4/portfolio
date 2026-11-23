import { useState } from "react";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import MediaModal, { type MediaItem } from "./MediaModal";
import { ArrowRightIcon, ExternalLinkIcon } from "./Icons";
import Reveal from "./Reveal";
import LogoMarquee from "./LogoMarquee";
import "./Projects.css";

const MOSAICO_MAX = 4;

function projectMedia(project: Project): MediaItem[] {
  return [
    ...(project.videos?.map((src) => ({
      type: "video" as const,
      src,
      caption: project.captions?.[src],
    })) ?? []),
    ...(project.images?.map((src) => ({
      type: "image" as const,
      src,
      caption: project.captions?.[src],
    })) ?? []),
  ];
}

export default function Projects() {
  const [modal, setModal] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  return (
    <section id="proyectos" className="projects section">
      <div className="container projects__intro">
        <Reveal>
          <header className="projects__header">
            <span className="eyebrow">Trabajos seleccionados</span>
            <h1 className="section-title">
              Proyectos que ya están en marcha.
            </h1>
            <p className="section-subtitle">
              Una selección de marcas, piezas y sistemas que diseñé y construí.
              Abrí cualquiera para ver el detalle completo.
            </p>
          </header>
        </Reveal>
      </div>

      <LogoMarquee />

      <div className="container projects__content">
        {projects.length > 0 ? (
          <div className="projects__grid">
            {projects.map((project, index) => {
              const media = projectMedia(project);
              const shown = media.slice(0, MOSAICO_MAX);
              const remaining = media.length - shown.length;
              const live = Boolean(project.url);

              const card = (
                <>
                  <div
                    className={`project-card__media${
                      shown.length > 1 ? " project-card__media--mosaic" : ""
                    }`}
                  >
                    <div
                      className={`project-card__mosaic project-card__mosaic--${shown.length}`}
                    >
                      {shown.map((item, itemIndex) => (
                        <div className="project-card__tile" key={item.src}>
                          {item.type === "video" ? (
                            <video
                              src={item.src}
                              preload="metadata"
                              muted
                              playsInline
                            />
                          ) : (
                            <img src={item.src} alt="" loading="lazy" />
                          )}
                          {remaining > 0 && itemIndex === shown.length - 1 && (
                            <span className="project-card__more">
                              +{remaining}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="project-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {live && (
                      <span className="project-card__live">En vivo</span>
                    )}
                    <span className="project-card__view" aria-hidden="true">
                      {live ? (
                        <ExternalLinkIcon size={18} />
                      ) : (
                        <ArrowRightIcon size={18} />
                      )}
                    </span>
                  </div>

                  <div className="project-card__body">
                    <span className="project-card__category">
                      {project.category}
                    </span>
                    <h2 className="project-card__title">{project.title}</h2>
                    <p className="project-card__description">
                      {project.description}
                    </p>
                    <span className="project-card__meta">
                      {live
                        ? "Sitio en vivo"
                        : `${media.length} ${
                            media.length === 1 ? "pieza" : "piezas"
                          }`}
                    </span>
                  </div>
                </>
              );

              return (
                <Reveal key={project.id}>
                  {live ? (
                    <a
                      className="project-card project-card--external"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir sitio de ${project.title}`}
                    >
                      {card}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="project-card"
                      onClick={() => setModal({ project, index: 0 })}
                      aria-label={`Ver galería de ${project.title}`}
                    >
                      {card}
                    </button>
                  )}
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="projects__empty">
            <h2>Próximamente más proyectos</h2>
            <p>Estoy preparando nuevas piezas. Vuelve pronto para verlas.</p>
          </div>
        )}
      </div>

      {modal && (
        <MediaModal
          items={projectMedia(modal.project)}
          initialIndex={modal.index}
          title={modal.project.title}
          category={modal.project.category}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
