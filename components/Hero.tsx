import { waLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag reveal">
            <span className="tag">Assessoria de Marketing &bull; Logística &amp; Transporte</span>
          </div>
          <h1 className="hero-hl reveal d1">
            Marketing que move<br />quem move<br />
            <em>o Brasil.</em>
          </h1>
          <p className="hero-sub reveal d2">
            Mais de 20 anos especializados em estratégias de crescimento para empresas de
            logística e transporte. Aqui, planejamento não é documento. É rota.
          </p>
          <div className="hero-ctas reveal d3">
            <a
              href={waLink("Olá! Quero meu planejamento estratégico com a Convertido.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero meu planejamento estratégico &rarr;
            </a>
            <a href="#metodologia" className="btn-outline">
              Ver nossa metodologia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
