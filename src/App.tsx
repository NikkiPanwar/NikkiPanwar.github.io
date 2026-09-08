import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function PortfolioView() {
  const location = useLocation();

  useEffect(() => {
    const sectionName = location.pathname.replace(/^\//, "").toLowerCase();
    if (
      sectionName &&
      ["about", "experience", "projects", "contact", "what-i-do", "journey"].includes(sectionName)
    ) {
      const el = document.getElementById(sectionName);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (!sectionName && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return <Home />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<PortfolioView />} />
            <Route path="/about" element={<PortfolioView />} />
            <Route path="/experience" element={<PortfolioView />} />
            <Route path="/projects" element={<PortfolioView />} />
            <Route path="/contact" element={<PortfolioView />} />
            <Route path="*" element={<PortfolioView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;