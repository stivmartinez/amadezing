import { useSpring, animated } from "react-spring";
import useTranslation from "next-translate/useTranslation";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 26}px,${y / 26}px,0)`;
const trans3 = (x, y) => `translate3d(${x / -30}px,${y / -30}px,0)`;

export default function Work() {
  const { t } = useTranslation();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <>
      <div class="work--title">
        <h3>{t("common:workTitle")}</h3>
      </div>
      <section id="work">
        <div className="work">
          <div
            className="container"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xy: calc(x, y) })
            }
          >
            <div className="row middle-xs between-xs">
              <div className="col-xs-12 col-md-5">
                <div className="work--caption">
                  <img
                    src="/images/dummy/gatoholic.svg"
                    className="work--caption__logo"
                  />
                  <h4 className="work--caption__title">
                    Gato lovers con estilo
                  </h4>
                  <p className="work--caption__desc">
                    GatoHolic es una marca Colombiana de ropa juvenil unisex con
                    mucho estilo.
                  </p>
                  <div className="work--caption__metas">
                    <span>Branding</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <animated.div
                  class="work--thumbs"
                  style={{
                    transform: props.xy.interpolate(trans2),
                  }}
                >
                  <div
                    className="work--thumbs__thumb"
                    style={{
                      backgroundImage: `url(/images/dummy/gatoholic1.png)`,
                    }}
                  ></div>
                </animated.div>
                <div
                  className="work--bg"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/collection/3582397/1600x900)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
