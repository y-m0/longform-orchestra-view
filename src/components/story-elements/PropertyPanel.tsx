
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Clock, ArrowRight, Square, BookText } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function PropertyPanel() {
  const properties = [
    {
      title: "Hierarchies of Importance",
      icon: ArrowDown,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300",
      description: "Main plot vs. subplot importance rankings",
      items: [
        { name: "Main Plot", value: 100 },
        { name: "Romantic Subplot", value: 65 },
        { name: "Character Development Arc", value: 80 },
        { name: "Mystery Element", value: 45 }
      ]
    },
    {
      title: "Temporal Relationships",
      icon: Clock,
      color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300",
      description: "Timeline management and chronological ordering",
      items: [
        { name: "Act 1: Introduction", status: "Complete" },
        { name: "Act 2: Rising Action", status: "In Progress" },
        { name: "Act 2: Midpoint", status: "Not Started" },
        { name: "Act 3: Climax", status: "Not Started" }
      ]
    },
    {
      title: "Causal Connections",
      icon: ArrowRight,
      color: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300",
      description: "Event chains and cause-effect relationships",
      items: [
        { name: "Inciting Incident → Character Decision", count: 3 },
        { name: "Character Decision → Conflict", count: 5 },
        { name: "Conflict → Resolution", count: 2 },
        { name: "Resolution → New Conflict", count: 4 }
      ]
    },
    {
      title: "Thematic Linkages",
      icon: BookText,
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300",
      description: "Motifs, symbols, and recurring themes",
      items: [
        { name: "Redemption", references: 12 },
        { name: "Loss", references: 8 },
        { name: "Identity", references: 14 },
        { name: "Growth", references: 10 }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {properties.map((property, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-md ${property.color}`}>
                <property.icon size={20} />
              </div>
              <CardTitle>{property.title}</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{property.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {property.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  {/* Hierarchies (with progress bars) */}
                  {'value' in item && (
                    <div className="w-1/2">
                      <Progress value={item.value} className="h-2" />
                    </div>
                  )}
                  {/* Timeline items (with status badges) */}
                  {'status' in item && (
                    <Badge 
                      variant="outline" 
                      className={
                        item.status === "Complete" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : 
                        item.status === "In Progress" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" : 
                        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                      }
                    >
                      {item.status}
                    </Badge>
                  )}
                  {/* Causal connections (with counts) */}
                  {'count' in item && (
                    <Badge variant="secondary">{item.count} connections</Badge>
                  )}
                  {/* Thematic linkages (with reference counts) */}
                  {'references' in item && (
                    <Badge variant="outline">{item.references} references</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
