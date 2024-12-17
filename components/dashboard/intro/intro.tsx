"use client";

interface IntroProps {
  title: string;
  description?: string;
}

export function Intro({ title, description }: IntroProps) {
  return (
    <div className="pb-[40px]">
      <h1 className="text-[20px] leading-[30px] font-bold mt-0 mb-2">
        {title}
      </h1>
      <p className="text-[14px] leading-[22px] font-normal m-0">
        {description}
      </p>
    </div>
  );
}
