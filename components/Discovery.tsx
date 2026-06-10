import { waLink } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    delay: "",
    title: "Diagnóstico de Marca e Mercado",
    desc: "Análise profunda da presença atual, posicionamento competitivo e percepção da sua marca no setor logístico. Sabemos onde você está antes de definir para onde ir.",
  },
  {
    n: "02",
    delay: "d1",
    title: "Mapeamento da Jornada do Cliente",
    desc: "Identificamos como seu cliente ideal pesquisa, avalia e decide por um operador logístico, e onde sua empresa precisa estar em cada etapa dessa jornada.",
  },
  {
    n: "03",
    delay: "d2",
    title: "Definição de Objetivos e KPIs",
    desc: "Estabelecemos métricas que importam de verdade para o negócio, não apenas para o relatório de marketing. Crescimento de receita é o objetivo final.",
  },
  {
    n: "04",
    delay: "d3",
    title: "Plano de Ação Integrado 4S",
    desc: "Entregamos um roadmap claro, priorizado e executável, integrando todos os canais e touchpoints da jornada do seu cliente com base na nossa metodologia.",
  },
];

export default function Discovery() {
  return (
    <section className="discovery" id="discovery">
      <div className="container">
        <div className="disc-grid">
          <div className="disc-left">
            <span className="tag reveal">Planejamento Estratégico</span>
            <h2 className="reveal d1">
              A <em>rota</em> antes
              <br />viagem.
            </h2>
            <p className="reveal d2">
              Todo grande resultado começa com um plano. O{" "}
              <strong>Discovery da Convertido</strong> é o nosso processo estruturado de
              diagnóstico, análise competitiva e definição da rota estratégica para sua
              operação de marketing.
            </p>
            <p className="reveal d2">
              Sem achismo. Sem retrabalho. Com dados reais do seu mercado, do seu cliente e do
              momento que sua empresa vive agora.
            </p>
            <div className="reveal d3">
              <a
                href={waLink("Olá! Quero meu Discovery com a Convertido.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quero meu Discovery &rarr;
              </a>
            </div>
          </div>
          <div className="disc-steps">
            {steps.map((s) => (
              <div className={`disc-step reveal ${s.delay}`.trim()} key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
