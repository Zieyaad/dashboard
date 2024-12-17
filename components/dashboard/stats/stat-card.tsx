"use client";

import clsx from "clsx";
import Image from "next/image";

interface StatCardProps {
  title: string;
  amount: string;
  percentageChange: string;
  icon: string;
  index: number;
}

export function StatCard({
  title,
  amount,
  percentageChange,
  icon,
  index,
}: StatCardProps) {
  const isPositive = percentageChange.startsWith("+");

  return (
    <div
      className="animate-in bg-white rounded-2xl p-6 flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:items-center"
      style={{
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
      }}
    >
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <Image
            src="/assets/icons/icon-increase.svg"
            alt={isPositive ? "Increase" : "Decrease"}
            width="24"
            height="24"
          />
          <span className="text-sm leading-[22px] font-semibold">
            {percentageChange}
          </span>
        </div>
        <p className="text-[32px] leading-[48px] text-[#414141] font-bold md:mt-1">
          {amount}
        </p>
      </div>
      <Image
        src={`/assets/images/${icon}.svg`}
        alt={title}
        width="64"
        height="64"
      />
    </div>
  );
}
