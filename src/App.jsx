import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#F7A8C4] min-h-screen"> 
      <Navbar />
      
      <Hero />
      
      <Education />
      
      <Experience />

      <Projects />

      <Footer />
    </main>
  );
}

export default App;