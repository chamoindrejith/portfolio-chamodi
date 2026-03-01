"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { ArrowRight, Sun, X, TextAlignEnd } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <nav className={`w-full grid-cols-6 fixed flex px-5 lg:px-10 xl:px-[10%] py-6 justify-between items-center z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-md" : ""}`}>
        <Link href="">
          <Image
            src={assets.logo}
            width={200}
            className="max-w-full cursor-pointer mr-14"
            alt=""
          />
        </Link>

        <ul className="hidden md:flex col-span-3 items-center gap-10 lg:gap-10 rounded-full py-3">
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link className="font-sans" href="#top">
              Home
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link href="#about">Who I Am</Link>
          </li>
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link href="#education">Education</Link>
          </li>
          <li className="hover:underline hover:underline-offset-20 hover:decoration-orange-500 hover:decoration-4 hover:transition-all hover:duration-300">
            <Link href="#volunteer">Volunteer</Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button className=" flex w-10 h-10 bg-transparent hover:bg-transparent">
            <Sun className="cursor-pointer text-gray-900" size={40} />
          </Button>
          <div className="hidden md:flex ml-5 px-4 md:px-8 py-2.5 border-gray-500 rounded-full border hover:bg-gray-800 hover:text-white hover:border-white hover:transition-all hover:duration-300">
            <Link href="#contact" className="flex items-center gap-3">
              <b>Contact</b> <ArrowRight className="cursor-pointer" size={16} />
            </Link>
          </div>
          <Button
            className="md:hidden w-10 h-10 bg-transparent hover:bg-transparent"
            onClick={openMenu}
          >
            <TextAlignEnd className="cursor-pointer text-gray-900" size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 bg-gray-950  text-yellow-50 transition-all duration-300"
        >
          <div className="absolute px-5 py-3 right-4 top-7" onClick={closeMenu}>
            <X size={16} className="cursor-pointer" />
          </div>
          <li onClick={closeMenu}>
            <Link className="font-sans" href="#top">
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#about">Who I Am</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#skills">Skills</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#education">Education</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
