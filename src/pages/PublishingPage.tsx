
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { PublishingPlatforms } from "./scripts/components/PublishingPlatforms";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Calendar, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function PublishingPage() {
  const scheduledCampaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "Scheduled",
      date: "April 28, 2025",
      time: "9:00 AM",
      channels: ["Instagram", "Facebook", "Email"],
      progress: 100
    },
    {
      id: 2,
      name: "Product Showcase",
      status: "In Progress",
      date: "Ongoing",
      time: "Multiple",
      channels: ["YouTube", "TikTok", "Website"],
      progress: 45
    },
    {
      id: 3,
      name: "Holiday Promotion",
      status: "Draft",
      date: "December 1, 2025",
      time: "12:00 AM",
      channels: ["All Channels"],
      progress: 25
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Campaign Distribution</h1>
            <p className="text-muted-foreground">Schedule and publish your campaigns across multiple channels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Platform Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <PublishingPlatforms />
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Manage Connections</Button>
                <Button>Connect New Platform</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing Calendar</CardTitle>
              </CardHeader>
              <CardContent className="min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="mt-4 font-medium">Campaign Calendar</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    View and manage your scheduled campaign publications
                  </p>
                  <Button className="mt-4">Open Calendar</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Scheduled Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border rounded-md p-4">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="font-medium">{campaign.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {campaign.date} at {campaign.time}
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          campaign.status === "Scheduled" ? "outline" :
                          campaign.status === "In Progress" ? "secondary" :
                          "default"
                        }
                        className={
                          campaign.status === "Scheduled" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20" :
                          campaign.status === "In Progress" ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20" :
                          "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Campaign progress</span>
                        <span className="text-sm font-medium">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {campaign.channels.map((channel, i) => (
                        <Badge key={i} variant="secondary">{channel}</Badge>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
