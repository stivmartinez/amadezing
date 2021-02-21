import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 26}px,${y / 26}px,0)`;
const trans3 = (x, y) => `translate3d(${x / -30}px,${y / -30}px,0)`;

export default function Services() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <section id="services">
      <div className="services">
        <div
          className="container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <div className="row middle-xs between-xs">
            <div className="col-xs-12">
              <div class="services--title">
                <h3>Servicios</h3>
              </div>
              <div className="services--caption">
                <h2 className="services--caption__title">
                  Creamos experiencias únicas
                </h2>
                <p className="services--caption__desc">
                  Ramotion is a team of multidisciplinary digital product
                  experts focused on branding, UI/UX design, mobile, and web
                  development.
                </p>
              </div>
              <div className="services--services">
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      Marketing
                    </span>
                    <h2 className="services--services__service--title">
                      Diseño de marca (Logo)
                    </h2>
                    <p className="services--services__service--desc">
                      El primer paso para tener un negocio exitoso es una marca
                      recordable.
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      Producto
                    </span>
                    <h2 className="services--services__service--title">
                      Diseño UI / UX
                    </h2>
                    <p className="services--services__service--desc">
                      El primer paso para tener un negocio exitoso es una marca
                      recordable.
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      Producto
                    </span>
                    <h2 className="services--services__service--title">
                      Desarrollo WebApp
                    </h2>
                    <p className="services--services__service--desc">
                      El primer paso para tener un negocio exitoso es una marca
                      recordable.
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      Marketing
                    </span>
                    <h2 className="services--services__service--title">
                      Diseño sitio web
                    </h2>
                    <p className="services--services__service--desc">
                      El primer paso para tener un negocio exitoso es una marca
                      recordable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
