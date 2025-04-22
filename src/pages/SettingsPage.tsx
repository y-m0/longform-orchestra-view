
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  // "Application Name" is editable by the user.
  const [appName, setAppName] = useState("Media Center");
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-4 max-w-md">
                <div>
                  <label htmlFor="app-name" className="block text-sm font-medium mb-1">
                    Application Name
                  </label>
                  <Input
                    id="app-name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button type="submit">Save</Button>
                {saved && (
                  <p className="text-green-600 text-sm mt-2">Settings saved!</p>
                )}
              </form>
              <p className="text-muted-foreground mt-8">
                Configure your application settings here.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
