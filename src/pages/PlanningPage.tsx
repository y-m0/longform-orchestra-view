
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Calendar, Clock, DollarSign, BarChart2, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function PlanningPage() {
  const [activeTab, setActiveTab] = useState("calendar");

  const planningItems = [
    {
      id: 1,
      title: "Q3 Product Campaign Planning",
      date: "May 10-12, 2025",
      type: "Strategy Session",
      client: "TechGiant Inc",
      team: ["Marketing Director", "Creative Director", "Media Planner"],
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Content Calendar Development",
      date: "April 28, 2025",
      type: "Content Planning",
      client: "Fashion Forward",
      team: ["Content Manager", "Social Media Specialist"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Budget Allocation Review",
      date: "May 5, 2025",
      type: "Finance Meeting",
      client: "Global Finance Group",
      team: ["Account Director", "Finance Manager"],
      status: "Upcoming"
    }
  ];

  const budgets = [
    {
      id: 1,
      client: "TechGiant Inc",
      campaign: "Q3 Product Launch",
      allocated: 150000,
      spent: 45000,
      remaining: 105000,
      channels: [
        { name: "Social Media", allocation: 40, spent: 15000 },
        { name: "Display", allocation: 30, spent: 18000 },
        { name: "Search", allocation: 20, spent: 12000 },
        { name: "Video", allocation: 10, spent: 0 }
      ]
    },
    {
      id: 2,
      client: "Fashion Forward",
      campaign: "Summer Collection",
      allocated: 75000,
      spent: 35000,
      remaining: 40000,
      channels: [
        { name: "Social Media", allocation: 50, spent: 20000 },
        { name: "Influencer", allocation: 30, spent: 15000 },
        { name: "Email", allocation: 20, spent: 0 }
      ]
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Media Planning</h1>
              <p className="text-muted-foreground">Plan and allocate campaign budgets and schedules</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Plan</Button>
              <Button className="flex items-center gap-1">
                <Calendar size={16} />
                <span>Schedule Meeting</span>
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="calendar" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                <Calendar size={16} />
                <span>Calendar</span>
              </TabsTrigger>
              <TabsTrigger value="budget" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                <DollarSign size={16} />
                <span>Budget</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                <Users size={16} />
                <span>Resources</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="mt-6">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Planning Calendar</CardTitle>
                </CardHeader>
                <CardContent className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 font-medium">Campaign Calendar View</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      View and manage your scheduled campaigns and planning sessions
                    </p>
                    <Button className="mt-4">Open Full Calendar</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Planning Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {planningItems.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                            {item.type === "Strategy Session" && <Users className="h-5 w-5 text-primary" />}
                            {item.type === "Content Planning" && <FileText className="h-5 w-5 text-primary" />}
                            {item.type === "Finance Meeting" && <DollarSign className="h-5 w-5 text-primary" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{item.title}</h4>
                              <Badge 
                                variant={
                                  item.status === "In Progress" ? "secondary" : "outline"
                                }
                                className={
                                  item.status === "In Progress" ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20" : 
                                  "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                                }
                              >
                                {item.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{item.client}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{item.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{item.team.length} team members</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">Q2 2025</span>
                          </div>
                          <span className="text-sm text-muted-foreground">Current Quarter</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="rounded border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/30 p-2">
                            <div className="text-xs font-medium text-green-700 dark:text-green-400">April</div>
                            <div className="text-sm mt-1">3 campaigns</div>
                          </div>
                          <div className="rounded border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/30 p-2">
                            <div className="text-xs font-medium text-green-700 dark:text-green-400">May</div>
                            <div className="text-sm mt-1">4 campaigns</div>
                          </div>
                          <div className="rounded border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/30 p-2">
                            <div className="text-xs font-medium text-green-700 dark:text-green-400">June</div>
                            <div className="text-sm mt-1">2 campaigns</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span className="font-medium">Q3 2025</span>
                          </div>
                          <span className="text-sm text-muted-foreground">Planning</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="rounded border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30 p-2">
                            <div className="text-xs font-medium text-blue-700 dark:text-blue-400">July</div>
                            <div className="text-sm mt-1">1 campaign</div>
                          </div>
                          <div className="rounded border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30 p-2">
                            <div className="text-xs font-medium text-blue-700 dark:text-blue-400">August</div>
                            <div className="text-sm mt-1">3 campaigns</div>
                          </div>
                          <div className="rounded border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30 p-2">
                            <div className="text-xs font-medium text-blue-700 dark:text-blue-400">September</div>
                            <div className="text-sm mt-1">2 campaigns</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="budget" className="mt-6">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Media Budget Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {budgets.map((budget) => (
                      <div key={budget.id} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-lg font-medium">{budget.campaign}</h3>
                            <p className="text-sm text-muted-foreground">Client: {budget.client}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-muted-foreground">Allocated</div>
                              <div className="text-lg font-medium">${budget.allocated.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Spent</div>
                              <div className="text-lg font-medium">${budget.spent.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Remaining</div>
                              <div className="text-lg font-medium text-green-600">${budget.remaining.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-4">Channel Allocation</h4>
                          <div className="space-y-4">
                            {budget.channels.map((channel, i) => (
                              <div key={i}>
                                <div className="flex justify-between items-center mb-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{channel.name}</span>
                                    <Badge variant="outline">{channel.allocation}%</Badge>
                                  </div>
                                  <span className="text-sm">
                                    ${channel.spent.toLocaleString()} / ${(budget.allocated * channel.allocation / 100).toLocaleString()}
                                  </span>
                                </div>
                                <Progress 
                                  value={channel.spent / (budget.allocated * channel.allocation / 100) * 100} 
                                  className="h-2"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Performance Tracking</span>
                    <Button variant="outline" size="sm">
                      See Full Report <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">ROI</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">3.8x</div>
                        <p className="text-xs text-muted-foreground">Average across active campaigns</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Cost per Conversion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">$24.50</div>
                        <p className="text-xs text-muted-foreground">-12% from previous period</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Budget Efficiency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">87%</div>
                        <p className="text-xs text-muted-foreground">Of allocated spend performing above target</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Team Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Creative Team</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Strategy Team</span>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Media Buying</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Account Management</span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resource Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Current Month</h3>
                        <div className="rounded-md border border-orange-200 bg-orange-50 p-3 dark:bg-orange-900/20 dark:border-orange-900/30">
                          <div className="font-medium text-orange-700 dark:text-orange-400">High Utilization</div>
                          <p className="text-xs mt-1 text-orange-700/70 dark:text-orange-400/70">
                            Teams are at 85%+ capacity this month
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Next Month</h3>
                        <div className="rounded-md border border-green-200 bg-green-50 p-3 dark:bg-green-900/20 dark:border-green-900/30">
                          <div className="font-medium text-green-700 dark:text-green-400">Balanced Workload</div>
                          <p className="text-xs mt-1 text-green-700/70 dark:text-green-400/70">
                            Projected 65% resource utilization
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">External Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Photography</span>
                        <Badge>3 vendors</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Video Production</span>
                        <Badge>2 vendors</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Web Development</span>
                        <Badge>1 vendor</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Translation Services</span>
                        <Badge>1 vendor</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Manage Vendors
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Project Timeline</CardTitle>
                </CardHeader>
                <CardContent className="min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart2 className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 font-medium">Gantt Chart View</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Visualize project timelines and resource allocation
                    </p>
                    <Button className="mt-4">Open Timeline</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}
