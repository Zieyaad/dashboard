import { mockData } from "@/lib/mock-data";
import { Intro } from "@/components/dashboard/intro/intro";
import React from "react";

export default function ProfilePage() {
  const { name, email } = mockData.user;
  const { pageTitle, description } = mockData.profile;

  return (
    <>
      <Intro title={pageTitle} description={description} />
      <div
        className="bg-white rounded-2xl p-6 space-y-4"
        style={{
          boxShadow:
            "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
        }}
      >
        <div>
          <p className="text-[16px] leading-[24px] text-[#414141] font-semibold">
            Name
          </p>
          <p className="text-[14px] leading-[22px] text-[#747474] font-normal">
            {name}
          </p>
        </div>
        <div>
          <p className="text-[16px] leading-[24px] text-[#414141] font-semibold">
            Email
          </p>
          <p className="text-[14px] leading-[22px] text-[#747474] font-normal">
            {email}
          </p>
        </div>
      </div>
    </>
  );
}
