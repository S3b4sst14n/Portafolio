import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
