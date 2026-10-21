import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import PmHighlight from "./components/PmHighlight";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-0 z-[100] -translate-y-16 rounded-[2px] bg-accent px-4 py-3 text-paper transition-transform focus:translate-y-4"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <PmHighlight />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
