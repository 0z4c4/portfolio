import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Footer.css";

const socials = [
  { label: "WhatsApp", href: whatsappUrl, Icon: WhatsAppIcon },
  { label: "GitHub", href: "https://github.com/0z4c4", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diegobarbozac/",
    Icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              OZACA<span>.</span>
            </Link>
            <p>Diseño y desarrollo para marcas que quieren crecer.</p>
          </div>

          <nav className="footer__links" aria-label="Enlaces del pie">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/certificados">Certificados</Link>
          </nav>

          <div className="footer__social" aria-label="Redes">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Ozaca</span>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Hablemos por WhatsApp
          </a>
          <span>Hecho con criterio.</span>
        </div>
      </div>
    </footer>
  );
}
