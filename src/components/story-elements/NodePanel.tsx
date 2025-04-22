
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, FileText, Lightbulb, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NodeType {
  type: string;
  title: string;
  icon: React.ElementType;
  color: string;
  count: number;
  description: string;
}

export function NodePanel() {
  const nodeTypes: NodeType[] = [
    {
      type: "characters",
      title: "Characters",
      icon: Users,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      count: 12,
      description: "People and entities in your narrative"
    },
    {
      type: "locations",
      title: "Locations",
      icon: MapPin,
      color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      count: 8,
      description: "Settings and places"
    },
    {
      type: "scenes",
      title: "Scenes",
      icon: FileText,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      count: 24,
      description: "Individual narrative segments"
    },
    {
      type: "concepts",
      title: "Concepts",
      icon: Lightbulb,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      count: 6,
      description: "Abstract ideas in your story"
    },
    {
      type: "themes",
      title: "Themes",
      icon: BookText,
      color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      count: 4,
      description: "Recurring motifs and themes"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {nodeTypes.map((node) => (
        <Card key={node.type}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-md ${node.color}`}>
                  <node.icon size={20} />
                </div>
                <CardTitle className="text-lg">{node.title}</CardTitle>
              </div>
              <Badge variant="outline">{node.count}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{node.description}</p>
            <Button variant="outline" size="sm" className="w-full">View {node.title}</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
