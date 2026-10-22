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
        className="fixed left-4 top-0 z-[100] -translate-y-16 border-neo border-ink bg-pill px-4 py-3 font-bold text-[#0a0a0a] transition-transform focus:translate-y-4"
      >
        Skip to content
      </a>

      <div className="min-h-screen px-4 pb-16 pt-5 md:px-6 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-6xl rounded border-neo border-ink bg-surface p-5 shadow-neo-lg md:p-8">
          <Nav />

          <main id="main">
            <Hero />
            <About />
            <Experience />
            <PmHighlight />
            <Leadership />
            <Certifications />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
