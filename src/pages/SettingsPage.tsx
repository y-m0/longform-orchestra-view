
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  // State for general settings.
  const [appName, setAppName] = useState("Media Center");
  const [saved, setSaved] = useState(false);

  // Example connections list (could be replaced with real backend later)
  const [connections, setConnections] = useState([
    { name: "Google Drive", connected: false },
    { name: "Dropbox", connected: false },
    { name: "Slack", connected: false },
  ]);

  // Example RBAC roles. Editable toggles are front-end only, for demo.
  const [roles, setRoles] = useState([
    {
      name: "Admin",
      permissions: {
        manageUsers: true,
        viewAnalytics: true,
        editSettings: true,
      },
    },
    {
      name: "Editor",
      permissions: {
        manageUsers: false,
        viewAnalytics: true,
        editSettings: false,
      },
    },
    {
      name: "Viewer",
      permissions: {
        manageUsers: false,
        viewAnalytics: true,
        editSettings: false,
      },
    },
  ]);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function handleConnectionToggle(idx: number) {
    setConnections((conns) =>
      conns.map((c, i) =>
        i === idx ? { ...c, connected: !c.connected } : c
      )
    );
  }

  function handleRolePermission(roleIdx: number, permission: keyof typeof roles[0]["permissions"]) {
    setRoles((oldRoles) =>
      oldRoles.map((role, idx) =>
        idx === roleIdx
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permission]: !role.permissions[permission],
              },
            }
          : role
      )
    );
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
              <Tabs defaultValue="general" className="w-full">
                <TabsList>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="connections">Connections</TabsTrigger>
                  <TabsTrigger value="rbac">RBAC</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
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
                </TabsContent>
                <TabsContent value="connections">
                  <h2 className="text-xl font-semibold mb-6">Integrations</h2>
                  <div className="space-y-4 max-w-md">
                    {connections.map((conn, idx) => (
                      <div
                        key={conn.name}
                        className="flex items-center justify-between border rounded px-4 py-2 bg-muted"
                      >
                        <span>{conn.name}</span>
                        <Switch
                          checked={conn.connected}
                          onCheckedChange={() => handleConnectionToggle(idx)}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-6">
                    Toggle connection status for each integration.
                  </p>
                </TabsContent>
                <TabsContent value="rbac">
                  <h2 className="text-xl font-semibold mb-6">Role-Based Access Control</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-[450px] border rounded">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-2 text-left">Role</th>
                          <th className="p-2 text-left">Manage Users</th>
                          <th className="p-2 text-left">View Analytics</th>
                          <th className="p-2 text-left">Edit Settings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roles.map((role, roleIdx) => (
                          <tr key={role.name}>
                            <td className="p-2 font-medium">{role.name}</td>
                            {Object.entries(role.permissions).map(([perm, value]) => (
                              <td key={perm} className="p-2">
                                <Switch
                                  checked={value}
                                  onCheckedChange={() =>
                                    handleRolePermission(
                                      roleIdx,
                                      perm as keyof typeof roles[0]["permissions"]
                                    )
                                  }
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground mt-6">
                    Toggle role permissions (for demonstration only, no database).
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
