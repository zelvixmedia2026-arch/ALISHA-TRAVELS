import { Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import TourPackages from "./pages/TourPackages";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <a
        className="floating-whatsapp"
        href="https://wa.me/918151843165"
        target="_blank"
        rel="noreferrer"
        aria-label="Book through WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

export default App;