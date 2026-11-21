export interface CompanyLogo {
  name: string;
  src: string;
  dark?: boolean;
}

export const companyLogos: CompanyLogo[] = [
  { name: "Cajú", src: "/portfolio/proyectos/Cajú/propuesta_logo.webp" },
  {
    name: "Insertec",
    src: "/portfolio/proyectos/Insertec/logo_Insertec LTDA.webp",
    dark: true,
  },
  { name: "Milter", src: "/portfolio/proyectos/Milter/logo_milter.webp" },
  { name: "Adonai", src: "/portfolio/proyectos/Adonai/logo_adonai.webp", dark: true },
  { name: "Siguelo", src: "/portfolio/proyectos/Siguelo/logo_siguelo.webp" },
  {
    name: "Utopía",
    src: "/portfolio/proyectos/Utopía/logo_utopia.webp",
    dark: true,
  },
  {
    name: "Club Social 24 de Septiembre",
    src: "/portfolio/proyectos/Club Social 24 De Septiembre/logo_clubsocial.webp",
    dark: true,
  },
];
