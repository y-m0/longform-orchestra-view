
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const data = [
  { stage: "Draft", time: 24, completed: 18 },
  { stage: "Review", time: 12, completed: 15 },
  { stage: "Edit", time: 8, completed: 12 },
  { stage: "Final", time: 6, completed: 10 },
];

const config = {
  time: {
    theme: {
      light: "#8B5CF6",
      dark: "#A78BFA",
    },
    label: "Avg. Time (hours)",
  },
  completed: {
    theme: {
      light: "#F97316",
      dark: "#FB923C",
    },
    label: "Completed Tasks",
  },
};

export const WorkflowEfficiencyChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workflow Efficiency</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer config={config}>
          <BarChart data={data}>
            <XAxis dataKey="stage" />
            <YAxis />
            <ChartTooltip />
            <Bar dataKey="time" fill="var(--color-time)" />
            <Bar dataKey="completed" fill="var(--color-completed)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
