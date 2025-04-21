
import { StatsCards } from "@/components/StatsCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, Plus, Filter } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

const ScriptsPage = () => {
  // Sample script data
  const scripts = [
    {
      id: 1,
      title: "The Hidden Valley - Final Draft",
      status: "Approved",
      lastModified: "2 days ago",
      author: "Emma Johnson",
      pages: 86,
    },
    {
      id: 2,
      title: "Eternal Echoes - Episode 4",
      status: "In Review",
      lastModified: "Yesterday",
      author: "Marcus Chen",
      pages: 42,
    },
    {
      id: 3,
      title: "Beyond the Horizon - Director's Notes",
      status: "Draft",
      lastModified: "5 hours ago",
      author: "Sofia Rodriguez",
      pages: 104,
    },
    {
      id: 4,
      title: "Urban Legends - Pilot Episode",
      status: "Needs Revision",
      lastModified: "1 week ago",
      author: "James Wilson",
      pages: 38,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-auto">
          <DashboardHeader />
          <div className="flex-1 space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Scripts</h1>
                <p className="text-sm text-muted-foreground">
                  Manage and organize all your production scripts
                </p>
              </div>
              <Button className="flex items-center gap-1">
                <Plus size={16} />
                <span>New Script</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Scripts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold">24</span>
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
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
                    <div className="flex items-center text-amber-600">
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
                <h2 className="font-semibold">Recent Scripts</h2>
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
                      <div>
                        <div className="font-medium">{script.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {script.author} · {script.pages} pages
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        Updated {script.lastModified}
                      </div>
                      <div
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${script.status === "Approved" ? "bg-green-100 text-green-700" :
                          script.status === "In Review" ? "bg-blue-100 text-blue-700" :
                          script.status === "Draft" ? "bg-gray-100 text-gray-700" :
                          "bg-amber-100 text-amber-700"}`}
                      >
                        {script.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ScriptsPage;
