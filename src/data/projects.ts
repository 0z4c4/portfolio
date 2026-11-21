export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images?: string[];
  videos?: string[];
  audio?: string;
  pdf?: string;
  captions?: Record<string, string>;
}

export const projects: Project[] = [
  {
    id: "caju",
    title: "Cajú",
    category: "Branding e identidad",
    description:
      "Identidad visual y propuesta de logotipo para Cajú, con una dirección de marca coherente y aplicable a distintos formatos.",
    images: ["/portfolio/proyectos/Cajú/diseño_marca_cajú.webp"],
  },
  {
    id: "club-social",
    title: "Club Social 24 de Septiembre",
    category: "Diseño gráfico",
    description:
      "Invitación digital para la cena de confraternización del Club Social 24 de Septiembre, cuidando jerarquía y comunicación.",
    images: [
      "/portfolio/proyectos/Club Social 24 De Septiembre/invitacion_cena_confraternizacion.webp",
    ],
  },
  {
    id: "insertec",
    title: "Insertec LTDA",
    category: "Audiovisual y marca",
    description:
      "Piezas audiovisuales FMS y logotipo para Insertec LTDA, orientados a comunicación corporativa y presentación de servicios.",
    videos: [
      "/portfolio/proyectos/Insertec/fms_1_preview.webm",
      "/portfolio/proyectos/Insertec/fms_2_preview.webm",
      "/portfolio/proyectos/Insertec/fms_3_preview.webm",
      "/portfolio/proyectos/Insertec/fms_4_preview.webm",
    ],
  },
  {
    id: "milter",
    title: "Milter",
    category: "Branding y diseño para redes",
    description:
      "Campañas preventivas, flyers, letreros, mural, mockups de poleras y materiales de staff para conciertos de Milter, con una línea visual coherente para redes sociales y punto de venta.",
    images: [
      "/portfolio/proyectos/Milter/campaña_preventiva_colegios.webp",
      "/portfolio/proyectos/Milter/campaña_preventiva_universidades.webp",
      "/portfolio/proyectos/Milter/flyer_billar_fumigacion.webp",
      "/portfolio/proyectos/Milter/flyer_capacitacion_servicioalcliente_moira_yepez.webp",
      "/portfolio/proyectos/Milter/letrero_billar_area_protegida.webp",
      "/portfolio/proyectos/Milter/mural_lacasadelpelador.webp",
      "/portfolio/proyectos/Milter/aplicado_1.webp",
      "/portfolio/proyectos/Milter/aplicado_2.webp",
      "/portfolio/proyectos/Milter/concierto_jessi_uribe.webp",
      "/portfolio/proyectos/Milter/serenata_a_vallegrande.webp",
      "/portfolio/proyectos/Milter/concierto_floricienta.webp",
      "/portfolio/proyectos/Milter/diseño_foto_personal.webp",
      "/portfolio/proyectos/Milter/mockup_polera_collage.webp",
      "/portfolio/proyectos/Milter/mockup_polera_run.webp",
      "/portfolio/proyectos/Milter/mockup_polera_hombre.webp",
      "/portfolio/proyectos/Milter/mockup_polera_mujer.webp",
    ],
    captions: {
      "/portfolio/proyectos/Milter/concierto_jessi_uribe.webp":
        "Staff · Concierto Jessi Uribe",
      "/portfolio/proyectos/Milter/serenata_a_vallegrande.webp":
        "Staff · Serenata a Vallegrande",
      "/portfolio/proyectos/Milter/concierto_floricienta.webp":
        "Staff · Concierto Floricienta",
    },
  },
  {
    id: "adonai",
    title: "Adonai",
    category: "Diseño gráfico y marca",
    description:
      "Logotipo, consultorio y publicidad para redes de Adonai, con piezas aplicadas a distintos soportes y formatos.",
    images: [
      "/portfolio/proyectos/Adonai/aplicado_vista_exterior.webp",
      "/portfolio/proyectos/Adonai/aplicado_vista_interior.webp",
      "/portfolio/proyectos/Adonai/diseño_puertavidrio_consultorio.webp",
      "/portfolio/proyectos/Adonai/DrenajeLinfaticoFb.webp",
      "/portfolio/proyectos/Adonai/ElectroPuncionFb.webp",
      "/portfolio/proyectos/Adonai/ElectroterapiaFb.webp",
      "/portfolio/proyectos/Adonai/MasoterapiaFb.webp",
      "/portfolio/proyectos/Adonai/PuncionSecaFb.webp",
      "/portfolio/proyectos/Adonai/UltrasonidoFb.webp",
      "/portfolio/proyectos/Adonai/VentosaterapiaFb.webp",
      "/portfolio/proyectos/Adonai/DrenajeLinfaticoWppBusiness.webp",
      "/portfolio/proyectos/Adonai/ElectroPuncionWppBusiness.webp",
      "/portfolio/proyectos/Adonai/MasoterapiaWppBusiness.webp",
      "/portfolio/proyectos/Adonai/PuncionSecaWppBusiness.webp",
    ],
  },
  {
    id: "siguelo",
    title: "Siguelo",
    category: "Plataforma y branding",
    description:
      "Identidad, tarjetas, banner y videos de la plataforma de rastreo Siguelo, mostrando el producto y su uso en escenarios reales.",
    videos: [
      "/portfolio/proyectos/Siguelo/video_comercial_preview.webm",
      "/portfolio/proyectos/Siguelo/video_explicacion_reporte_preview.webm",
      "/portfolio/proyectos/Siguelo/video_explicacion_vueltas_preview.webm",
    ],
    images: [
      "/portfolio/proyectos/Siguelo/banner_horizontal.webp",
      "/portfolio/proyectos/Siguelo/tarjeta_anverso.webp",
      "/portfolio/proyectos/Siguelo/tarjeta_reverso.webp",
      "/portfolio/proyectos/Siguelo/IMG-20251226-WA0012.webp",
      "/portfolio/proyectos/Siguelo/IMG-20251226-WA0025.webp",
      "/portfolio/proyectos/Siguelo/IMG-20251226-WA0026.webp",
      "/portfolio/proyectos/Siguelo/IMG-20251226-WA0027.webp",
    ],
  },
  {
    id: "utopia",
    title: "Utopía",
    category: "Branding e identidad",
    description:
      "Logotipo e invitación digital para Utopía, con una línea visual elegante orientada a comunicación de eventos.",
    images: [
      "/portfolio/proyectos/Utopía/invitacion_cena_cumpleaños.webp",
    ],
  },
  {
    id: "velas-miel",
    title: "Velas Miel",
    category: "Fotografía de producto",
    description:
      "Fotografía de producto para las velas artesanales Velas Miel, mostrando tamaños, acabados y presentaciones.",
    images: [
      "/portfolio/proyectos/Velas Miel/velas.webp",
      "/portfolio/proyectos/Velas Miel/velas_2.webp",
      "/portfolio/proyectos/Velas Miel/vela_grande.webp",
      "/portfolio/proyectos/Velas Miel/vela_pequeña.webp",
      "/portfolio/proyectos/Velas Miel/vela_mini.webp",
    ],
  },
  {
    id: "full-assistance",
    title: "Full Assistance",
    category: "Diseño gráfico",
    description:
      "Tarjeta de presentación digital para Full Assistance, con una composición limpia orientada a comunicación profesional.",
    images: [
      "/portfolio/proyectos/Full Assistance/tarjeta_presentacion_digital.webp",
    ],
  },
];
