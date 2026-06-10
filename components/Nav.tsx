import { waLink } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="nav-logo" aria-label="Convertido">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={encodeURI("/Header-Digital-Product-V1-1 (4).webp")} alt="Convertido" />
          </a>
          <ul className="nav-links">
            <li><a href="#metodologia">Metodologia</a></li>
            <li><a href="#discovery">Planejamento</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#resultados">Resultados</a></li>
          </ul>
          <a
            href={waLink("Olá! Vim pelo site da Convertido e quero falar com um especialista.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com especialista &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}
