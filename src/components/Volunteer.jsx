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
      className="w-full sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center  bg-gray-50/70"
    >
      <h4 className="text-center mb-2 text-lg geistMono">
        Volunteer Experience
      </h4>
      <h2 className="text-center text-5xl geistMono">
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
                  className="bg-gray-50/70 mx-auto w-11/12 max-w-md hover:shadow-orange-100 hover:translate-1 hover:scale-105 hover:bg-gray-100 transition-all duration-300"
                >
                  
                  <CardHeader>
                    <CardTitle className="flex gap-4">
                      {experience.organization}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 ">
                      {experience.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
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
