"use client";

import { ProgressChart } from "./progress-chart";

interface ProgressCardProps {
  label: string;
  percentage: number;
  color: string;
}

export function ProgressCard({ label, percentage, color }: ProgressCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 xl:gap-[42px]">
      <ProgressChart percentage={percentage} color={color} />
      <div className="text-center md:text-left">
        <h3 className="text-[24px] text-[#414141] leading-[36px] font-bold mb-1">
          {percentage}%
        </h3>
        <p className="text-[14px] text-[#747474] leading-[22px] normal my-0">
          {label}
        </p>
      </div>
    </div>
  );
}
