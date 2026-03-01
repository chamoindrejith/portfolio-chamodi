import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Palette,
  Brain,
  Users,
  Database,
  GitBranch,
  Crown,
  Figma,
  FileText,
  Hourglass,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["WordPress", "React", "Next.js", "React Native", "Shadcn/UI"],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "MySQL", "MongoDB", "Laravel(Learning)"],
  },
  {
    icon: Figma,
    title: "Design & Prototyping",
    skills: ["Figma", "Canva"],
  },
  {
    icon: GitBranch,
    title: "Tools & Workflow",
    skills: ["Git", "GitHub"],
  },
  {
    icon: Crown,
    title: "Leadership & Management",
    skills: ["Program Management", "Team Leadership"],
  },
  {
    icon: Users,
    title: "Communication & Collaboration",
    skills: ["Teamwork", "Bilingual Communication"],
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: [
      "Design Thinking",
      "User-Centered Design",
      "User Research",
      "Wireframing",
      "High-Fidelity Prototyping",
      "Accessibility",
    ],
  },
  {
    icon: Brain,
    title: "Problem Solving & Creativity",
    skills: [
      "Creative Thinking",
      "Critical Thinking",
      "Collaborative Problem Solving",
      "Attention to Detail",
    ],
  },

  {
    icon: FileText,
    title: "Professional Practices",
    skills: [
      "Technical Documentation",
      "Customer Relationship Management (CRM)",
    ],
  },
  {
    icon: Hourglass,
    title: "Productivity & Adaptability",
    skills: ["Time Management", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-20 py-16 md:py-20 scroll-mt-20 items-center justify-center"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">Skills & Strengths</h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        What I Bring <span className="text-orange-500">to the Table</span>
      </h2>

      <div className="w-full mt-20 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                size="sm"
                className="bg-gray-50/70 dark:bg-gray-800/50 dark:border-gray-700 mx-auto w-11/12 max-w-smhover:translate-1 hover:shadow-orange-100 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex gap-4 text-gray-900 dark:text-gray-100">
                    <IconComponent className="text-orange-500" size={24} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex-1 flex-wrap gap-2">
                    {" "}
                    {category.skills.map((skill, idx) => (
                      <div
                        className="inline-flex px-6 py-2 m-2 shadow-md rounded-full text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-orange-500 hover:transition-all hover:duration-300"
                        key={idx}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
