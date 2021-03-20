import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

import Clients from "../components/clients/Clients";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Work from "../components/work/Work";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <NextSeo title={t("common:seoTitle")} description={t("common:seoDesc")} />
      <Header />
      <Hero />
      <Work />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}
