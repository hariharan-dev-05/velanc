import { motion } from "motion/react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Hero = () => {

  const socialMedias = [
    {
      icon: <FaGithub className="size-5" />,
      link: "",
    },
    {
      icon: <FaXTwitter className="size-5" />,
      link: "",
    },
    {
      icon: <FaLinkedinIn className="size-5" />,
      link: "",
    },
    {
      icon: <FaInstagram className="size-5" />,
      link: "",
    },
  ];
  return (
    <section className="container py-5 md:py-20">
      {/* Content */}

      <div className="flex px-3 md:px-6 gap-10 justify-between items-center flex-col md:flex-row">
        {/* Left */}
        <div className="basis-1/2 flex flex-col gap-4 tab:gap-7">
          <h3 className="text-xl sm:text-3xl/normal tab:text-4xl font-semibold">
            Hi , I am Velan
          </h3>
          <h1 className="text-3xl sm:text-5xl/tight tab:text-7xl/tight font-extrabold text-gradient">
            CFD Engineer + AI/ML Enthusiast
          </h1>
          <h5 className="text-lg md:text-xl">
            I love integrating AI applications in Mechanical Engineering
          </h5>

          <div className="hidden md:flex gap-10 items-center">
            <button className="px-6 py-2.5 rounded-full flex gap-1.5 justify-between items-center bg-transparent border border-primary hover:bg-primary/80 transition-colors duration-300 cursor-pointer text-primary hover:border-transparent hover:text-white">
              <span>Download CV</span> <FiDownload />
            </button>
            {socialMedias.map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className=" border border-primary rounded-full p-2 icon-after text-primary hover:text-white/80 transition-all duration-150"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="basis-1/2 flex gap-5 flex-col justify-center items-center w-full">
          <motion.img
            initial={{ rotate: 6 }}
            whileHover={{ rotate: 0 }}
            whileTap={{ rotate: 0 }}
            className="rounded-3xl w-4/5 md:w-fit border-2 border-primary/50 hover:border-primary"
            src="https://placehold.co/380x450"
            alt="valenc"
          />

          <button className="self-start mt-6 flex md:hidden px-6 py-2.5 rounded-full gap-1.5 justify-between items-center bg-transparent border border-primary active:bg-primary/80 transition-colors duration-300 cursor-pointer text-primary active:border-transparent active:text-white">
            <span>Download CV</span> <FiDownload />
          </button>
          <div className="self-start flex gap-5 md:hidden items-center">
            {socialMedias.map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className=" border border-primary rounded-full p-2 icon-after text-primary hover:text-white/80 transition-all duration-150"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
