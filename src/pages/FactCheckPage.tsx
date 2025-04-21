import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle, Search, FileText, Link, ExternalLink } from "lucide-react";

export default function FactCheckPage() {
  const [activeTab, setActiveTab] = useState("checker");
  
  const recentClaims = [
    {
      id: 1,
      claim: "Our product increases efficiency by 85%",
      campaign: "Tech Product Launch - Q3",
      source: "Research Study XB-49",
      status: "verified",
      notes: "Internal study verified by independent lab"
    },
    {
      id: 2,
      claim: "#1 in customer satisfaction",
      campaign: "Summer Collection Launch",
      source: "Nielsen Consumer Report 2025",
      status: "unverified",
      notes: "Need to check which specific category this applies to"
    },
    {
      id: 3,
      claim: "Recommended by 9 out of 10 experts",
      campaign: "Health Product Campaign",
      source: "Internal survey data",
      status: "flagged",
      notes: "Sample size too small, needs additional verification"
    },
    {
      id: 4,
      claim: "30-day money back guarantee",
      campaign: "E-commerce Relaunch",
      source: "Company policy",
      status: "verified",
      notes: "Confirmed with legal department"
    }
  ];

  const guidelines = [
    "All superlative claims (#1, best, leading, etc.) must be substantiated with sources",
    "Industry specific regulations must be considered for each vertical",
    "Performance claims require verification from at least 2 independent sources",
    "Avoid absolute claims when percentage ranges would be more accurate",
    "All quoted testimonials must be verified with signed releases",
    "Environmental claims must conform to FTC Green Guides"
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Fact Checker</h1>
            <p className="text-muted-foreground">Verify campaign claims and content accuracy before publication</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="checker">Claim Checker</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="verified">Verified Claims</TabsTrigger>
            </TabsList>

            <TabsContent value="checker">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Claim Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="claim" className="text-sm font-medium">Campaign Claim</label>
                      <textarea
                        id="claim"
                        className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Enter the claim you want to verify..."
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="source" className="text-sm font-medium">Source</label>
                      <Input id="source" placeholder="Reference source for this claim" />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="campaign" className="text-sm font-medium">Related Campaign</label>
                      <Input id="campaign" placeholder="Select related campaign" />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Save Draft</Button>
                      <Button>Verify Claim</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Claims</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentClaims.map((claim) => (
                      <div key={claim.id} className="flex justify-between items-start rounded-lg border p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {claim.status === "verified" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : claim.status === "flagged" ? (
                              <AlertCircle className="h-4 w-4 text-red-500" />
                            ) : (
                              <Search className="h-4 w-4 text-amber-500" />
                            )}
                            <span className="font-medium">{claim.claim}</span>
                            <Badge variant={
                              claim.status === "verified" ? "outline" : 
                              claim.status === "flagged" ? "destructive" : 
                              "secondary"
                            }>
                              {claim.status === "verified" ? "Verified" : 
                               claim.status === "flagged" ? "Flagged" : 
                               "Unverified"}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">Campaign: {claim.campaign}</div>
                          <div className="text-sm text-muted-foreground">Source: {claim.source}</div>
                          <div className="text-sm italic mt-2">{claim.notes}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guidelines">
              <Card>
                <CardHeader>
                  <CardTitle>Fact-checking Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Follow these guidelines to ensure all campaign claims are accurate, verifiable, and compliant with industry standards.
                    </p>
                    
                    <div className="space-y-4">
                      {guidelines.map((guideline, index) => (
                        <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                            <span className="text-sm">{index + 1}</span>
                          </div>
                          <p>{guideline}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Download Complete Guidelines</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="verified">
              <Card>
                <CardHeader>
                  <CardTitle>Verified Claim Library</CardTitle>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search verified claims..." className="pl-8 w-full" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 p-4 border-b font-medium">
                      <div className="col-span-2">Claim</div>
                      <div>Campaign</div>
                      <div>Source</div>
                      <div className="text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      {recentClaims
                        .filter(claim => claim.status === "verified")
                        .map((claim) => (
                          <div key={claim.id} className="grid grid-cols-5 p-4 items-center">
                            <div className="col-span-2 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{claim.claim}</span>
                            </div>
                            <div>{claim.campaign}</div>
                            <div className="text-sm">{claim.source}</div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Link className="h-3 w-3" />
                                <span>Use</span>
                              </Button>
                              <Button size="sm" className="flex items-center gap-1">
                                <ExternalLink className="h-3 w-3" />
                                <span>View</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
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
