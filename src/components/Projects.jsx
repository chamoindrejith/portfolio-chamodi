import { Figma, Github, ArrowUpRight } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { Button } from "./ui/button";

const projects = [
  {
    title: "ElderCare Connect",
    description:
      "Designed and developed the complete UI and frontend of a Progressive Web Application supporting elderly individuals living alone. Enhanced safety, health monitoring, and social engagement through intuitive interface design.",
    tech: ["React", "PWA", "User-Centered Design"],
    link: "https://github.com/chamoindrejith/ElderCareConnect",
    icon: Github,
  },
  {
    title: "UOV Student Care App",
    description:
      "Developed a React Native mobile application for University of Vavuniya students with secure authentication and intuitive navigation for accessing course details, subject marks, and grade information.",
    tech: ["React Native", "Mobile UX", "Authentication"],
    link: "https://github.com/chamoindrejith/StudentCareApp",
    icon: Github,
  },
  {
    title: "Online Flower Shop",
    description:
      "Built a fully functional e-commerce frontend with modular, reusable React components and efficient state management. Implemented responsive design patterns for optimal experience across all devices.",
    tech: ["React", "E-commerce", "State Management"],
    link: "https://github.com/chamoindrejith/online-flower-shop-e-commerce-application",
    icon: Github,
  },
  {
    title: "HealthPulse Sri Lanka",
    description:
      "Conceptualized and designed a community-centric healthcare platform with emphasis on accessibility standards. Conducted comprehensive user research and developed complete design deliverables including wireframes and prototypes.",
    tech: ["Figma", "User Research", "Accessibility"],
    link: "https://www.figma.com/design/0pjA7LuMbphItF4OUwOXew/HealthPulse-Sri-Lanka?node-id=0-1&t=Kq03mUBZgZEdtiLI-1",
    icon: Figma,
  },
  {
    title: "Unifit Hub",
    description:
      "Led the complete UI/UX design process for a university gymnasium management system. Developed detailed user journey maps and designed intuitive interfaces for students and administrative staff.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    link: "https://www.figma.com/design/2Hmmku3q6p5M3mMSxzDz9K/UniFit-Hub?node-id=0-1&t=mSOYIn1YxYa5DtNp-1",
    icon: Figma,
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center  bg-gray-50/70 dark:bg-gray-900/50"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">Featured Projects</h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        My <span className="text-orange-500">Portfolio</span>
      </h2>
      <div className="w-full mt-20 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                size="sm"
                className="bg-gray-50/70 dark:bg-gray-800/50 dark:border-gray-700 mx-auto w-11/12 max-w-sm hover:translate-1 hover:shadow-orange-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex gap-4 text-gray-900 dark:text-gray-100">
                    <IconComponent className="text-orange-500" size={24} />
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 text-gray-700 dark:text-gray-300">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex-1 flex-wrap gap-2">
                    {" "}
                    {category.tech.map((skill, idx) => (
                      <div
                        className="inline-flex px-6 py-2 m-2 shadow-md rounded-full text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-orange-500 hover:transition-all hover:duration-300"
                        key={idx}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="mt-4 w-full hover:bg-orange-500 hover:text-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" href={category.link}> 
                    View Project <ArrowUpRight/>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
