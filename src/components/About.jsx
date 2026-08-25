import React from "react";
import Link from "next/link";
import { Download, Award } from "lucide-react";
import { assets } from "../../assets/assets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] scroll-mt-20 h-full py-20 mb-20 flex flex-col items-center justify-center bg-gray-50/70 dark:bg-gray-900/50"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">
        Introduction
      </h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        Who <span className="text-orange-500">I Am</span>
      </h2>

      <div className="max-w-5xl mx-auto">
        <p className="text-center mt-10 text-gray-600 dark:text-gray-300 md:text-lg md:leading-8">
          I am currently appointed as a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Temporary Demonstrator in Information &amp; Communication Technology
          </span>{" "}
          in the Department of Information &amp; Communication Technology,
          Faculty of Technological Studies, University of Vavuniya, effective
          from 24 August 2026. Earlier, I worked as a Software Engineer Intern
          in Software Engineering and Project Management at E Zone Technologies
          (Pvt) Ltd, where I developed production web solutions and supported
          project coordination and client requirements across technology-led
          initiatives.
        </p>
        <p className="text-center mt-6 text-gray-600 dark:text-gray-300 md:text-lg md:leading-8">
          I hold a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            BSc (Hons) in Information Technology
          </span>{" "}
          from the University of Vavuniya, with First Class honours and a GPA of
          3.810/4.00, and My academic and professional journey has been complemented by a
          Diploma in Human Resource Management from IMBS Green Campus, which has
          enhanced my understanding of organizational dynamics and team
          management.
        </p>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-300 md:text-lg md:leading-8">
           I enjoy building,
          understanding, and improving technology whether that means writing
          software, designing experiences, coordinating a project, or exploring
          a research problem.
        </p>
      </div>

      <div className="w-full mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          size="sm"
          className="mx-auto w-full max-w-sm bg-gray-50/20 dark:bg-gray-800/50 dark:border-gray-700"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-gray-900 dark:text-gray-100">
              <Award className="text-yellow-500" size={24} />
              University Prize – Level 3
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-lg text-center text-gray-700 dark:text-gray-300">
              Best performance in BSc (Hons) in Information Technology,
              University of Jaffna
            </p>
          </CardContent>
        </Card>

        <Card
          size="sm"
          className="mx-auto w-full max-w-sm bg-gray-50/20 dark:bg-gray-800/50 dark:border-gray-700"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-gray-900 dark:text-gray-100">
              <Award className="text-yellow-500" size={24} />
              Faculty Award – Level 1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-lg text-center text-gray-700 dark:text-gray-300">
              Best overall performance in BSc in Information Technology,
              University of Vavuniya
            </p>
          </CardContent>
        </Card>

        <Card
          size="sm"
          className="mx-auto w-full max-w-sm bg-gray-50/20 dark:bg-gray-800/50 dark:border-gray-700"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-gray-900 dark:text-gray-100">
              <Award className="text-yellow-500" size={24} />
              Special Award - 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-lg text-center text-gray-700 dark:text-gray-300">
              Most Dedicated Sports Council Member of the Year, University of
              Vavuniya
            </p>
          </CardContent>
        </Card>

        <Card
          size="sm"
          className="mx-auto w-full max-w-sm bg-gray-50/20 dark:bg-gray-800/50 dark:border-gray-700"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-gray-900 dark:text-gray-100">
              <Award className="text-yellow-500" size={24} />
              University of Vavuniya Half Colours - 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-lg text-center text-gray-700 dark:text-gray-300">
              Badminton
            </p>
          </CardContent>
        </Card>

       
      </div>

      
    </div>
  );
};

export default About;
