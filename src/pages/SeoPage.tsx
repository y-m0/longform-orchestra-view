
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Search, FileText, Link as LinkIcon, Check } from "lucide-react";

export default function SeoPage() {
  const keywordScores = [
    { keyword: "digital transformation", score: 85, competition: "High", volume: "10K-100K" },
    { keyword: "marketing automation", score: 72, competition: "Medium", volume: "1K-10K" },
    { keyword: "brand strategy", score: 65, competition: "High", volume: "1K-10K" },
    { keyword: "social media marketing", score: 90, competition: "Very High", volume: ">100K" }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">SEO Tools</h1>
            <p className="text-muted-foreground">Optimize your campaigns for search engine visibility</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Keyword Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Research keyword or phrase..." className="pl-8" />
                </div>
                <Button>Analyze</Button>
              </div>

              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 border-b font-medium">
                  <div className="col-span-2">Keyword</div>
                  <div className="text-center">SEO Score</div>
                  <div className="text-center">Competition</div>
                  <div className="text-center">Search Volume</div>
                </div>
                <div className="divide-y">
                  {keywordScores.map((item, i) => (
                    <div key={i} className="grid grid-cols-5 p-4 items-center">
                      <div className="col-span-2">{item.keyword}</div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={item.score} className="h-2 w-20" />
                          <span>{item.score}</span>
                        </div>
                      </div>
                      <div className="text-center">{item.competition}</div>
                      <div className="text-center">{item.volume}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Content Analyzer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Analyze your campaign content for SEO optimization opportunities
                </p>
                <Button className="w-full">Analyze Content</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  <span>Backlink Analyzer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Track and analyze backlinks to your campaign landing pages
                </p>
                <Button className="w-full">Check Backlinks</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span>SEO Checklist</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Step-by-step SEO checklist for optimal campaign performance
                </p>
                <Button className="w-full">View Checklist</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
