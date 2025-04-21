
import { StatsCards } from "@/components/StatsCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, Plus, Filter, Calendar, BarChart2, Users, Link as LinkIcon, ShieldCheck } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider 
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ScriptsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("content");

  // Parse current tab from URL or use default
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab && ["content", "planning", "agents", "workflow", "analytics", "publish"].includes(tab)) {
      setActiveTab(tab);
    } else if (!tab) {
      // If no tab in URL, set default tab in URL
      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("tab", activeTab);
      navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true });
    }
  }, [location.search, navigate, location.pathname, activeTab]);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("tab", value);
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
  };

  // Sample script data
  const scripts = [
    {
      id: 1,
      title: "The Hidden Valley - Final Draft",
      status: "Approved",
      lastModified: "2 days ago",
      author: "Emma Johnson",
      pages: 86,
      workflow: "Publishing",
      progress: 90,
      agents: ["Writer", "Editor", "SEO"]
    },
    {
      id: 2,
      title: "Eternal Echoes - Episode 4",
      status: "In Review",
      lastModified: "Yesterday",
      author: "Marcus Chen",
      pages: 42,
      workflow: "Editing",
      progress: 65,
      agents: ["Writer", "Fact-Checker"]
    },
    {
      id: 3,
      title: "Beyond the Horizon - Director's Notes",
      status: "Draft",
      lastModified: "5 hours ago",
      author: "Sofia Rodriguez",
      pages: 104,
      workflow: "Drafting",
      progress: 35,
      agents: ["Writer"]
    },
    {
      id: 4,
      title: "Urban Legends - Pilot Episode",
      status: "Needs Revision",
      lastModified: "1 week ago",
      author: "James Wilson",
      pages: 38,
      workflow: "Review",
      progress: 50,
      agents: ["Editor", "Fact-Checker"]
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-background">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-auto">
          <DashboardHeader />
          <div className="flex-1 space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Long-Form Media</h1>
                <p className="text-sm text-muted-foreground">
                  Manage and orchestrate your long-form content creation workflow
                </p>
              </div>
              <Button className="flex items-center gap-1">
                <Plus size={16} />
                <span>New Article</span>
              </Button>
            </div>
            
            {/* Intelligence Features Navigation */}
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="content" className="flex items-center gap-2">
                  <FileText size={14} />
                  <span>Content</span>
                </TabsTrigger>
                <TabsTrigger value="planning" className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>Planning</span>
                </TabsTrigger>
                <TabsTrigger value="agents" className="flex items-center gap-2">
                  <Users size={14} />
                  <span>Agents</span>
                </TabsTrigger>
                <TabsTrigger value="workflow" className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Workflows</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart2 size={14} />
                  <span>Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="publish" className="flex items-center gap-2">
                  <LinkIcon size={14} />
                  <span>Publishing</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Content Tab */}
              <TabsContent value="content" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">24</span>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span>+3</span>
                          <span>this month</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">6</span>
                        <div className="flex items-center text-amber-600 dark:text-amber-400">
                          <Clock size={14} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">482</span>
                        <FileText size={16} className="text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-semibold">Recent Articles</h2>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter size={14} />
                      <span>Filter</span>
                    </Button>
                  </div>
                  <div className="divide-y">
                    {scripts.map((script) => (
                      <div key={script.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <FileText size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{script.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {script.author} · {script.pages} pages
                            </div>
                            <div className="mt-2">
                              <Progress value={script.progress} className="h-1.5 w-full" />
                              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                                <span>{script.workflow} ({script.progress}%)</span>
                                <div className="flex gap-1">
                                  {script.agents.map((agent) => (
                                    <span key={agent} className="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800">
                                      {agent}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-muted-foreground">
                            Updated {script.lastModified}
                          </div>
                          <div
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${script.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                              script.status === "In Review" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                              script.status === "Draft" ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" :
                              "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}
                          >
                            {script.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Planning Tab */}
              <TabsContent value="planning" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-sm text-muted-foreground py-8">
                      Calendar view for editorial planning will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Agents Tab */}
              <TabsContent value="agents" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Agent Directory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {["Writer", "Editor", "SEO Specialist", "Fact-Checker"].map((agent) => (
                        <div key={agent} className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                              <Users size={16} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{agent}</div>
                              <div className="text-xs text-muted-foreground">AI Assistant</div>
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-muted-foreground">
                            Specializes in content {agent.toLowerCase()} tasks within the editorial workflow
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Analytics Tab */}
              <TabsContent value="analytics" className="pt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center">
                      <div className="text-center text-sm text-muted-foreground">
                        Performance charts will appear here
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Workflow Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center">
                      <div className="text-center text-sm text-muted-foreground">
                        Workflow metrics charts will appear here
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Workflow tab content */}
              <TabsContent value="workflow" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Editorial Workflows</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center text-sm text-muted-foreground py-8">
                      Workflow management interface will appear here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="publish" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Publishing Integrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {["Substack", "Medium", "WordPress", "Ghost"].map((platform) => (
                        <div key={platform} className="flex items-center gap-3 rounded-lg border p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                            <LinkIcon size={18} className="text-slate-600 dark:text-slate-300" />
                          </div>
                          <div>
                            <div className="font-medium">{platform}</div>
                            <div className="text-xs text-muted-foreground">
                              Connect to publish articles
                            </div>
                          </div>
                        </div>
                      ))}
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

export default ScriptsPage;
