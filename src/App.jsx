import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Preloader from './components/Preloader';

// React Router's client-side navigation doesn't auto-scroll to a #hash
// the way a real page load does. This restores that behavior for links
// like "Back to services" or the navbar/footer's /#about, /#services, etc.
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target route has actually rendered first
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        // Element not mounted yet on first paint (e.g. navigating from
        // another route) — retry a couple of times.
        let attempts = 0;
        const retry = setInterval(() => {
          const target = document.getElementById(id);
          attempts += 1;
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            clearInterval(retry);
          } else if (attempts > 20) {
            clearInterval(retry);
          }
        }, 50);
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="portfolio-entrance">
          <Hero />
        </div>
        <AboutMe />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Preloader />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;