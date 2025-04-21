
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, FileText, Users } from "lucide-react";

export const ScriptsOverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">24</span>
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <span>+3</span>
              <span>this month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">6</span>
            <div className="flex items-center text-amber-600 dark:text-amber-400">
              <Clock size={14} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">8</span>
            <FileText size={16} className="text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
