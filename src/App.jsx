import Hero from "./sections/Hero";
import About from "./sections/About";
import Specializations from "./sections/Specializations";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Specializations />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
