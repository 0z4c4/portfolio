import { useState } from "react";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import MediaModal, { type MediaItem } from "./MediaModal";
import { ArrowRightIcon, PlayIcon, ZoomIcon } from "./Icons";
import "./Projects.css";

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
      <div className="projects__inner container">
        <div className="projects__header">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title">Algunos de mis trabajos</h2>
          <p className="section-subtitle">
            Piezas de diseño, branding y audiovisual. Haz clic en cualquier
            trabajo para verlo en grande.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="projects__list">
            {projects.map((project, index) => {
              const media = projectMedia(project);
              return (
                <article
                  key={project.id}
                  className={
                    index % 2 === 1
                      ? "projects__showcase projects__showcase--reverse"
                      : "projects__showcase"
                  }
                >
                  <div className="projects__info">
                    <span className="projects__category">
                      {project.category}
                    </span>
                    <h3 className="projects__title">{project.title}</h3>
                    <p className="projects__description">
                      {project.description}
                    </p>
                  </div>

                  <div className="projects__gallery">
                    {media.map((item, itemIndex) => (
                      <button
                        key={item.src}
                        type="button"
                        className="projects__tile"
                        onClick={() =>
                          setModal({ project, index: itemIndex })
                        }
                        aria-label={`Ver ${project.title} · ${item.type === "video" ? "video" : "imagen"} ${itemIndex + 1}`}
                      >
                        {item.type === "video" ? (
                          <video src={item.src} preload="metadata" muted playsInline />
                        ) : (
                          <img
                            src={item.src}
                            alt={`${project.title} · imagen ${itemIndex + 1}`}
                            loading="lazy"
                          />
                        )}
                        <span className="projects__tile-overlay">
                          {item.type === "video" ? (
                            <PlayIcon size={26} />
                          ) : (
                            <ZoomIcon size={26} />
                          )}
                          {item.caption && (
                            <span className="projects__tile-caption">
                              {item.caption}
                            </span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="projects__empty">
            <div className="projects__empty-icon" aria-hidden="true">
              <ArrowRightIcon size={28} />
            </div>
            <h3 className="projects__empty-title">
              Mis proyectos estarán aquí pronto
            </h3>
            <p className="projects__empty-text">
              Estoy preparando una galería con trabajos de desarrollo web,
              diseño gráfico, fotografía, producción audiovisual,
              videovigilancia e instalaciones generales. Vuelve pronto para
              verlos.
            </p>
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
