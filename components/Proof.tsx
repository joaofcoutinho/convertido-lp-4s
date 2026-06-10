export default function Proof() {
  return (
    <section className="proof" id="resultados">
      <div className="container">
        <div className="proof-header reveal">
          <span className="tag">Nossos Números</span>
          <h2>
            Resultados que sustentam<br />cada proposta que fazemos.
          </h2>
        </div>
        <div className="proof-grid">
          <div className="proof-card reveal d1">
            <div className="proof-n">
              <span className="counter" data-to="20">0</span>
              <b>+</b>
            </div>
            <div className="proof-desc">
              Anos de especialidade em marketing para o setor de logística e transporte
            </div>
          </div>
          <div className="proof-card reveal d2">
            <div className="proof-n">
              <span className="counter" data-to="150">0</span>
              <b>+</b>
            </div>
            <div className="proof-desc">
              Clientes do setor logístico atendidos ao longo da nossa história
            </div>
          </div>
          <div className="proof-card reveal d3">
            <div className="proof-n">
              <b>4</b>S
            </div>
            <div className="proof-desc">
              Metodologia proprietária que cobre toda a jornada digital do cliente B2B
            </div>
          </div>
          <div className="proof-card reveal d4">
            <div className="proof-n">
              <span className="counter" data-to="3">0</span>
            </div>
            <div className="proof-desc">
              Pilares de serviço integrados: Discovery, Campanhas e E-commerce
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
