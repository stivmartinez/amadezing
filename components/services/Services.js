import { useSpring } from "react-spring";
import useTranslation from "next-translate/useTranslation";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 26}px,${y / 26}px,0)`;
const trans3 = (x, y) => `translate3d(${x / -30}px,${y / -30}px,0)`;

export default function Services() {
  const { t } = useTranslation();

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
                <h3>{t("common:services")}</h3>
              </div>
              <div className="services--caption">
                <h2 className="services--caption__title">
                  {t("common:servicesTitle")}
                </h2>
                <p className="services--caption__desc">
                  {t("common:servicesDesc")}
                </p>
              </div>
              <div className="services--services">
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      {t("common:marketing")}
                    </span>
                    <h2 className="services--services__service--title">
                      {t("common:serviceLogoTitle")}
                    </h2>
                    <p className="services--services__service--desc">
                      {t("common:serviceLogoDesc")}
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      {t("common:product")}
                    </span>
                    <h2 className="services--services__service--title">
                      {t("common:serviceDesignTitle")}
                    </h2>
                    <p className="services--services__service--desc">
                      {t("common:serviceDesignDesc")}
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      {t("common:product")}
                    </span>
                    <h2 className="services--services__service--title">
                      {t("common:serviceDevelopTitle")}
                    </h2>
                    <p className="services--services__service--desc">
                      {t("common:serviceDevelopTitle")}
                    </p>
                  </div>
                </div>
                <div className="services--services__service">
                  <div className="services--services__service--card">
                    <span className="services--services__service--category">
                      {t("common:product")}
                    </span>
                    <h2 className="services--services__service--title">
                      {t("common:productStoresTitle")}
                    </h2>
                    <p className="services--services__service--desc">
                      {t("common:productStoresDesc")}
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
