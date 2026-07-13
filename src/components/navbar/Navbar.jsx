import { useEffect, useState } from "react";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "glass border-b border-white/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="container-custom flex h-20 items-center justify-between">

        <div className="select-none">
          <h1 className="text-xl font-extrabold tracking-tight">
            IFB
            <span className="text-blue-600">.</span>
            <span className="text-blue-600">
              debuggers
            </span>
          </h1>
        </div>

        <NavDesktop />

        <NavMobile />

      </div>
    </header>
  );
}