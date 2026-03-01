import React from "react";
import { CircleDot } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const volunteerExperience = [
  {
    role: "Chair",
    organization:
      "IEEE WIE Student Branch Affinity Group, University of Vavuniya",
    period: "Oct 2024 – Oct 2025",
  },
  {
    role: "Editor",
    organization: "Sports Council, University of Vavuniya",
    period: "Jan 2025 – Jan 2026",
  },
  {
    role: "Vice Chair – Program",
    organization:
      "IEEE Sri Lanka Section – Challenge Sphere 2024 National Project",
    period: "May 2024 – Oct 2024",
  },
  {
    role: "Vice Chair",
    organization:
      "IEEE WIE Student Branch Affinity Group, University of Vavuniya",
    period: "Oct 2023 – Oct 2024",
  },
  {
    role: "Program and Secretary Coordinator",
    organization: "IEEE SLSAC – Collaborative Activities Sub Committee",
    period: "Mar 2024 – Mar 2025",
  },
  {
    role: "Ambassador",
    organization:
      "G17 University Ambassadors Consortium – University of Vavuniya",
    period: "Mar 2024 – Mar 2025",
  },
];

const Volunteer = () => {
  return (
    <div
      id="volunteer"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center  bg-gray-50/70 dark:bg-gray-900/50"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">
        Volunteer Experience
      </h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        My <span className="text-orange-500">Volunteer</span> Work
      </h2>

      <div className="w-full mt-20 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {volunteerExperience.map((experience, index) => {
            
            
          return (
            <div key={index} className="flex items-center gap-3">
                <CircleDot className="text-orange-500" size={24} />
                <Card
                  key={index}
                  size="md"
                  className="bg-gray-50/70 dark:bg-gray-800/50 dark:border-gray-700 mx-auto w-11/12 max-w-md hover:shadow-orange-100 hover:translate-1 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  
                  <CardHeader>
                    <CardTitle className="flex gap-4 text-gray-900 dark:text-gray-100">
                      {experience.organization}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                      {experience.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                    {experience.role}
                  </CardContent>
                </Card>
              </div>
          )
          
        })}
      </div>
            </div>
    </div>
  );
};

export default Volunteer;
