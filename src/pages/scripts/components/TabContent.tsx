import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LinkIcon, Filter, Users } from "lucide-react";
import { ScriptsOverviewCards } from "./ScriptsOverviewCards";
import { ScriptsList } from "./ScriptsList";
import { Button } from "@/components/ui/button";

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
            <h2 className="font-semibold">Recent Articles</h2>
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
          <CardTitle>Content Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-muted-foreground py-8">
            Calendar view for editorial planning will appear here
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "agents") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Agent Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Writer", "Editor", "SEO Specialist", "Fact-Checker"].map((agent) => (
              <div key={agent} className="rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{agent}</div>
                    <div className="text-xs text-muted-foreground">AI Assistant</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Specializes in content {agent.toLowerCase()} tasks within the editorial workflow
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
        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center text-sm text-muted-foreground">
              Performance charts will appear here
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Workflow Efficiency</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center text-sm text-muted-foreground">
              Workflow metrics charts will appear here
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === "workflow") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Editorial Workflows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-muted-foreground py-8">
            Workflow management interface will appear here
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "publish") {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Publishing Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {["Substack", "Medium", "WordPress", "Ghost"].map((platform) => (
              <div key={platform} className="flex items-center gap-3 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                  <LinkIcon size={18} className="text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <div className="font-medium">{platform}</div>
                  <div className="text-xs text-muted-foreground">
                    Connect to publish articles
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};
