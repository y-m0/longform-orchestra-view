
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, Clock, AlertCircle, FileText, Image } from "lucide-react";

export default function ApprovalPage() {
  const campaigns = [
    {
      id: 1,
      title: "Summer Collection Launch",
      client: "Fashion Forward",
      status: "Pending",
      assets: 12,
      type: "Social Media Campaign",
      deadline: "3 days"
    },
    {
      id: 2,
      title: "Product Showcase Video",
      client: "TechGiant Inc",
      status: "Review",
      assets: 5,
      type: "Video Campaign",
      deadline: "1 week"
    },
    {
      id: 3,
      title: "Holiday Promotion",
      client: "Retail Chain",
      status: "Approved",
      assets: 8,
      type: "Multi-Channel Campaign",
      deadline: "Completed"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Campaign Approval</h1>
            <p className="text-muted-foreground">Review and approve campaign assets before launch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Campaigns awaiting review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Review</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Campaigns in review process</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved</CardTitle>
                <CheckCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Campaigns ready for launch</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Approval Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold mb-1">{campaign.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {campaign.client}</p>
                          </div>
                          <Badge 
                            variant={
                              campaign.status === "Approved" ? "outline" : 
                              campaign.status === "Review" ? "secondary" : 
                              "default"
                            }
                            className={
                              campaign.status === "Approved" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20" : 
                              campaign.status === "Review" ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20" : 
                              "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                            }
                          >
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{campaign.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{campaign.assets} assets</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Deadline: {campaign.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-end bg-muted p-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mb-2"
                          disabled={campaign.status === "Approved"}
                        >
                          Review
                        </Button>
                        <Button 
                          size="sm" 
                          className="w-full"
                          disabled={campaign.status === "Approved"}
                        >
                          Approve
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
