
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", views: 4000, engagement: 2400 },
  { date: "Feb", views: 3000, engagement: 1398 },
  { date: "Mar", views: 2000, engagement: 9800 },
  { date: "Apr", views: 2780, engagement: 3908 },
  { date: "May", views: 1890, engagement: 4800 },
  { date: "Jun", views: 2390, engagement: 3800 },
];

const config = {
  views: {
    theme: {
      light: "#8B5CF6",
      dark: "#A78BFA",
    },
    label: "Views",
  },
  engagement: {
    theme: {
      light: "#F97316",
      dark: "#FB923C",
    },
    label: "Engagement",
  },
};

export const ContentPerformanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Performance</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ChartContainer config={config}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <ChartTooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="var(--color-views)"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="var(--color-engagement)"
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
