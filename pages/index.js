import { NextSeo } from "next-seo";

import Clients from "../components/clients/Clients";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Work from "../components/work/Work";

export default function HomePage() {
  return (
    <div>
      <NextSeo
        title="Amadezing | Diseño Web, UI / UX, Marcas y WebApps desde Medellín."
        description="Diseño Web, UI / UX, Marcas y WebApps desde Medellín."
      />
      <Header />
      <Hero />
      <Work />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}
