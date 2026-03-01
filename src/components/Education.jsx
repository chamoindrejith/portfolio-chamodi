import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Vavuniya",
    degree: "BSc. (Hons) in Information Technology",
    status: "Reading",
    period: "2022 – Present",
  },
  {
    institution: "IMBS Green University",
    degree: "Diploma in Human Resource Management",
    status: "Reading",
    period: "2025 – Present",
  },
  {
    institution: "University of Colombo School of Computing",
    degree: "Higher National Diploma (HND) in Information Technology",
    status: "Completed",
    period: "2021 – 2023",
  },
  {
    institution: "Esoft Metro Campus",
    degree: "Diploma in English",
    status: "Completed",
    period: "2020 – 2021",
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">Education</h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        Where <span className="text-orange-500"> I </span> learnt
      </h2>

      <div className="w-full mt-20 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((category, index) => {
            const IconComponent = GraduationCap;
            return (
              <Card
                key={index}
                size="sm"
                className="bg-gray-50/70 dark:bg-gray-800/50 dark:border-gray-700 mx-auto w-11/12 max-w-sm hover:translate-1 hover:shadow-orange-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex gap-4 text-gray-900 dark:text-gray-100">
                    <IconComponent className="text-orange-500" size={24} />
                    {category.institution}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 text-gray-700 dark:text-gray-300">{category.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{category.degree}</p>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">{category.status}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
