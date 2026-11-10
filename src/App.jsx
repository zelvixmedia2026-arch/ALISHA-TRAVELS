import { Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog/mangalore-to-bekal-taxi-service"
            element={<Blog />}
          />
        </Routes>
      </main>

      <Footer />

      <a
        className="floating-whatsapp"
        href="https://wa.me/918151843165"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book through WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

export default App;