import { useSpring, animated } from "react-spring";
import useTranslation from "next-translate/useTranslation";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 26}px,${y / 26}px,0)`;
const trans3 = (x, y) => `translate3d(${x / -30}px,${y / -30}px,0)`;

export default function Hero() {
  const { t } = useTranslation();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <section id="hero">
      <div
        className="container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-5">
            <div className="hero--slides">
              <div className="hero--slides__text">
                <animated.div
                  className="span"
                  style={{
                    transform: props.xy.interpolate(trans3),
                  }}
                >
                  Hey.
                </animated.div>
              </div>
              <div className="hero--slides__one">
                <animated.div
                  className="slide"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/collection/2203755)`,
                    transform: props.xy.interpolate(trans1),
                  }}
                />
              </div>
              <div className="hero--slides__two">
                <animated.div
                  className="slide"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/collection/789734)`,
                    transform: props.xy.interpolate(trans2),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="hero--text">
              <h1 className="hero--text__title">{t("common:heroTitle")}</h1>
              <p className="hero--text__description">{t("common:heroDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
