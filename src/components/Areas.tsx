import {
  CameraIcon,
  CodeIcon,
  PaletteIcon,
  PhotoIcon,
  VideoIcon,
  WrenchIcon,
} from "./Icons";
import Reveal from "./Reveal";
import "./Areas.css";

const areas = [
  {
    Icon: CodeIcon,
    title: "Desarrollo web",
    detail: "Webs rápidas, claras y hechas para convertir visitas en clientes.",
    tags: ["React", "TypeScript", "APIs"],
  },
  {
    Icon: PaletteIcon,
    title: "Diseño y branding",
    detail: "Identidades que se recuerdan, dentro y fuera de la pantalla.",
    tags: ["Identidad", "UI", "Redes"],
  },
  {
    Icon: VideoIcon,
    title: "Producción audiovisual",
    detail: "Vídeo que muestra tu producto y lo hace sentir cercano.",
    tags: ["Grabación", "Edición", "Motion"],
  },
  {
    Icon: PhotoIcon,
    title: "Fotografía y edición",
    detail: "Imágenes con intención: tu marca, bien contada.",
    tags: ["Producto", "Eventos", "Retoque"],
  },
  {
    Icon: WrenchIcon,
    title: "Datos e infraestructura",
    detail: "Sistemas que funcionan: Docker, Linux y datos bajo control.",
    tags: ["Docker", "Linux", "Datos"],
  },
  {
    Icon: CameraIcon,
    title: "Videovigilancia e instalaciones",
    detail: "Seguridad e instalaciones que funcionan sin que tengas que pensar en ellas.",
    tags: ["Cámaras IP", "Redes", "Soporte"],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="areas section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">01 / Lo que hago</span>
            <h2 className="section-title">
              Todo lo que tu proyecto necesita, en un solo lugar.
            </h2>
            <p className="section-subtitle">
              Seis áreas que se combinan entre sí para cubrir el proceso
              completo: idea, diseño, desarrollo, contenido y tecnología.
            </p>
          </div>
        </Reveal>

        <div className="areas__grid">
          {areas.map(({ Icon, title, detail, tags }, index) => (
            <Reveal key={title}>
              <article className="area-card">
                <div className="area-card__top">
                  <span className="area-card__icon">
                    <Icon size={21} />
                  </span>
                  <span className="area-card__num">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
                <div className="area-card__tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
