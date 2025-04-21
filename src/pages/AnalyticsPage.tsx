
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ContentPerformanceChart } from "./scripts/components/ContentPerformanceChart";
import { WorkflowEfficiencyChart } from "./scripts/components/WorkflowEfficiencyChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("performance");
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Campaign Analytics</h1>
            <p className="text-muted-foreground">Track performance metrics and audience insights</p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="performance" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Performance
              </TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Audience
              </TabsTrigger>
              <TabsTrigger value="roi" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                ROI Analysis
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContentPerformanceChart />
                <WorkflowEfficiencyChart />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">CTR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3.8%</div>
                    <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1.2M</div>
                    <p className="text-xs text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Conversions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">28.5K</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="audience" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Demographic Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Demographic visualization placeholder</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Device Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Device usage visualization placeholder</p>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Engagement by Format</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Format engagement visualization placeholder</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="roi" className="mt-6">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Campaign Investment</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Media Spend</span>
                          <span className="font-medium">$125,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Creative Production</span>
                          <span className="font-medium">$45,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Agency Fees</span>
                          <span className="font-medium">$30,000</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="font-bold">Total Investment</span>
                          <span className="font-bold">$200,000</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Campaign Return</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Conversions</span>
                          <span className="font-medium">28,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Average Order Value</span>
                          <span className="font-medium">$85</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Revenue Generated</span>
                          <span className="font-medium">$2,422,500</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="font-bold">ROI</span>
                          <span className="font-bold text-green-600">12.1x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Media Mix Modeling</CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <p className="text-muted-foreground">Media mix visualization placeholder</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}
