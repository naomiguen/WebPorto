import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Writings from "./sections/Writings";
import Footer from "./components/Footer";
import GalleryDetail from "./sections/GalleryDetail";
import LanguageProvider from "./i18n/LanguageProvider";

function HomePage() {
  return (
    <main className="bg-[#F7A8C4] min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Writings />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/:slug" element={<GalleryDetail />} />
        {/* Alamat yang tidak dikenal kembali ke beranda (vercel.json mengarahkan semua alamat ke index.html) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;