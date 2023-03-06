
import Navbar from "@/components/Navbar";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";
import Banner from "@/components/Banner";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import CurrentLerning from "@/components/CurrentLearning";
import Footer from "@/components/Footer";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});
export default function Home() {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Banner/>
          <Projects/>
          <Skills/>
          <CurrentLerning/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </I18nextProvider>
    </>
  );
}
