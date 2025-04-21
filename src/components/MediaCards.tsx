
import { Play, Clock, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const mediaProjects = [
  {
    id: 1,
    title: "The Hidden Valley Documentary",
    thumbnail: "https://images.unsplash.com/photo-1618609255910-ae61b4c40542?q=80&w=500&auto=format&fit=crop",
    category: "Documentary",
    progress: 65,
    team: 8,
    duration: "86 min",
    status: "In Production",
  },
  {
    id: 2,
    title: "Eternal Echoes Series",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=500&auto=format&fit=crop",
    category: "Series",
    progress: 42,
    team: 12,
    duration: "8 episodes",
    status: "In Production",
  },
  {
    id: 3,
    title: "Beyond the Horizon",
    thumbnail: "https://images.unsplash.com/photo-1605292356963-b8c9b0862acc?q=80&w=500&auto=format&fit=crop",
    category: "Film",
    progress: 90,
    team: 15,
    duration: "124 min",
    status: "Post-Production",
  },
  {
    id: 4,
    title: "Urban Legends",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=500&auto=format&fit=crop",
    category: "Series",
    progress: 20,
    team: 9,
    duration: "6 episodes",
    status: "Pre-Production",
  },
];

export function MediaCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {mediaProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="relative h-40">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Button 
              size="icon" 
              className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
            >
              <Play className="h-4 w-4" />
            </Button>
            <Badge 
              className="absolute left-2 top-2 bg-black/40 text-xs backdrop-blur-md"
              variant="secondary"
            >
              {project.category}
            </Badge>
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-medium">{project.title}</h3>
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="mt-1" />
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <Badge 
                variant={
                  project.status === "In Production" 
                    ? "default" 
                    : project.status === "Post-Production" 
                      ? "secondary" 
                      : "outline"
                }
                className="text-xs"
              >
                {project.status}
              </Badge>
            </div>
          </CardContent>
          
          <CardFooter className="flex items-center justify-between border-t p-4 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{project.team} team members</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{project.duration}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
