import { FiDownload } from "react-icons/fi";
import logo from "../assets/velanc_ai.png";

const Navbar = () => {
  return (
    <div>
      <nav className="container flex items-center justify-between py-7 text-amber-50 text-[18px]">
        <div className="flex justify-between items-center gap-1 pr-2">
          <img src={logo} alt="velan_ai.png" className="h-12" />
          <p className="font-bold text-center">
            AI Solutions for Automotive
            {/* <br /> */}
            Design & Development
          </p>
        </div>
        <div className="flex gap-8">
          <ul className="flex gap-8 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="https://blog.velanc.com/" target="_blank">
                Blogs
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <button className="px-6 py-2.5 bg-[var(--primary-color)] rounded-full flex gap-1.5 justify-between items-center cursor-pointer">
            CV <FiDownload />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
