
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Search, Upload, Image, Video, FileText, Music, Grid2x2, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const assets = [
    {
      id: 1,
      name: "Product Showcase Video",
      type: "video",
      size: "24.5 MB",
      uploaded: "April 15, 2025",
      client: "TechGiant Inc",
      tags: ["product", "showcase", "brand"]
    },
    {
      id: 2,
      name: "Summer Collection Banner",
      type: "image",
      size: "4.2 MB",
      uploaded: "April 14, 2025",
      client: "Fashion Forward",
      tags: ["social", "banner", "summer"]
    },
    {
      id: 3,
      name: "Company Overview Presentation",
      type: "document",
      size: "8.7 MB",
      uploaded: "April 10, 2025",
      client: "Global Finance Group",
      tags: ["presentation", "corporate", "overview"]
    },
    {
      id: 4,
      name: "Brand Guidelines",
      type: "document",
      size: "12.3 MB",
      uploaded: "March 28, 2025",
      client: "EcoFriendly Solutions",
      tags: ["brand", "guidelines", "design"]
    },
    {
      id: 5,
      name: "Campaign Jingle",
      type: "audio",
      size: "3.1 MB",
      uploaded: "March 25, 2025",
      client: "Retail Chain",
      tags: ["audio", "jingle", "commercial"]
    },
    {
      id: 6,
      name: "Product Lifestyle Photography",
      type: "image",
      size: "18.5 MB",
      uploaded: "March 20, 2025",
      client: "Fashion Forward",
      tags: ["lifestyle", "product", "photography"]
    }
  ];

  // Filter assets based on active tab
  const filteredAssets = activeTab === "all" 
    ? assets 
    : assets.filter(asset => asset.type === activeTab);

  // Helper function for asset icon
  const getAssetIcon = (type: string) => {
    switch(type) {
      case "image": return <Image className="h-10 w-10 text-blue-500" />;
      case "video": return <Video className="h-10 w-10 text-pink-500" />;
      case "document": return <FileText className="h-10 w-10 text-amber-500" />;
      case "audio": return <Music className="h-10 w-10 text-green-500" />;
      default: return <FileText className="h-10 w-10 text-gray-500" />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Creative Assets</h1>
              <p className="text-muted-foreground">Manage and organize all your creative assets</p>
            </div>
            <Button className="flex items-center gap-1 self-start">
              <Upload size={16} />
              <span>Upload Assets</span>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="w-full md:max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search assets..." className="pl-8 w-full" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="image">Images</TabsTrigger>
                  <TabsTrigger value="video">Videos</TabsTrigger>
                  <TabsTrigger value="document">Documents</TabsTrigger>
                  <TabsTrigger value="audio">Audio</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center border rounded-md">
                <Button 
                  variant={viewMode === "grid" ? "default" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none border-0"
                >
                  <Grid2x2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "ghost"} 
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none border-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Asset Library</CardTitle>
            </CardHeader>
            <CardContent>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredAssets.map((asset) => (
                    <Card key={asset.id} className="overflow-hidden">
                      <div className="h-40 bg-muted flex items-center justify-center">
                        {getAssetIcon(asset.type)}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium line-clamp-1">{asset.name}</h3>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">{asset.client}</span>
                          <span className="text-xs text-muted-foreground">{asset.size}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {asset.tags.slice(0, 2).map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                          {asset.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">+{asset.tags.length - 2}</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 p-4 border-b font-medium">
                    <div className="col-span-2">Asset</div>
                    <div>Type</div>
                    <div>Size</div>
                    <div>Client</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <div className="divide-y">
                    {filteredAssets.map((asset) => (
                      <div key={asset.id} className="grid grid-cols-6 p-4 items-center">
                        <div className="col-span-2 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                            {getAssetIcon(asset.type)}
                          </div>
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-xs text-muted-foreground">{asset.uploaded}</div>
                          </div>
                        </div>
                        <div className="capitalize">{asset.type}</div>
                        <div>{asset.size}</div>
                        <div>{asset.client}</div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
