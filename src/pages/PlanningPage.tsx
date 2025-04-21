
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Calendar, ListTodo, Users, BarChart2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PlanningPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default tab is 'calendar'
  const defaultTab = "calendar";
  
  // Extract tab from URL search params
  const getTabFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    return tab && ["calendar", "tasks", "team", "reports"].includes(tab) 
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
          <div className="flex-1 space-y-6 p-6">
            <div>
              <h1 className="text-3xl font-bold">Content Planning</h1>
              <p className="text-sm text-muted-foreground">
                Schedule and plan your content creation workflow
              </p>
            </div>
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="calendar" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <Calendar size={14} />
                  <span>Calendar</span>
                </TabsTrigger>
                <TabsTrigger value="tasks" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <ListTodo size={14} />
                  <span>Tasks</span>
                </TabsTrigger>
                <TabsTrigger value="team" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <Users size={14} />
                  <span>Team</span>
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <BarChart2 size={14} />
                  <span>Reports</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="calendar" className="pt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Editorial Calendar</CardTitle>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="pt-6 pb-12">
                      <div className="grid grid-cols-7 gap-4 text-center text-sm font-medium">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                          <div key={day} className="py-2">{day}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-4">
                        {Array.from({ length: 31 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`aspect-square rounded-md border p-2 text-center ${
                              i % 7 === 5 || i % 7 === 6 ? "bg-muted/50" : ""
                            } ${
                              [4, 12, 15, 23].includes(i) ? "border-primary/30 bg-primary/5 dark:border-primary/20" : ""
                            }`}
                          >
                            <span className="text-sm">{i + 1}</span>
                            {[4, 12, 15, 23].includes(i) && (
                              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary mx-auto"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium mb-2">Upcoming Content</h3>
                      <div className="space-y-2">
                        {["Deep Dive: AI Workflows", "Editorial Series Planning", "Newsletter #42"].map((item) => (
                          <div 
                            key={item} 
                            className="flex items-center justify-between rounded-md border p-2"
                          >
                            <div className="text-sm">{item}</div>
                            <div className="text-xs text-muted-foreground">
                              May 5, 2025
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tasks" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-sm text-muted-foreground py-8">
                      Task management interface will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="team" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Assignments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-sm text-muted-foreground py-8">
                      Team assignment interface will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Planning Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-sm text-muted-foreground py-8">
                      Planning reports and analytics will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PlanningPage;
