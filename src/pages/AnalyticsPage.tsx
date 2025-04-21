
import DashboardSidebar from "@/components/DashboardSidebar";
import { ContentPerformanceChart } from "./scripts/components/ContentPerformanceChart";
import { WorkflowEfficiencyChart } from "./scripts/components/WorkflowEfficiencyChart";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentPerformanceChart />
          <WorkflowEfficiencyChart />
        </div>
      </main>
    </div>
  );
}
