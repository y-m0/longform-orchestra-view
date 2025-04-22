
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, ArrowLeft, ArrowRight, Clock, LayersLinked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EdgeType {
  type: string;
  title: string;
  icon: React.ElementType;
  color: string;
  count: number;
  description: string;
}

export function EdgePanel() {
  const edgeTypes: EdgeType[] = [
    {
      type: "relationships",
      title: "Relationships",
      icon: Link,
      color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      count: 18,
      description: "Connections between characters"
    },
    {
      type: "interactions",
      title: "Interactions",
      icon: ArrowRight,
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
      count: 32,
      description: "Direct interactions between story elements"
    },
    {
      type: "dependencies",
      title: "Dependencies",
      icon: LayersLinked,
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      count: 14,
      description: "Causal or logical dependencies"
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {edgeTypes.map((edge) => (
          <Card key={edge.type}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-md ${edge.color}`}>
                    <edge.icon size={20} />
                  </div>
                  <CardTitle className="text-lg">{edge.title}</CardTitle>
                </div>
                <Badge variant="outline">{edge.count}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{edge.description}</p>
              <Button variant="outline" size="sm" className="w-full">View {edge.title}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Connection Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 h-64 flex items-center justify-center bg-muted/20">
            <div className="text-center text-muted-foreground">
              <Link className="h-10 w-10 mx-auto mb-2" />
              <p>Interactive connection map will be displayed here</p>
              <Button size="sm" className="mt-4">Create Connection Map</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
