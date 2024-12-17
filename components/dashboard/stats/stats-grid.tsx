"use client";

import { StatCard } from "./stat-card";

interface StatsGridProps {
  stats: {
    title: string;
    amount: string;
    percentageChange: string;
    icon: string;
  }[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[26px]">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} index={index} />
      ))}
    </div>
  );
}
