import { mockData } from "@/lib/mock-data";
import { StatsGrid } from "@/components/dashboard/stats/stats-grid";
import { ProgressStats } from "@/components/dashboard/progress/progress-stats";
import { ManagePractices } from "@/components/dashboard/practices/manage-practices";
import { Intro } from "@/components/dashboard/intro/intro";

export default function DashboardPage() {
  const { intro, stats, progressStats } = mockData.dashboard;

  return (
    <>
      <Intro title={intro.title} description={intro.description} />
      <StatsGrid stats={stats} />
      <ProgressStats stats={progressStats} />
      <ManagePractices />
    </>
  );
}
