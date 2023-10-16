import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const navRef = useRef(null);
  const [navIsFixed, setNavIsFixed] = useState(false);

  const fixedNav = () => {
    if (
      document.body.scrollTop >=
        navRef.current!.offsetHeight -
          (navRef.current!.offsetHeight * 30) / 100 ||
      document.documentElement.scrollTop >=
        navRef.current!.offsetHeight - (navRef.current!.offsetHeight * 30) / 100
    ) {
      setNavIsFixed(true);
    } else {
      setNavIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixedNav);

    return () => window.removeEventListener("scroll", fixedNav);
  }, []);
  return (
    <div
      ref={navRef}
      className={`${
        navIsFixed ? "fixed z-50 bg-white shadow-lg" : "absolute"
      } w-full py-4 px-16 flex flex-row items-center justify-between font-semibold`}
    >
      <p className="text-3xl text-gray-700">Book Haven</p>
      <div className="flex flex-row gap-4 text-xl text-gray-600">
        <a href="#top-rated">Top Rated</a>
        <a href="#popular">Popular</a>
      </div>
      <div className="flex flex-row items-center gap-1 text-gray-500 cursor-pointer">
        <span className="text-xl">Browse</span>
        <HiChevronDown className="text-2xl translate-y-0.5" />
      </div>
    </div>
  );
};

export default Navbar;
