import "./About.css";

interface Area {
  num: string;
  title: string;
  description: string;
  skills: string[];
}

const areas: Area[] = [
  {
    num: "01",
    title: "Desarrollo",
    description:
      "Aplicaciones y sistemas web modernos con arquitectura clara y pensada para escalar: de la interfaz a la base de datos.",
    skills: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "APIs",
      "Arquitectura de software",
    ],
  },
  {
    num: "02",
    title: "Diseño",
    description:
      "Identidad visual y branding con decisiones justificadas: sistemas de color, jerarquía y aplicación a distintos formatos.",
    skills: [
      "Branding",
      "Identidad visual",
      "UI",
      "Comunicación visual",
      "Diseño para redes",
    ],
  },
  {
    num: "03",
    title: "Audiovisual",
    description:
      "Producción de contenido audiovisual, fotografía y edición para redes, eventos y comunicación corporativa.",
    skills: ["Fotografía", "Video", "Edición", "Contenido digital"],
  },
  {
    num: "04",
    title: "Tecnología",
    description:
      "Linux, servidores y despliegue de servicios propios, con interés práctico por la infraestructura y el self-hosting.",
    skills: [
      "Linux",
      "Servidores",
      "VPS",
      "Docker",
      "Hardware",
      "Self-hosting",
      "Cámaras IP",
    ],
  },
  {
    num: "05",
    title: "Datos",
    description:
      "Transformo datos y resultados de encuestas en información visual y comprensible para apoyar el análisis y la toma de decisiones.",
    skills: ["Análisis de datos", "Métricas", "Encuestas", "Visualización", "Indicadores"],
  },
  {
    num: "06",
    title: "Producto",
    description:
      "Pienso en cómo debe funcionar un sistema digital: modelado, flujos, estados y crecimiento de la solución.",
    skills: [
      "Conceptualización",
      "Modelado de datos",
      "UX",
      "Sistemas digitales",
      "Resolución de problemas",
    ],
  },
];

const highlights = [
  "Comunicación clara y directa",
  "Entregas a tiempo",
  "Presupuesto sin compromiso",
  "Soporte post-venta",
];

export default function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="about__inner container">
        <div className="about__header">
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title">
            Tecnología, diseño y producción visual en un mismo perfil
          </h2>
          <p className="section-subtitle">
            Construyo experiencias y sistemas digitales combinando desarrollo,
            diseño, audiovisual e infraestructura: de la idea y la identidad,
            hasta la aplicación y el contenido.
          </p>
        </div>

        <div className="about__areas">
          {areas.map((area) => (
            <article key={area.num} className="about__area">
              <span className="about__area-num">{area.num}</span>
              <h3 className="about__area-title">{area.title}</h3>
              <p className="about__area-description">{area.description}</p>
              <div className="about__chips">
                {area.skills.map((skill) => (
                  <span key={skill} className="about__chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <ul className="about__highlights">
          {highlights.map((highlight) => (
            <li key={highlight} className="about__highlight">
              <span className="about__check" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
