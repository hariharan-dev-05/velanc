import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useAnimationControls,
  useScroll,
} from "motion/react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

import logo from "../assets/velanc_ai.png";

import { FiDownload } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navPosition, setNavPosition] = useState("absolute bg-transparent");
  const navAnimationControl = useAnimationControls();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value < 50) {
      navAnimationControl.start({ y: 0 });
      setNavPosition("absolute bg-transparent");
    } else if (value > 50 && value < 200) {
      navAnimationControl.start({ y: -100 });
    } else {
      navAnimationControl.start({ y: 0 });
      setNavPosition("fixed bg-black shadow-md");
    }
  });

  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "" },
    { name: "Projects", path: "" },
    { name: "Skills", path: "" },
    { name: "Blogs", path: "https://blog.velanc.com/" },
    { name: "Contact", path: "" },
  ];
  return (
    <motion.nav
      className={clsx(
        "z-50 text-amber-50 text-lg top-0 left-0 right-0 w-full ",
        navPosition
      )}
      initial={{ y: 0 }}
      animate={navAnimationControl}
      transition={{ duration: 1.5, type: "spring", stiffness: 350 }}
    >
      <AnimatePresence>
        {openMenu && <MobileMenu links={links} />}
      </AnimatePresence>
      <div className="container flex items-center justify-between px-5 py-7">
        <div className="flex justify-between items-center gap-1 pr-2 ">
          <img src={logo} alt="velan_ai.png" className="h-12" />
          <p className="hidden tab:block font-bold text-center">
            AI Solutions for Automotive Design & Development
          </p>
        </div>
        <div className="flex gap-8">
          <ul className="hidden tab:flex gap-8 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <AnchorLink
                  href={link.path}
                  className="hover:text-primary transition-all"
                >
                  {link.name}
                </AnchorLink>
              </li>
            ))}
          </ul>
          <button className="px-6 py-2.5 bg-gradient rounded-full flex gap-1.5 justify-between items-center cursor-pointer">
            CV <FiDownload />
          </button>
          <button
            onClick={() => setOpenMenu((pv) => !pv)}
            className="tab:hidden"
          >
            <CgMenuRight className="size-10" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

const MobileMenu = ({ links }) => {
  const parentVarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const childrenVarients = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial={{ height: 0, rotateX: 90 }}
      animate={{ height: "100vh", rotateX: 0 }}
      exit={{ height: 0, rotateX: 90 }}
      transition={{ duration: 0.5 }}
      className="absolute tab:hidden top-24 left-0 w-full bg-secondary h-screen"
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={parentVarients}
        className="flex flex-col gap-7 items-start p-7 text-3xl"
      >
        {links.map((link, index) => (
          <motion.li
            variants={childrenVarients}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            key={index}
          >
            <AnchorLink href={link.path}>{link.name}</AnchorLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.array,
};
