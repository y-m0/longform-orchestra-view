
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, RefreshCw, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

interface Connection {
  id: string;
  name: string;
  type: string;
  status: "connected" | "disconnected" | "error";
  lastSync?: string;
  accountName?: string;
  mappings?: Array<{
    externalId: string;
    internalId: string;
    name: string;
  }>;
}

export function DataConnections() {
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: "ga4",
      name: "Google Analytics",
      type: "analytics",
      status: "connected",
      lastSync: "2025-04-20T14:30:00Z",
      accountName: "Media Center Analytics",
      mappings: [
        { externalId: "GA-12345", internalId: "camp-001", name: "Q1 Campaign" },
        { externalId: "GA-23456", internalId: "camp-002", name: "Product Launch" },
      ]
    },
    {
      id: "meta",
      name: "Meta Ads",
      type: "advertising",
      status: "disconnected"
    },
    {
      id: "dropbox",
      name: "Dropbox",
      type: "storage",
      status: "error"
    }
  ]);
  
  const [newMapping, setNewMapping] = useState({
    connectionId: "",
    externalId: "",
    internalId: "",
    name: ""
  });

  const handleConnect = (id: string) => {
    // In a real app, this would initiate OAuth flow or API connection
    toast.info(`Initiating connection to ${connections.find(c => c.id === id)?.name}...`);
    
    setTimeout(() => {
      setConnections(connections.map(conn => 
        conn.id === id 
          ? { 
              ...conn, 
              status: "connected", 
              lastSync: new Date().toISOString(),
              accountName: `Demo ${conn.name} Account`
            } 
          : conn
      ));
      toast.success(`Connected to ${connections.find(c => c.id === id)?.name}!`);
    }, 1500);
  };
  
  const handleDisconnect = (id: string) => {
    setConnections(connections.map(conn => 
      conn.id === id 
        ? { ...conn, status: "disconnected", lastSync: undefined, accountName: undefined } 
        : conn
    ));
    toast.success(`Disconnected from ${connections.find(c => c.id === id)?.name}`);
  };
  
  const handleSync = (id: string) => {
    toast.info(`Syncing data from ${connections.find(c => c.id === id)?.name}...`);
    
    setTimeout(() => {
      setConnections(connections.map(conn => 
        conn.id === id 
          ? { ...conn, lastSync: new Date().toISOString() } 
          : conn
      ));
      toast.success(`Data synchronized successfully!`);
    }, 2000);
  };
  
  const handleAddMapping = () => {
    if (!newMapping.connectionId || !newMapping.externalId || !newMapping.internalId) {
      toast.error("Please fill all required fields");
      return;
    }
    
    setConnections(connections.map(conn => 
      conn.id === newMapping.connectionId
        ? { 
            ...conn, 
            mappings: [
              ...(conn.mappings || []), 
              { 
                externalId: newMapping.externalId, 
                internalId: newMapping.internalId,
                name: newMapping.name || `Mapping ${(conn.mappings?.length || 0) + 1}`
              }
            ] 
          }
        : conn
    ));
    
    setNewMapping({
      connectionId: "",
      externalId: "",
      internalId: "",
      name: ""
    });
    
    toast.success("ID mapping added successfully");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {connections.map((connection) => (
              <div key={connection.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">{connection.name}</h3>
                    {connection.status === "connected" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <CheckCircle size={12} />
                        Connected
                      </span>
                    )}
                    {connection.status === "disconnected" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        <LinkIcon size={12} />
                        Not Connected
                      </span>
                    )}
                    {connection.status === "error" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        <XCircle size={12} />
                        Connection Error
                      </span>
                    )}
                  </div>
                  
                  <div>
                    {connection.status !== "connected" ? (
                      <Button size="sm" onClick={() => handleConnect(connection.id)}>
                        Connect
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSync(connection.id)}
                        >
                          <RefreshCw size={14} className="mr-1" />
                          Sync Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleDisconnect(connection.id)}
                        >
                          Disconnect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                {connection.status === "connected" && (
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Account:</span>
                        <span>{connection.accountName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Last synchronized:</span>
                        <span>
                          {connection.lastSync ? new Date(connection.lastSync).toLocaleString() : 'Never'}
                        </span>
                      </div>
                    </div>
                    
                    {/* ID Mappings */}
                    {connection.mappings && connection.mappings.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">ID Mappings</h4>
                        <div className="border rounded overflow-hidden">
                          <div className="grid grid-cols-3 bg-muted p-2 text-xs font-medium">
                            <div>External ID</div>
                            <div>Internal ID</div>
                            <div>Campaign Name</div>
                          </div>
                          {connection.mappings.map((mapping, index) => (
                            <div 
                              key={index} 
                              className="grid grid-cols-3 p-2 text-xs border-t"
                            >
                              <div>{mapping.externalId}</div>
                              <div>{mapping.internalId}</div>
                              <div>{mapping.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* ID Mapping form */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Add ID Mapping</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <Label htmlFor="connection">Connection</Label>
              <select
                id="connection"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={newMapping.connectionId}
                onChange={(e) => setNewMapping({...newMapping, connectionId: e.target.value})}
              >
                <option value="">Select connection</option>
                {connections
                  .filter(c => c.status === "connected")
                  .map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <Label htmlFor="external-id">External ID</Label>
              <Input
                id="external-id"
                placeholder="e.g., GA-12345"
                value={newMapping.externalId}
                onChange={(e) => setNewMapping({...newMapping, externalId: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="internal-id">Internal ID</Label>
              <Input
                id="internal-id"
                placeholder="e.g., camp-003"
                value={newMapping.internalId}
                onChange={(e) => setNewMapping({...newMapping, internalId: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="mapping-name">Campaign Name</Label>
              <Input
                id="mapping-name"
                placeholder="Summer Sale"
                value={newMapping.name}
                onChange={(e) => setNewMapping({...newMapping, name: e.target.value})}
              />
            </div>
            <div className="flex items-end">
              <Button 
                className="w-full"
                disabled={!newMapping.connectionId || !newMapping.externalId || !newMapping.internalId} 
                onClick={handleAddMapping}
              >
                Add Mapping
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
