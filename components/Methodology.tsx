const cards = [
  {
    name: "01 · Streaming",
    letter: "Assistir",
    desc: "Sua marca em movimento. Vídeos institucionais, cases de operação e conteúdo em áudio que educam o mercado, geram autoridade e constroem reputação para sua empresa no setor.",
  },
  {
    name: "02 · Scrolling",
    letter: "Navegar",
    desc: "Presença estratégica onde seus clientes navegam. Conteúdo que para o dedo, gera reconhecimento de marca e mantém sua empresa relevante no dia a dia do decisor B2B.",
  },
  {
    name: "03 · Search",
    letter: "Pesquisar",
    desc: "Quando um tomador de decisão pesquisa por serviço logístico, sua empresa aparece. SEO técnico, Google Ads e captura de intenção de compra ativa no setor.",
  },
  {
    name: "04 · Shopping",
    letter: "Comprar",
    desc: "Cada lead tem custo. Cada oportunidade tem valor. Campanhas de performance otimizadas para converter o contato certo no momento certo da jornada de compra.",
  },
];

export default function Methodology() {
  return (
    <section className="methodology" id="metodologia">
      <div className="container">
        <div className="meth-header reveal">
          <span className="tag">Metodologia Exclusiva</span>
          <h2>Os 4S do Marketing</h2>
          <p>
            A nova jornada do consumidor digital, aplicada com precisão ao mercado de
            logística e transporte.
          </p>
        </div>
        <div className="meth-grid reveal d1">
          {cards.map((c) => (
            <div className="meth-card" key={c.name}>
              <div className="meth-big" aria-hidden="true">S</div>
              <div className="meth-name">{c.name}</div>
              <div className="meth-letter">{c.letter}</div>
              <p className="meth-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
