import Carousel from "../components/Carousel";

const About = () => {
  return (
    <section className="container py-20 px-6">
      <h1 className="text-left text-5xl font-bold text-gradient mb-6">
        About
      </h1>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="basis-1/2">
          <p className="mb-2 text-justify">
            I am Velan, a passionate Artificial Intelligence Engineer and
            Mechanical Engineer with a strong background in Computational Fluid
            Dynamics (CFD) and AI-driven engineering solutions. My expertise
            lies in bridging the gap between traditional engineering principles
            and cutting-edge AI methodologies to drive innovation in mechanical
            design, simulation, and predictive modeling.
          </p>
          <p className="text-justify">
            Currently, I am pursuing my Master’s degree in Artificial
            Intelligence at Sheffield Hallam University, where I am exploring
            advanced machine learning, deep learning, and computer vision
            techniques. My research focuses on applying Physics-Informed Neural
            Networks (PINNs) in CFD, specifically in turbulence modeling and
            combustion simulations.
          </p>
        </div>
        <div className="basis-1/2">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default About;
