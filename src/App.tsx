import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Proyectos from "./pages/Proyectos";
import Certificados from "./pages/Certificados";
import SobreMi from "./pages/SobreMi";

function FadeRoute({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <FadeRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </FadeRoute>
      <Footer />
    </>
  );
}
