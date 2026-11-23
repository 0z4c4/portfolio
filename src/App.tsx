import { lazy, Suspense, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const Proyectos = lazy(() => import("./pages/Proyectos"));
const Certificados = lazy(() => import("./pages/Certificados"));

function FadeRoute({ children }: { children: ReactNode }) {
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
        <Suspense fallback={<div className="route-loader">Cargando…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </FadeRoute>
      <Footer />
    </>
  );
}
