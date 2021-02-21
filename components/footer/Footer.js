export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer--cta">
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-12 col-md-8">
              <h4 class="footer--cta__title">
                Podemos hacer realidad esa idea que tienes en mente.
              </h4>
              <span class="footer--cta__email"><span>👋</span> <a>hello@amadezing.com</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="footer--links">
              <span className="footer--links__title">Based in</span>
              <span className="footer--links__item">Medellín, Colombia</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="footer--links">
              <span className="footer--links__title">Servicios</span>
              <span className="footer--links__item">Diseño de marcas</span>
              <span className="footer--links__item">Diseño UI / UX</span>
              <span className="footer--links__item">Desarrollo de WebApp</span>
              <span className="footer--links__item">Diseño web</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="footer--links">
              <span className="footer--links__title">Social</span>
              <span className="footer--links__item">Dribbble</span>
              <span className="footer--links__item">Instagram</span>
              <span className="footer--links__item">Twitter</span>
            </div>
          </div>
          <div className="col-xs-12">
            <span className="footer--copyright">
              &copy; 2021 Amadezing - Managed by{" "}
              <a href="https://stivmartinez.com">Stiven Martínez</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}