const logos = [
  { src: "/parceiros/Apresentacao-Sudeste-Atacado-512-x-512-px.png", alt: "Sudeste Atacado" },
  { src: "/parceiros/Logo (1).png", alt: "Cliente Convertido" },
  { src: "/parceiros/Logo-03-2.png", alt: "Cliente Convertido" },
  { src: "/parceiros/Logo-05-2.png", alt: "Cliente Convertido" },
  { src: "/parceiros/Logo-10-2.png", alt: "Cliente Convertido" },
  { src: "/parceiros/Logo-11-2 (1).png", alt: "Cliente Convertido" },
];

export default function LogosCarousel() {
  // Duplicado para o loop contínuo do marquee (translateX -50%)
  const track = [...logos, ...logos];
  return (
    <section className="logos" id="clientes">
      <div className="container">
        <p className="logos-label reveal">Empresas do setor que já confiaram na Convertido</p>
      </div>
      <div className="logos-marquee">
        <div className="logos-track">
          {track.map((logo, i) => (
            <div className="logo-item" key={`${logo.src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={encodeURI(logo.src)} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
