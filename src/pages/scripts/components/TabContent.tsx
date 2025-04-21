
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Filter, Users } from "lucide-react";
import { ScriptsOverviewCards } from "./ScriptsOverviewCards";
import { ScriptsList } from "./ScriptsList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentPerformanceChart } from "./ContentPerformanceChart";
import { WorkflowEfficiencyChart } from "./WorkflowEfficiencyChart";
import { PublishingPlatforms } from "./PublishingPlatforms";

interface TabContentProps {
  activeTab: string;
  scripts: any[];
}

export const TabContent = ({ activeTab, scripts }: TabContentProps) => {
  if (activeTab === "content") {
    return (
      <div className="space-y-4 pt-4">
        <ScriptsOverviewCards />
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-semibold">Recent Campaigns</h2>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={14} />
              <span>Filter</span>
            </Button>
          </div>
          <ScriptsList scripts={scripts} />
        </div>
      </div>
    );
  }

  if (activeTab === "planning") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Campaign Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[1, 2, 3].map((week) => (
              <div key={week} className="rounded-lg border p-4">
                <h3 className="mb-3 font-medium">Week {week}</h3>
                <div className="grid gap-2">
                  {[1, 2].map((task) => (
                    <div key={task} className="flex items-center justify-between rounded-md bg-muted p-2">
                      <span className="text-sm">Campaign Task {task}</span>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "agents") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Creative Team Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Creative Director", "Content Strategist", "SEO Specialist", "Media Buyer"].map((agent) => (
              <div key={agent} className="rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{agent}</div>
                    <div className="text-xs text-muted-foreground">Creative Specialist</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Specializes in {agent.toLowerCase()} tasks within the campaign workflow
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "analytics") {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-4">
        <ContentPerformanceChart />
        <WorkflowEfficiencyChart />
      </div>
    );
  }

  if (activeTab === "workflow") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Campaign Workflows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {["Concept", "Creative", "Review", "Launch"].map((stage) => (
              <div key={stage} className="rounded-lg border p-4">
                <h3 className="mb-3 font-medium">{stage} Stage</h3>
                <div className="space-y-2">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-md bg-muted p-2">
                      <span className="text-sm">Campaign {item}</span>
                      <span className="text-xs text-muted-foreground">2 days left</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "publish") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Media Distribution Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <PublishingPlatforms />
        </CardContent>
      </Card>
    );
  }

  return null;
};
