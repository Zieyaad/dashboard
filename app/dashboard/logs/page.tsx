import React from "react";
import { mockData } from "@/lib/mock-data";
import { Intro } from "@/components/dashboard/intro/intro";

export default function LogsPage() {
  const { pageTitle, description } = mockData.logs;
  return (
    <>
      <Intro title={pageTitle} description={description} />
    </>
  );
}
