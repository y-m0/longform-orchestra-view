import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { FileText, CheckCircle, AlertCircle, Search, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const FactCheckPage = () => {
  const [currentText, setCurrentText] = useState("");
  
  // Sample data for fact checks
  const factChecks = [
    {
      id: 1,
      title: "Climate Change Statistics",
      status: "Verified",
      lastChecked: "2 days ago",
      accuracy: 95,
      sources: 4,
      excerpt: "Global temperatures have risen by 1.1°C since the pre-industrial era..."
    },
    {
      id: 2,
      title: "Economic Growth Projections",
      status: "Pending",
      lastChecked: "5 hours ago",
      accuracy: 0,
      sources: 2,
      excerpt: "The annual GDP growth rate is expected to reach 3.5% by the end of..."
    },
    {
      id: 3,
      title: "Health Statistics in Report",
      status: "Issues Found",
      lastChecked: "Yesterday",
      accuracy: 72,
      sources: 6,
      excerpt: "Vaccine efficacy rates across different demographics show significant..."
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
                <h1 className="text-3xl font-bold">Fact Checker</h1>
                <p className="text-sm text-muted-foreground">
                  Verify claims and sources in your content
                </p>
              </div>
            </div>
            
            <Tabs defaultValue="check" className="w-full">
              <TabsList>
                <TabsTrigger value="check" className="flex items-center gap-2">
                  <Search size={14} />
                  <span>Check Content</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Check History</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="check" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Content for Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Textarea 
                        placeholder="Paste text to fact check..." 
                        className="min-h-[200px]"
                        value={currentText}
                        onChange={(e) => setCurrentText(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="flex items-center gap-2">
                        <Search size={16} />
                        Run Fact Check
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        or
                      </span>
                      <Input type="file" className="max-w-[300px]" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Verification Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={18} className="text-green-500" />
                          <span className="font-medium">Standard Check</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Verifies factual claims against trusted sources
                        </p>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center gap-2">
                          <Search size={18} className="text-blue-500" />
                          <span className="font-medium">Deep Research</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Thorough verification with academic and primary sources
                        </p>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle size={18} className="text-amber-500" />
                          <span className="font-medium">Bias Analysis</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Identifies potential bias or skewed perspectives
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Completed Checks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">42</span>
                        <div className="flex items-center text-green-500">
                          <CheckCircle size={16} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">86%</span>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                          <span>+2%</span>
                          <span>this month</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Sources Checked</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold">187</span>
                        <FileText size={16} className="text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-semibold">Recent Fact Checks</h2>
                  </div>
                  <div className="divide-y">
                    {factChecks.map((check) => (
                      <div key={check.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-md 
                              ${check.status === "Verified" ? "bg-green-100 text-green-600" : 
                                check.status === "Issues Found" ? "bg-amber-100 text-amber-600" : 
                                "bg-blue-100 text-blue-600"}`}>
                              {check.status === "Verified" ? (
                                <CheckCircle size={18} />
                              ) : check.status === "Issues Found" ? (
                                <AlertCircle size={18} />
                              ) : (
                                <Clock size={18} />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{check.title}</div>
                              <div className="text-xs text-muted-foreground">
                                Checked {check.lastChecked} • {check.sources} sources
                              </div>
                            </div>
                          </div>
                          <div
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${check.status === "Verified" ? "bg-green-100 text-green-700" :
                              check.status === "Pending" ? "bg-blue-100 text-blue-700" :
                              "bg-amber-100 text-amber-700"}`}
                          >
                            {check.status}
                          </div>
                        </div>
                        
                        {check.status !== "Pending" && (
                          <div className="mt-3">
                            <div className="mb-1 text-xs text-muted-foreground">Accuracy</div>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={check.accuracy} 
                                className="h-1.5 w-full"
                              />
                              <span className="text-sm font-medium">{check.accuracy}%</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-3 rounded border border-muted p-3 text-sm">
                          "{check.excerpt}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FactCheckPage;
