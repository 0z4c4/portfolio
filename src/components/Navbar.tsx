import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  MenuIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
  ArrowRightIcon,
} from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Navbar.css";

type Theme = "dark" | "light";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Certificados", to: "/certificados" },
];

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // Modo privado: el cambio sigue aplicando en la sesión actual.
    }
    setTheme(next);
  };

  const themeLabel =
    theme === "dark" ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <header className="navbar">
      <div className="navbar__pill glass container">
        <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
          OZACA<span>.</span>
        </Link>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? " navbar__link--active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                className="navbar__link navbar__link--contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <CloseIcon size={21} /> : <MenuIcon size={21} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="navbar__mobile glass container" aria-label="Navegación móvil">
          <ul className="navbar__mobile-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                className="navbar__mobile-contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Hablemos por WhatsApp
                <ArrowRightIcon size={16} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
