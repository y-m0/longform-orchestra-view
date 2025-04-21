
import { Button } from "@/components/ui/button";
import { Plus, FileText, Calendar, Users, Clock, BarChart2, Link as LinkIcon } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TabContent } from "./scripts/components/TabContent";

const ScriptsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default tab is 'content'
  const defaultTab = "content";
  
  // Extract tab from URL search params
  const getTabFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    return tab && ["content", "planning", "agents", "workflow", "analytics", "publish"].includes(tab) 
      ? tab 
      : defaultTab;
  };
  
  const [activeTab, setActiveTab] = useState(() => getTabFromUrl());

  // Sample campaign data
  const scripts = [
    {
      id: 1,
      title: "Tech Product Launch - Q3 Campaign",
      status: "Approved",
      lastModified: "2 days ago",
      author: "Emma Johnson",
      pages: 86,
      workflow: "Ready for Launch",
      progress: 90,
      agents: ["Creative Director", "Copywriter", "Designer"]
    },
    {
      id: 2,
      title: "Summer Fashion Collection - Social Media",
      status: "In Review",
      lastModified: "Yesterday",
      author: "Marcus Chen",
      pages: 42,
      workflow: "Creative Development",
      progress: 65,
      agents: ["Copywriter", "Social Media Manager"]
    },
    {
      id: 3,
      title: "Financial App Redesign - Brand Guidelines",
      status: "Draft",
      lastModified: "5 hours ago",
      author: "Sofia Rodriguez",
      pages: 104,
      workflow: "Concept Stage",
      progress: 35,
      agents: ["Brand Strategist"]
    },
    {
      id: 4,
      title: "Lifestyle Brand - Cross-Platform Campaign",
      status: "Needs Revision",
      lastModified: "1 week ago",
      author: "James Wilson",
      pages: 38,
      workflow: "Review",
      progress: 50,
      agents: ["Creative Director", "Media Planner"]
    },
  ];

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Campaign Management</h1>
                <p className="text-sm text-muted-foreground">
                  Create, manage and track your multi-channel advertising campaigns
                </p>
              </div>
              <Button className="flex items-center gap-1">
                <Plus size={16} />
                <span>New Campaign</span>
              </Button>
            </div>
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="content" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <FileText size={14} />
                  <span>Campaigns</span>
                </TabsTrigger>
                <TabsTrigger value="planning" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <Calendar size={14} />
                  <span>Planning</span>
                </TabsTrigger>
                <TabsTrigger value="agents" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <Users size={14} />
                  <span>Team</span>
                </TabsTrigger>
                <TabsTrigger value="workflow" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <Clock size={14} />
                  <span>Workflow</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <BarChart2 size={14} />
                  <span>Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="publish" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  <LinkIcon size={14} />
                  <span>Distribution</span>
                </TabsTrigger>
              </TabsList>
              
              <TabContent activeTab={activeTab} scripts={scripts} />
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ScriptsPage;
