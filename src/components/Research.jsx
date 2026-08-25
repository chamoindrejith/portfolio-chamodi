import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Microscope, DatabaseZap, Cpu } from "lucide-react";

const research = {
  title: "Observability for Autoscaling Correctness in Kubernetes-Based Systems",
  label: "Final-Year Research Project",
  period: "2025 – 2026",
  overview:
    "This research examines how the correctness of Kubernetes Horizontal Pod Autoscaler (HPA) scaling decisions can be evaluated beyond conventional infrastructure-level metrics such as CPU and memory utilization.",
  problem:
    "Autoscaling systems often appear healthy when utilization metrics look stable, but the actual decisions may not align with workload demand or service correctness. The project addresses this gap by focusing on observability-based evaluation of autoscaling behaviour.",
  objective:
    "To evaluate the correctness of HPA scaling decisions using observability signals and to develop metrics that reflect whether scaling actions are appropriate, timely, and effective.",
  contribution:
    "The research introduces and evaluates two correctness-oriented metrics—Scale Reaction Delay (SRD) and Scale Effectiveness Score (SES)—alongside a rule-based classifier to assess scaling decisions using observability data without modifying the autoscaler itself.",
  technologies: [
    "Kubernetes",
    "Horizontal Pod Autoscaler (HPA)",
    "Minikube",
    "Prometheus",
    "Grafana",
    "Python",
    "Synthetic workload generation",
  ],
  status: "Completed as part of final-year research",
};

const Research = () => {
  return (
    <div
      id="research"
      className="w-full px-5 sm:px-[10%] lg:px-[15%] mt-20 mb-20 py-16 md:py-20 scroll-mt-20 items-center justify-center bg-gray-50/70 dark:bg-gray-900/50"
    >
      <h4 className="text-center mb-2 text-lg geistMono text-gray-900 dark:text-gray-100">
        Research
      </h4>
      <h2 className="text-center text-5xl geistMono text-gray-900 dark:text-gray-100">
        Final Year <span className="text-orange-500">Research</span>
      </h2>

      <div className="w-full mt-16">
        <Card className="mx-auto w-full max-w-6xl border-orange-200 bg-white/80 dark:border-orange-500/40 dark:bg-gray-800/60 shadow-orange-100">
          <CardHeader className="gap-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                  <Microscope size={22} />
                </div>
                <CardTitle className="text-2xl md:text-4xl text-gray-900 dark:text-gray-100">
                  {research.title}
                </CardTitle>
              </div>
              <div className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-500/50 dark:bg-orange-500/10 dark:text-orange-200">
                {research.label}
              </div>
            </div>
            <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              {research.period}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 text-gray-700 dark:text-gray-300">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 dark:border-gray-700 dark:bg-gray-900/40">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  <Cpu size={16} className="text-orange-500" />
                  Overview
                </div>
                <p>{research.overview}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 dark:border-gray-700 dark:bg-gray-900/40">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  <DatabaseZap size={16} className="text-orange-500" />
                  Problem
                </div>
                <p>{research.problem}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6 dark:border-orange-500/20 dark:bg-orange-500/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-200">
                Main Objective
              </p>
              <p className="mt-3 text-base md:text-lg">{research.objective}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Key Contribution
              </p>
              <p className="mt-3 text-base md:text-lg">{research.contribution}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Technologies & Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {research.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-800 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 dark:border-gray-700 dark:bg-gray-900/40">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Research Status
              </p>
              <p className="mt-3 text-base font-medium text-gray-800 dark:text-gray-200">{research.status}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Research;
