"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navLinks from "@/settings/navLinks";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navHeight = document.querySelector("nav")!.offsetHeight;

      const currentSection = navLinks.find((item: NavLink) => {
        if (item.href === "#") {
          // Special case for homepage
          return scrollY < navHeight;
        } else {
          const sectionId = item.href.substring(1);
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.offsetTop - navHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            return scrollY >= sectionTop && scrollY < sectionBottom;
          }
        }
        return false;
      });

      if (currentSection && currentSection.href !== activeLink) {
        setActiveLink(currentSection.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <nav className="bg-gradient-to-r from-oceanblue to-slate-700 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center h-20">
            <h3 className="text-white text-2xl lg:text-4xl font-extrabold border-b-2 border-limegreen p-2">
              Maths Tuition
            </h3>
          </Link>
          <div className="hidden sm:ml-6 md:block">
            <div className="flex space-x-4">
              {navLinks.map((item: NavLink) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-bold uppercase text-white h-full flex items-center px-4 hover:border-b-2 ${
                    activeLink === item.href
                      ? "border-b-2 border-limegreen"
                      : ""
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="absolute top-2 right-2 flex items-center md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
            >
              <FaBars className="block h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gradient-to-r from-oceanblue to-slate-700 z-50 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div className="flex justify-center items-center h-full">
          {/* Mobile menu button */}
          <div className="absolute top-2 right-2 flex items-center md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
            >
              <FaTimes className="block" size={50} aria-hidden="true" />
            </button>
          </div>
          <div className="p-4 w-full flex flex-col items-center justify-center space-y-6 sm:space-y-10">
            {navLinks.map((item: NavLink) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md text-3xl sm:text-5xl font-bold uppercase text-white px-4 w-full text-center"
                onClick={() => {
                  setActiveLink(item.href);
                  setOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
