
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Plus, Building, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const clients = [
    {
      id: 1, 
      name: "TechGiant Inc", 
      industry: "Technology", 
      contact: "John Smith",
      phone: "555-123-4567",
      email: "j.smith@techgiant.com",
      activeCampaigns: 3,
      status: "active"
    },
    {
      id: 2,
      name: "Fashion Forward",
      industry: "Retail",
      contact: "Emma Johnson",
      phone: "555-987-6543",
      email: "emma@fashionforward.com",
      activeCampaigns: 1,
      status: "active"
    },
    {
      id: 3,
      name: "EcoFriendly Solutions",
      industry: "Environmental",
      contact: "Michael Brown",
      phone: "555-456-7890",
      email: "m.brown@ecofriendly.com",
      activeCampaigns: 0,
      status: "inactive"
    },
    {
      id: 4,
      name: "Global Finance Group",
      industry: "Finance",
      contact: "Sarah Wilson",
      phone: "555-234-5678",
      email: "swilson@globalfinance.com",
      activeCampaigns: 2,
      status: "active"
    }
  ];

  const filteredClients = activeTab === "all" 
    ? clients 
    : clients.filter(client => client.status === activeTab);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Client Accounts</h1>
              <p className="text-muted-foreground">Manage your agency clients and their campaigns</p>
            </div>
            <Button className="flex items-center gap-1 self-start">
              <Plus size={16} />
              <span>New Client</span>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-8 w-full" />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-xs">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  All Clients
                </TabsTrigger>
                <TabsTrigger value="active" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20">
                  Active Clients
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Client Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-5 p-4 border-b font-medium">
                  <div className="md:col-span-2">Client</div>
                  <div className="hidden md:block">Contact</div>
                  <div className="hidden md:block">Industry</div>
                  <div className="text-right md:text-center">Actions</div>
                </div>
                <div className="divide-y">
                  {filteredClients.map((client) => (
                    <div key={client.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{client.name}</div>
                            <div className="text-sm text-muted-foreground md:hidden">{client.industry}</div>
                            <div className="flex items-center gap-2 md:hidden mt-1">
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{client.activeCampaigns} campaigns</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:block">
                        <div className="text-sm">{client.contact}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{client.email}</span>
                        </div>
                      </div>
                      
                      <div className="hidden md:block">
                        <div className="text-sm">{client.industry}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{client.activeCampaigns} active campaigns</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end md:justify-center gap-2 mt-4 md:mt-0">
                        <Button variant="outline" size="sm">Profile</Button>
                        <Button size="sm">Campaigns</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
}
