import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Lenis Smooth Scroll Configuration
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global GSAP Defaults for Cinematic Timing
    gsap.defaults({
      duration: 1.2,
      ease: "power4.out"
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0c] selection:bg-gold/30 selection:text-gold-dark transition-colors duration-500">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
