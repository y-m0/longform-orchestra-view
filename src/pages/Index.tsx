
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCards } from "@/components/StatsCards";
import { MediaCards } from "@/components/MediaCards";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-auto">
          <DashboardHeader />
          <main className="flex-1 overflow-auto p-6">
            <div className="flex items-center justify-between pb-6">
              <div>
                <h2 className="text-3xl font-bold">Media Dashboard</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Manage your long-form media projects and assets in one place
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SidebarTrigger />
              </div>
            </div>

            <div className="space-y-8">
              <StatsCards />

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium">Current Projects</h3>
                  <Tabs defaultValue="all" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="production">Production</TabsTrigger>
                      <TabsTrigger value="post">Post</TabsTrigger>
                      <TabsTrigger value="pre">Pre-Production</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <MediaCards />
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-lg font-medium">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-md border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                        <span className="font-medium">{i + 14}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">
                          {i === 1 ? "Script Review" : i === 2 ? "Rough Cut Due" : "Final VFX Delivery"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {i === 1 ? "The Hidden Valley Documentary" : i === 2 ? "Eternal Echoes Series" : "Beyond the Horizon"}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {i === 1 ? "2 days left" : i === 2 ? "5 days left" : "1 week left"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
