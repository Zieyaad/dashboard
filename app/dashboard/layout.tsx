import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto p-4 pl-[81px] lg:pt-8 lg:px-10 lg:pb-[46px] bg-[#FAFAFA]">
          {children}
        </main>
      </div>
    </div>
  );
}
