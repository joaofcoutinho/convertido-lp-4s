const points = [
  "Estratégias validadas para transportadoras e operadores logísticos",
  "Comunicação para público técnico e tomadores de decisão B2B",
  "Geração de demanda e qualificação de leads no setor",
  "Branding e posicionamento de médio e grande porte",
  "Campanhas de performance com foco em custo por lead real",
];

export default function Manifesto() {
  return (
    <section className="manifesto" id="sobre">
      <div className="manifesto-ghost" aria-hidden="true">20</div>
      <div className="container">
        <div className="manifesto-grid">
          <div className="reveal mani-title-col">
            <div className="manifesto-glow" aria-hidden="true" />
            <div className="mani-sub">Nossa Experiência</div>
            <h2 className="mani-hl">
              Duas <em>décadas.</em>
              <br />Uma especialidade.
            </h2>
            <p className="mani-intro">
              No setor de logística, cada decisão tem custo. Cada ineficiência tem peso. A
              Convertido entende essa realidade porque viveu ela ao lado de{" "}
              <strong>mais de 150 empresas do setor</strong> ao longo de 20 anos.
            </p>
          </div>
          <div className="mani-body reveal d2">
            <p>
              Não somos generalistas que aprenderam o vocabulário. Somos especialistas que{" "}
              <strong>conhecem a rota, os gargalos e as oportunidades de comunicação</strong>{" "}
              que só surgem para quem olha fundo para esse mercado.
            </p>
            <p>
              De transportadoras regionais a grandes operadores logísticos: sabemos o que
              funciona, o que desperdiça verba e como{" "}
              <strong>construir autoridade de marca</strong> em um setor altamente técnico e
              competitivo.
            </p>
            <ul className="mani-list">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
