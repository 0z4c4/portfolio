import { companyLogos } from "../data/logos";
import "./LogoMarquee.css";

const REPEATS = 6;

export default function LogoMarquee() {
  const repeated = Array.from({ length: REPEATS }).flatMap(() => companyLogos);

  return (
    <section className="logos">
      <div className="logos__viewport">
        <div className="logos__track">
          {repeated.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`logos__item${logo.dark ? " logos__item--dark" : ""}`}
            >
              <img
                src={logo.src}
                alt={`Logo de ${logo.name}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
