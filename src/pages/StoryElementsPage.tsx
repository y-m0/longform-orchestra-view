
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, MapPin, FileText, Lightbulb, BookText, Link } from "lucide-react";
import { NodePanel } from "@/components/story-elements/NodePanel";
import { EdgePanel } from "@/components/story-elements/EdgePanel";
import { PropertyPanel } from "@/components/story-elements/PropertyPanel";

const StoryElementsPage = () => {
  const [activeTab, setActiveTab] = useState("nodes");

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-background">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-auto">
          <DashboardHeader />
          <div className="flex-1 space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Story Elements</h1>
                <p className="text-sm text-muted-foreground">
                  Manage your narrative's characters, locations, scenes, concepts, and themes
                </p>
              </div>
              <Button className="flex items-center gap-1">
                <Plus size={16} />
                <span>New Element</span>
              </Button>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger 
                  value="nodes" 
                  className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20"
                >
                  Nodes
                </TabsTrigger>
                <TabsTrigger 
                  value="edges" 
                  className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20"
                >
                  Connections
                </TabsTrigger>
                <TabsTrigger 
                  value="properties" 
                  className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20"
                >
                  Properties
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="nodes" className="mt-6">
                <NodePanel />
              </TabsContent>
              
              <TabsContent value="edges" className="mt-6">
                <EdgePanel />
              </TabsContent>
              
              <TabsContent value="properties" className="mt-6">
                <PropertyPanel />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default StoryElementsPage;
