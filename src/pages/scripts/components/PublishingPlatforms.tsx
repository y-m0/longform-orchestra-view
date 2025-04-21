
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "Substack", status: "connected", lastSync: "2 mins ago" },
  { name: "Medium", status: "connected", lastSync: "5 mins ago" },
  { name: "WordPress", status: "disconnected", lastSync: null },
  { name: "Ghost", status: "connected", lastSync: "1 hour ago" },
];

export const PublishingPlatforms = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {platforms.map((platform) => (
        <Card key={platform.name} className="relative">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
                <LinkIcon size={18} className="text-slate-600 dark:text-slate-300" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{platform.name}</h3>
                <div className="flex items-center gap-2">
                  {platform.status === "connected" ? (
                    <>
                      <Badge variant="success" className="bg-green-500">
                        <Check size={12} className="mr-1" />
                        Connected
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {platform.lastSync}
                      </span>
                    </>
                  ) : (
                    <Badge variant="destructive">
                      <AlertCircle size={12} className="mr-1" />
                      Disconnected
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
