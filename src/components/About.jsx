import React from "react";
import Link from "next/link";
import { Download, Award } from "lucide-react";
import { assets } from "../../assets/assets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  return (
    <div
      id="about"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] scroll-mt-20 h-full md:h-screen py-20 mb-20 flex flex-col items-center justify-center bg-gray-50/70 dark:bg-gray-900/50"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">Introduction</h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">Who <span className="text-orange-500"> I</span> Am</h2>

      <div>
        <div>
          <p className="text-center mt-10 text-gray-500 dark:text-gray-400 md:text-lg md:leading-8">
            Creative and technically proficient Software Engineer with a unique
            blend of frontend development and UI/UX design expertise. I
            specialize in building intuitive, responsive, and user-centered
            digital experiences that bridge design and development seamlessly.
            Proficient in modern web technologies and dedicated to creating
            high-performance applications with strong emphasis on user research,
            design thinking, and accessibility. <br /> Passionate about
            delivering impactful projects while continuously advancing expertise
            in software engineering and user experience design.
          </p>
        </div>
      </div>

      <div className="w-full mt-10">
        <Card size="sm" className="mx-auto w-full max-w-sm bg-gray-50/20 dark:bg-gray-800/50 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-gray-900 dark:text-gray-100">
              <Award className="text-yellow-500" size={24} />
              Faculty Award – Level 1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-lg text-center text-gray-700 dark:text-gray-300">
              For the best overall performance in BSc. in Information Technology
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="w-fit mx-auto mt-12 flex px-8 py-2.5 border-gray-500 dark:border-gray-400 rounded-full border text-gray-900 dark:text-gray-100 hover:bg-gray-800 hover:text-white hover:border-white hover:transition-all hover:duration-300">
        <Link
          href={assets.Chamodi_Indrejith_Resume}
          download={true}
          className="flex items-center gap-3"
        >
          <b>Resume</b> <Download className="cursor-pointer" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default About;
