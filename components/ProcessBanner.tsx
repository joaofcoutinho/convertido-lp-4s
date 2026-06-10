const items = [
  "Diagnóstico de Marca",
  "Planejamento Estratégico",
  "Tráfego Pago B2B",
  "Branding para Logística",
  "Geração de Leads",
  "Automação de Marketing",
  "SEO Técnico",
  "Performance B2B",
];

export default function ProcessBanner() {
  // Duplicado para o loop contínuo do marquee (translateX -50%)
  const track = [...items, ...items];
  return (
    <div className="process-banner" aria-hidden="true">
      <div className="container">
        <div className="process-banner-inner">
          <div className="banner-track">
            {track.map((label, i) => (
              <span className="banner-item" key={`${label}-${i}`}>
                {label}
                <span className="banner-sep" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
