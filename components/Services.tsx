import type { ReactNode } from "react";

type Service = {
  delay: string;
  icon: ReactNode;
  title: string;
  desc: string;
  feats: string[];
};

const services: Service[] = [
  {
    delay: "d1",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 16V4M9 7l6-3" />
      </svg>
    ),
    title: "Discovery",
    desc: "O ponto de partida de toda estratégia de sucesso. Diagnóstico, mapeamento e planejamento estruturado para escalar resultados com inteligência e sem desperdício de verba.",
    feats: [
      "Diagnóstico de marca e posicionamento no setor",
      "Análise competitiva e mapeamento de oportunidades",
      "Roadmap estratégico integrado e priorizado",
      "Definição de KPIs e metas de crescimento real",
    ],
  },
  {
    delay: "d2",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Campanhas de Impacto",
    desc: "Criação voltada para conversão. Campanhas que integram criatividade e performance para gerar demanda real e qualificada no mercado de logística e transporte.",
    feats: [
      "Tráfego pago B2B com segmentação setorial",
      "Produção criativa especializada no setor",
      "Campanhas de geração e qualificação de leads",
      "Otimização contínua com foco em CPL real",
    ],
  },
  {
    delay: "d3",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: "Assessoria para E‑commerce",
    desc: "Gestão 360° para quem vende insumos, equipamentos ou soluções para o setor logístico. Da estrutura da loja à conversão final, escalando vendas com estratégia.",
    feats: [
      "Estruturação e otimização de loja virtual",
      "Estratégia de conteúdo e SEO para o setor",
      "Campanhas de performance para e-commerce B2B",
      "Gestão de marketplace e canais digitais",
    ],
  },
];

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="svc-header reveal">
          <span className="tag">Nossos Serviços</span>
          <h2>
            Tudo que sua operação<br />de marketing precisa.
          </h2>
          <p>
            Três pilares que cobrem desde o planejamento até a conversão final — integrados
            pela metodologia 4S.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div className={`svc-card reveal ${s.delay}`} key={s.title}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="svc-feats">
                {s.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
