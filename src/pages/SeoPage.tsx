
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SeoPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">SEO Tools</h1>
          <Card>
            <CardHeader>
              <CardTitle>SEO Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analyze and optimize your content for search engines.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
