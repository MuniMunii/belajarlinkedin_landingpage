import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoBelajar from "../assets/logo1.png";
type IsActiveNav = "" | "classes" | "about" | "contact";
export default function Navbar() {
  const [changeBGWhenInTop, setChangeBGWhenInTop] = useState(false);
  const [isActive, setIsActive] = useState<IsActiveNav>("");
  const { scrollY } = useScroll();
  const navbarRef = useRef(0);
  const location = useLocation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest <= 30) {
      setChangeBGWhenInTop(false);
    } else {
      setChangeBGWhenInTop(true);
    }
    navbarRef.current = latest;
  });
  // useEffect animation active Link
  useEffect(() => {
    const extractPath = location.pathname.split("/");
    const hash = location.hash.replace("#", "");
    if (hash) {
      setIsActive(hash as IsActiveNav);
    } else if (extractPath[extractPath.length - 1] as IsActiveNav) {
      setIsActive(extractPath[extractPath.length - 1] as IsActiveNav);
    } else {
      setIsActive("");
    }
  }, [location.pathname, location.hash]);
  return (
    <motion.div
      initial={{ backgroundColor: "", color: "#000" }}
      animate={{
        backgroundColor: changeBGWhenInTop ? "#fff" : "",
        color: changeBGWhenInTop ? "" : "#828282",
      }}
      transition={{
        opacity: { ease: "easeInOut", duration: 0.45 },
        backgroundColor: { ease: "easeInOut", duration: 0.45 },
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`z-50 w-full py-3 px-10 fixed top-0 left-0 max-sm:flex-col flex-row flex justify-between items-center gap-3`}
    >
      <Link
      to='/'
        className={`transition duration-200 w-40 h-16 flex items-center justify-center ${
          changeBGWhenInTop ? "" : "filter brightness-0 invert-[1]"
        }`}
      >
        <img src={LogoBelajar} alt="logo" className="w-full" />
      </Link>
      <div className="flex gap-5 font-semibold">
        <Link
          className={`${
            isActive === ""
              ? ` text-blue-400`
              : `${changeBGWhenInTop ? " text-neutral-400" : "text-white"}`
          }`}
          to={"/"}
        >
          Beranda
        </Link>
        <Link
          className={`text-black ${
            isActive === "classes"
              ? `text-blue-400`
              : `${changeBGWhenInTop ? " text-neutral-400" : "text-white"}`
          }`}
          to={"#classes"}
        >
          Classes
        </Link>
        <Link
          className={`${
            isActive === "about"
              ? ` text-blue-400`
              : `${changeBGWhenInTop ? " text-neutral-400" : "text-white"}`
          }`}
          to={"#about"}
        >
          About
        </Link>
        <Link
          className={`${
            isActive === "contact"
              ? ` text-blue-400`
              : `${changeBGWhenInTop ? " text-neutral-400" : "text-white"}`
          }`}
          to={"#contact"}
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
}
