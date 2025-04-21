
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FileText, Image, Link as LinkIcon, Edit } from "lucide-react";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState("copy");

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Creator Studio</h1>
            <p className="text-muted-foreground">Craft compelling campaign content and creative assets</p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="copy" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Ad Copy
              </TabsTrigger>
              <TabsTrigger value="visuals" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Visuals
              </TabsTrigger>
              <TabsTrigger value="landing" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Landing Pages
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                Social
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="copy" className="mt-6">
              <Card className="mb-6">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle>Copy Editor</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Templates</Button>
                    <Button variant="outline" size="sm">AI Assist</Button>
                    <Button size="sm">Save Draft</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md p-4 min-h-[400px]">
                    <textarea 
                      className="w-full h-full min-h-[360px] bg-transparent outline-none resize-none" 
                      placeholder="Start writing your ad copy here..."
                    ></textarea>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Headlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["Discover the Difference", "Transform Your Experience", "Unlock New Possibilities"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Edit size={14} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Taglines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["Your journey begins here", "Excellence in every detail", "The smart choice"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Edit size={14} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">CTAs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["Get started today", "Learn more", "Sign up now"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Edit size={14} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="visuals" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visual Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <Image className="text-muted-foreground" size={32} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button>Upload New Asset</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="landing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Landing Page Builder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md p-4 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <LinkIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-2 font-medium">Landing Page Builder</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create optimized landing pages for your campaigns
                      </p>
                      <Button className="mt-4">Start Building</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Instagram", "Facebook", "Twitter", "LinkedIn", "TikTok", "Pinterest"].map((platform) => (
                      <div key={platform} className="border rounded-md p-4">
                        <h3 className="font-medium">{platform}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Create content for {platform}</p>
                        <Button variant="outline" className="mt-4 w-full">Open Editor</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}
