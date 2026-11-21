import { Link } from "react-router-dom";
import {
  CodeIcon,
  PaletteIcon,
  VideoIcon,
  PhotoIcon,
  ArrowRightIcon,
} from "./Icons";
import "./HomePreview.css";

const previews = [
  {
    to: "/servicios",
    label: "Servicios",
    title: "Áreas en las que trabajo",
    description:
      "Desarrollo web, diseño, audiovisual, cámaras e instalaciones con atención al detalle.",
    Icon: CodeIcon,
  },
  {
    to: "/proyectos",
    label: "Proyectos",
    title: "Trabajos y piezas reales",
    description:
      "Branding, diseño para redes y producción audiovisual hechos para marcas y negocios.",
    Icon: PaletteIcon,
  },
  {
    to: "/certificados",
    label: "Certificados",
    title: "Formación continua",
    description:
      "Cursos y certificaciones que respaldan mi trabajo en tecnología, diseño y datos.",
    Icon: PhotoIcon,
  },
  {
    to: "/sobre-mi",
    label: "Sobre mí",
    title: "Perfil integral",
    description:
      "Tecnología, diseño y producción visual combinados para construir sistemas y experiencias.",
    Icon: VideoIcon,
  },
];

export default function HomePreview() {
  return (
    <section className="preview section">
      <div className="preview__inner container">
        <div className="preview__header">
          <span className="section-label">Explora</span>
          <h2 className="section-title">De la idea al producto final</h2>
          <p className="section-subtitle">
            Un perfil que une desarrollo, diseño, audiovisual e infraestructura
            para llevar proyectos completos de principio a fin.
          </p>
        </div>
        <div className="preview__grid">
          {previews.map(({ to, label, title, description, Icon }) => (
            <Link key={to} to={to} className="preview__card">
              <div className="preview__icon" aria-hidden="true">
                <Icon size={26} />
              </div>
              <span className="preview__label">{label}</span>
              <h3 className="preview__title">{title}</h3>
              <p className="preview__description">{description}</p>
              <span className="preview__more">
                Explorar
                <ArrowRightIcon size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
