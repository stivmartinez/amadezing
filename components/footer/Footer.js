import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="footer">
      <div class="footer--cta">
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-12 col-md-8">
              <h4 class="footer--cta__title">{t("common:ctaTitle")}</h4>
              <span class="footer--cta__email">
                <span>👋</span>{" "}
                <a href="mailto:hello@amadezing.com">hello@amadezing.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="footer--links">
              <span className="footer--links__title">
                {t("common:footerFrom")}
              </span>
              <span className="footer--links__item">Medellín, Colombia</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="footer--links">
              <span className="footer--links__title">
                {t("common:services")}
              </span>
              <span className="footer--links__item">
                {t("common:serviceLogoTitle")}
              </span>
              <span className="footer--links__item">
                {t("common:serviceDesignTitle")}
              </span>
              <span className="footer--links__item">
                {t("common:serviceDevelopTitle")}
              </span>
              <span className="footer--links__item">
                {t("common:productStoresTitle")}
              </span>
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
              &copy; 2021 Amadezing - {t("common:footerManagedBy")}{" "}
              <a href="https://stivmartinez.com">Stiven Martínez</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
