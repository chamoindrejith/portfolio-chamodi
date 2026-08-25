import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

const experience = [
  {
    role: "Temporary Demonstrator in Information & Communication Technology",
    organization: "Department of Information & Communication Technology, Faculty of Technological Studies, University of Vavuniya",
    period: "Aug 2026 - present",
    type: "Current Position",
    isCurrent: true,
    details: [
      "Serving in the Department of Information & Communication Technology, Faculty of Technological Studies, University of Vavuniya.",
      "Contributing to academic and ICT-related activities within the department.",
    ],
  },
  {
    role: "Software Engineer Intern (Software Engineering & Project Management)",
    organization: "E Zone Technologies (Pvt) Ltd - IT Solutions Department",
    period: "Feb 2026 – Jun 2026",
    type: "Previous Experience",
    isCurrent: false,
    details: [
      "Authored 15+ proposals and quotations for POS, parking, LMS, gold-loan, and CCTV systems.",
      "Managed projects with ClickUp, coordinating developers, timelines, bugs, reviews, and client requirements.",
      "Delivered 3 production websites using React, Next.js, Vite, and shadcn/ui, from requirements through deployment.",
      "Deployed a Laravel self-printing kiosk with admin and customer portals and printer integration.",
    ],
    technologies: ["React", "Next.js", "Vite", "shadcn/ui", "Laravel", "ClickUp", "GitHub", "PHP", "MySQL", "MongoDB"],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">
        Experience
      </h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        Career <span className="text-orange-500">Progression</span>
      </h2>

      <div className="w-full mt-20 flex flex-col items-center justify-center gap-6">
        {experience.map((item, index) => (
          <Card
            key={index}
            size="md"
            className={`w-full max-w-5xl bg-gray-50/70 dark:bg-gray-800/50 dark:border-gray-700 shadow-orange-100 transition-all duration-300 ${
              item.isCurrent
                ? "border-orange-200 dark:border-orange-500/50"
                : "hover:translate-y-[-4px] hover:shadow-orange-100"
            }`}
          >
            <CardHeader className="gap-3">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/10">
                    {item.isCurrent ? (
                      <Sparkles size={18} />
                    ) : (
                      <BriefcaseBusiness size={18} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-xl md:text-2xl text-gray-900 dark:text-gray-100">
                      {item.role}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base text-gray-700 dark:text-gray-300">
                      {item.organization}
                    </CardDescription>
                  </div>
                </div>

                
              </div>

              <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {item.period}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {!item.isCurrent && item.technologies && (
                <div className="pt-2">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                    Tools & Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-800 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
