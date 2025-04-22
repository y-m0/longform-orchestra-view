
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserPreferences } from "@/components/settings/UserPreferences";
import { TeamManagement } from "@/components/settings/TeamManagement";
import { DataConnections } from "@/components/settings/DataConnections";
import { BrandCustomization } from "@/components/settings/BrandCustomization";
import { ThemeToggle } from "@/components/theme-toggle";
import { Cog, Users, Link as LinkIcon, Palette } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("user-preferences");

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Settings</h1>
            <ThemeToggle />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                  <TabsTrigger value="user-preferences" className="flex items-center gap-2">
                    <Cog size={16} />
                    <span className="hidden sm:inline">User Preferences</span>
                    <span className="sm:hidden">Preferences</span>
                  </TabsTrigger>
                  <TabsTrigger value="team-management" className="flex items-center gap-2">
                    <Users size={16} />
                    <span className="hidden sm:inline">Team Management</span>
                    <span className="sm:hidden">Team</span>
                  </TabsTrigger>
                  <TabsTrigger value="data-connections" className="flex items-center gap-2">
                    <LinkIcon size={16} />
                    <span className="hidden sm:inline">Data Connections</span>
                    <span className="sm:hidden">Connections</span>
                  </TabsTrigger>
                  <TabsTrigger value="brand-customization" className="flex items-center gap-2">
                    <Palette size={16} />
                    <span className="hidden sm:inline">Brand Customization</span>
                    <span className="sm:hidden">Branding</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="user-preferences" className="space-y-4">
                  <UserPreferences />
                </TabsContent>
                
                <TabsContent value="team-management">
                  <TeamManagement />
                </TabsContent>
                
                <TabsContent value="data-connections">
                  <DataConnections />
                </TabsContent>
                
                <TabsContent value="brand-customization">
                  <BrandCustomization />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
