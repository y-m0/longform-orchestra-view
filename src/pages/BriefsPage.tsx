
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Folder, FileText, Layout, Plus, Users, Calendar, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function BriefsPage() {
  const [activeTab, setActiveTab] = useState("briefs");

  const briefs = [
    {
      id: 1,
      title: "Q3 Tech Product Launch",
      client: "TechGiant Inc",
      status: "In Progress",
      dueDate: "May 15, 2025",
      team: ["Creative Director", "Copywriter", "Designer", "Strategist"],
      progress: 65,
      type: "brief"
    },
    {
      id: 2,
      title: "Summer Fashion Campaign",
      client: "Fashion Forward",
      status: "Review",
      dueDate: "April 30, 2025",
      team: ["Creative Director", "Photographer", "Designer"],
      progress: 85,
      type: "brief"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      client: "Global Finance Group",
      status: "Draft",
      dueDate: "June 10, 2025",
      team: ["UX Designer", "UI Designer", "Copywriter"],
      progress: 30,
      type: "brief"
    }
  ];

  const templates = [
    {
      id: 1,
      title: "Product Launch Brief",
      description: "Template for new product launches with marketing strategy",
      category: "Marketing",
      fields: 18
    },
    {
      id: 2,
      title: "Brand Campaign Brief",
      description: "Comprehensive brief for multi-channel brand campaigns",
      category: "Branding",
      fields: 24
    },
    {
      id: 3,
      title: "Website Redesign Brief",
      description: "Technical and creative brief for website projects",
      category: "Digital",
      fields: 22
    },
    {
      id: 4,
      title: "Social Media Campaign Brief",
      description: "Brief template focused on social media deliverables",
      category: "Social",
      fields: 15
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Brief Templates</h1>
              <p className="text-muted-foreground">Create and manage creative briefs and templates</p>
            </div>
            <Button className="flex items-center gap-1 self-start">
              <Plus size={16} />
              <span>New Brief</span>
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="briefs" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                <FileText size={16} />
                <span>Active Briefs</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                <Layout size={16} />
                <span>Templates</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="briefs" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {briefs.map((brief) => (
                  <Card key={brief.id} className="overflow-hidden">
                    <CardHeader className="border-b bg-primary/5 pb-3 pt-3">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            brief.status === "In Progress" ? "secondary" :
                            brief.status === "Review" ? "outline" :
                            "default"
                          }
                          className={
                            brief.status === "In Progress" ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20" :
                            brief.status === "Review" ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20" :
                            "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 border-slate-500/20"
                          }
                        >
                          {brief.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Due: {brief.dueDate}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{brief.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Client: {brief.client}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{brief.progress}%</span>
                          </div>
                          <Progress value={brief.progress} className="h-2" />
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                            <Users size={14} />
                            <span>Team Members</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {brief.team.map((member, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{member}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 pb-4 flex justify-between">
                      <Button variant="outline" size="sm">Edit Brief</Button>
                      <Button size="sm">View Brief</Button>
                    </CardFooter>
                  </Card>
                ))}

                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] p-6">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Create New Brief</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Start from scratch or use a template
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline">Use Template</Button>
                      <Button>New Brief</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 p-2 rounded">
                            <Folder className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="secondary">{template.category}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {template.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <CheckSquare size={14} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{template.fields} fields</span>
                        </div>
                        <Button variant="ghost" size="sm">Preview</Button>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t flex justify-between pt-4 pb-4">
                      <Button variant="outline">Duplicate</Button>
                      <Button>Use Template</Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center h-full min-h-[260px] p-6">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Create Template</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Design a new brief template
                    </p>
                    <Button>Create Template</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}
