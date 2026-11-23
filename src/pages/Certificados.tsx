import { useEffect, useState } from "react";
import type { Certificate } from "../data/certificates";
import { certificates } from "../data/certificates";
import { CloseIcon } from "../components/Icons";
import Reveal from "../components/Reveal";
import "./Certificates.css";

export default function Certificados() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <main className="certificates section">
      <div className="container">
        <Reveal>
          <header className="certificates__header">
            <span className="eyebrow">Formación aplicada</span>
            <h1 className="section-title">
              Certificaciones que respaldan el trabajo.
            </h1>
            <p className="section-subtitle">
              Credenciales en desarrollo, diseño, datos e infraestructura.
              Evidencia de criterio técnico aplicado a cada proyecto.
            </p>
            <span className="certificates__count">
              {String(certificates.length).padStart(2, "0")} credenciales
            </span>
          </header>
        </Reveal>

        {certificates.length > 0 ? (
          <div className="certificates__grid">
            {certificates.map((certificate) => (
              <Reveal key={certificate.id}>
                <article
                  className="certificates__card"
                  onClick={() => setSelected(certificate)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") setSelected(certificate);
                  }}
                >
                  <div className="certificates__media">
                    <img src={certificate.image} alt={certificate.title} loading="lazy" />
                  </div>
                  <div className="certificates__body">
                    <span className="certificates__year">{certificate.year}</span>
                    <h2 className="certificates__title">{certificate.title}</h2>
                    <p className="certificates__issuer">{certificate.issuer}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="certificates__empty">
            <h2>Próximamente más credenciales</h2>
            <p>Estoy sumando nuevas certificaciones. Vuelve pronto para verlas.</p>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="certificates__modal"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="certificates__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificates__modal-close"
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
            >
              <CloseIcon size={21} />
            </button>
            <img
              className="certificates__modal-image"
              src={selected.image}
              alt={selected.title}
            />
            <div className="certificates__modal-caption">
              <strong>{selected.title}</strong>
              <span>
                {selected.issuer} · {selected.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
