"use client";

import { ProgressCard } from "./progress-card";

interface ProgressStatsProps {
  stats: {
    label: string;
    percentage: number;
    color: string;
  }[];
}

export function ProgressStats({ stats }: ProgressStatsProps) {
  return (
    <div
      className="animate-in bg-[#ffffff] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-[32px] rounded-2xl p-7 md:py-[37px]"
      style={{
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
      }}
    >
      {stats.map((stat, index) => (
        <ProgressCard
          key={index}
          label={stat.label}
          percentage={stat.percentage}
          color={stat.color}
        />
      ))}
    </div>
  );
}
