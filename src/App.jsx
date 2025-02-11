import Hero from "./sections/Hero";
import About from "./sections/About";
import Specializations from "./sections/Specializations";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog";
import Testimonials from "./sections/Testimonials";
import Companies from "./sections/companies";
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
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Testimonials />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
