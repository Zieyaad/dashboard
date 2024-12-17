"use client";

import { useState, useEffect } from "react";

interface ProgressChartProps {
  percentage: number;
  color: string;
}

export function ProgressChart({ percentage, color }: ProgressChartProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="animate-in relative w-[80px] h-[80px] flex-shrink-0 opacity-0 translate-y-4">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 84 84">
        <circle
          cx="42"
          cy="42"
          r={radius}
          fill="none"
          stroke="#9D9D9D"
          strokeWidth="8"
          strokeOpacity="0.16"
        />

        <circle
          cx="42"
          cy="42"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.6s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[14px] leading-[22px] text-[#414141] font-semibold">
          {Math.round(currentPercentage)}%
        </span>
      </div>
    </div>
  );
}
