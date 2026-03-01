import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full mt-10 py-4 md:py-6 items-center justify-center flex flex-col gap-4  bg-gray-50/70 shadow-[0_-6px_24px_-16px_rgba(0,0,0,0.45)]">
      <div className="text-justify text-sm text-gray-500">
        <p>&copy; 2026 Chamodi Indrejith. All rights reserved.</p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        {/* <Link
          href=""
          target="_blank"
        >
          <Linkedin href="https://www.linkedin.com/in/chamodi-indrejith/" size={24} className="text-gray-500 hover:text-orange-600" />
        </Link>
        <Link
          href="https://wwww.github.com/chamoindrejith"
          target="_blank"
        >
          <Github size={24} className="text-gray-500 hover:text-orange-600" />
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;
