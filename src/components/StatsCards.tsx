
import { Clock, FileText, Users, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsCards() {
  const stats = [
    {
      title: "Active Articles",
      value: "24",
      change: "+3",
      icon: FileText,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Total Agents",
      value: "12",
      change: "+2",
      icon: Users,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      title: "Workflow Runs",
      value: "168",
      change: "+14",
      icon: Clock,
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    },
    {
      title: "Avg. Readability",
      value: "72",
      change: "+4",
      icon: BarChart2,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-xs text-green-500">{stat.change}</span>
                </div>
              </div>
              <div className={`rounded-lg p-2 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
