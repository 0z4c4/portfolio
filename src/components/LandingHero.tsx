import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CodeIcon,
  PaletteIcon,
  VideoIcon,
  WrenchIcon,
  WhatsAppIcon,
} from "./Icons";
import { whatsappUrl } from "../data/contact";
import Reveal from "./Reveal";
import "./LandingHero.css";

const deliverables = [
  {
    Icon: CodeIcon,
    title: "Webs que convierten",
    detail: "Rápidas, claras y listas para vender.",
  },
  {
    Icon: PaletteIcon,
    title: "Marcas que se recuerdan",
    detail: "Identidad con criterio en cada punto de contacto.",
  },
  {
    Icon: VideoIcon,
    title: "Contenido que comunica",
    detail: "Fotografía y vídeo con intención comercial.",
  },
  {
    Icon: WrenchIcon,
    title: "Sistemas que funcionan",
    detail: "Datos, Linux y despliegue bajo control.",
  },
];

export default function LandingHero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__aurora" aria-hidden="true" />

      <div className="hero__inner container">
        <Reveal className="hero__copy">
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="hero__title">
            Diseño y desarrollo que hacen crecer tu negocio.
          </h1>

          <p className="hero__subtitle">
            Webs, identidad, contenido y sistemas que trabajan juntos para
            atraer clientes y cerrar ventas. De la idea a la entrega, contigo
            en cada paso.
          </p>

          <div className="hero__actions">
            <a
              href={whatsappUrl}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Hablemos por WhatsApp
            </a>
            <Link to="/proyectos" className="btn btn--ghost">
              Ver trabajos
              <ArrowRightIcon size={17} />
            </Link>
          </div>

          <div className="hero__chip glass">
            <strong>16</strong> certificaciones
          </div>
        </Reveal>

        <Reveal className="hero__side">
          <div className="hero__panel glass">
            <div className="hero__panel-head">
              <span className="eyebrow">Un solo interlocutor</span>
              <span className="hero__panel-line" />
            </div>

            <ul className="hero__deliverables">
              {deliverables.map(({ Icon, title, detail }, index) => (
                <li key={title}>
                  <span className="hero__deliverable-icon">
                    <Icon size={19} />
                  </span>
                  <span className="hero__deliverable-text">
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                  <span className="hero__deliverable-num">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>

            <p className="hero__panel-foot">Estrategia · Diseño · Entrega</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
