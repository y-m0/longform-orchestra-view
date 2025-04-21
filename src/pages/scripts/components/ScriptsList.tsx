
import { FileText, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Script {
  id: number;
  title: string;
  status: string;
  lastModified: string;
  author: string;
  pages: number;
  workflow: string;
  progress: number;
  agents: string[];
}

interface ScriptsListProps {
  scripts: Script[];
}

export const ScriptsList = ({ scripts }: ScriptsListProps) => {
  return (
    <div className="divide-y">
      {scripts.map((script) => (
        <div key={script.id} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <FileText size={18} />
            </div>
            <div className="flex-1">
              <div className="font-medium">{script.title}</div>
              <div className="text-xs text-muted-foreground">
                {script.author} · {script.pages} assets
              </div>
              <div className="mt-2">
                <Progress value={script.progress} className="h-1.5 w-full" />
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{script.workflow} ({script.progress}%)</span>
                  <div className="flex gap-1">
                    {script.agents.map((agent) => (
                      <span key={agent} className="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Updated {script.lastModified}
            </div>
            <div
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                ${script.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                script.status === "In Review" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                script.status === "Draft" ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" :
                "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}
            >
              {script.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
