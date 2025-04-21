
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCards } from "@/components/StatsCards";
import { MediaCards } from "@/components/MediaCards";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default tab is 'all'
  const defaultTab = "all";
  
  // Extract tab from URL search params
  const getTabFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    return tab && ["all", "production", "post", "pre"].includes(tab) 
      ? tab 
      : defaultTab;
  };
  
  const [activeTab, setActiveTab] = useState(() => getTabFromUrl());

  // Update URL when tab changes
  useEffect(() => {
    const currentTab = getTabFromUrl();
    if (currentTab !== activeTab) {
      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("tab", activeTab);
      navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true });
    }
  }, [activeTab, location.search, navigate, location.pathname]);

  // Update tab state when URL changes
  useEffect(() => {
    const tabFromUrl = getTabFromUrl();
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("tab", value);
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-background">
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
                  <Tabs value={activeTab} onValueChange={handleTabChange} className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">All</TabsTrigger>
                      <TabsTrigger value="production" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">Production</TabsTrigger>
                      <TabsTrigger value="post" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">Post</TabsTrigger>
                      <TabsTrigger value="pre" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">Pre-Production</TabsTrigger>
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
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
