'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { ArrowRight, FolderKanban, MapPin } from "lucide-react";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen  flex flex-col items-center justify-center relative overflow-hidden">
      {/* Orange cursor spark effect */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-8 h-8 bg-orange-500 rounded-full blur-xl opacity-60"></div>
      </div>
      <div className="w-11/12 max-w-3xl text-center">
        <Image
          src={assets.Chamodi}
          alt=""
          className="rounded-full w-48 h-48 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-center md:text-7xl mb-5">
          Chamodi Sathsarani <span className="text-orange-500">Indrejith</span>
        </h1>
        <h3 className="text-lg text-center text-gray-500 mb-4 md:text-3xl">
          Fullstack Developer | UI/UX Designer | Project Manager
        </h3>
        <h4 className="text text-center text-gray-400 mb-6 md:text-xl gap-3">
          <MapPin className="inline-block mr-2" size={16} />
          Anuradhapura, Sri Lanka
        </h4>
        <div className="flex gap-2 items-center justify-center md:gap-6 mb-3">
          <div className="text-xs px-4 md:px-8 py-2.5 md:text-lg md:flex border-gray-500 rounded-full border hover:bg-gray-800 hover:text-white hover:border-white hover:transition-all hover:duration-300">
            <Link
              href="#"
              className="flex items-center gap-3" 
            >
             <b>Contact</b> <ArrowRight className="cursor-pointer" size={16} />
            </Link>
          </div>
          
          <div className="md:flex text-xs px-4 md:px-8 py-2.5 md:text-lg  border-gray-500 rounded-full border hover:bg-gray-800 hover:text-white hover:border-white hover:transition-all hover:duration-300">
            <Link
              href="#projects" 
              className="flex items-center gap-3"
            >
              <b>Projects</b><FolderKanban className="cursor-pointer" size={16} /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
