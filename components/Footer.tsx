export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={encodeURI("/Header-Digital-Product-V1-1 (4).webp")} alt="Convertido" />
          </div>
          <p className="footer-copy">
            &copy; 2025 Convertido Marketing &mdash; Serra, Espírito Santo.
          </p>
          <ul className="footer-links">
            <li>
              <a href="https://convertido.com.br" target="_blank" rel="noreferrer">
                convertido.com.br
              </a>
            </li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
