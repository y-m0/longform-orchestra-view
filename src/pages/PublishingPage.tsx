
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { PublishingPlatforms } from "./scripts/components/PublishingPlatforms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PublishingPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Publishing</h1>
          <Card>
            <CardHeader>
              <CardTitle>Publishing Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <PublishingPlatforms />
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
