import KommoForm from "@/components/KommoForm";

export default function CtaFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="container">
        <div className="cta-final-box reveal">
          <div className="cta-final-grid">
            <div className="cta-content">
              <span className="tag">Vamos conversar</span>
              <h2>
                Sua operação<br />logística merece<br />uma estratégia<br />
                <em>à altura.</em>
              </h2>
              <p>
                Fale com nosso time e descubra como o Discovery da Convertido pode transformar
                o marketing da sua empresa em crescimento real e mensurável.
              </p>
            </div>
            <KommoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
