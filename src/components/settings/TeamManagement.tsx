
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserPlus, UserCheck, UserX } from "lucide-react";
import { toast } from "sonner";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending';
  permissions: {
    canEditCampaigns: boolean;
    canViewAnalytics: boolean; 
    canManageAssets: boolean;
    canInviteUsers: boolean;
    canConfigureSettings: boolean;
  };
};

export function TeamManagement() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Jane Cooper",
      email: "jane@example.com",
      role: "admin",
      status: "active",
      permissions: {
        canEditCampaigns: true,
        canViewAnalytics: true,
        canManageAssets: true,
        canInviteUsers: true,
        canConfigureSettings: true
      }
    },
    {
      id: "2",
      name: "Alex Rivera",
      email: "alex@example.com",
      role: "creative",
      status: "active",
      permissions: {
        canEditCampaigns: true,
        canViewAnalytics: false,
        canManageAssets: true,
        canInviteUsers: false,
        canConfigureSettings: false
      }
    },
    {
      id: "3",
      name: "Taylor Kim",
      email: "taylor@example.com",
      role: "analyst",
      status: "pending",
      permissions: {
        canEditCampaigns: false,
        canViewAnalytics: true,
        canManageAssets: false,
        canInviteUsers: false,
        canConfigureSettings: false
      }
    }
  ]);

  const handleInvite = () => {
    if (!inviteEmail.trim()) {
      toast.error("Please enter an email address");
      return;
    }
    
    // Email validation
    if (!inviteEmail.includes('@') || !inviteEmail.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Create new team member with default permissions based on role
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: inviteEmail.split('@')[0],
      email: inviteEmail,
      role: inviteRole,
      status: 'pending',
      permissions: {
        canEditCampaigns: inviteRole !== 'guest',
        canViewAnalytics: ['admin', 'analyst'].includes(inviteRole),
        canManageAssets: ['admin', 'creative'].includes(inviteRole),
        canInviteUsers: inviteRole === 'admin',
        canConfigureSettings: inviteRole === 'admin'
      }
    };

    setTeamMembers([...teamMembers, newMember]);
    setInviteEmail("");
    
    // Show success message
    toast.success("Invitation sent!", {
      description: `${inviteEmail} has been invited as a ${inviteRole}.`
    });
  };

  const updatePermission = (memberId: string, permission: keyof TeamMember['permissions'], value: boolean) => {
    setTeamMembers(
      teamMembers.map((member) => 
        member.id === memberId 
          ? { 
              ...member, 
              permissions: { 
                ...member.permissions, 
                [permission]: value 
              } 
            } 
          : member
      )
    );
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
    toast.success("Team member removed");
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Input 
            placeholder="Email address" 
            value={inviteEmail} 
            onChange={e => setInviteEmail(e.target.value)}
            className="flex-1"
          />
          <Select value={inviteRole} onValueChange={setInviteRole}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="creative">Creative Specialist</SelectItem>
              <SelectItem value="analyst">Analyst</SelectItem>
              <SelectItem value="guest">Guest</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleInvite} className="whitespace-nowrap">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite User
          </Button>
        </div>

        <div className="border rounded-md">
          <div className="grid grid-cols-12 py-3 px-4 bg-muted text-sm font-medium">
            <div className="col-span-3">Name & Email</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-5">Permissions</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="grid grid-cols-12 py-4 px-4 border-t items-center text-sm hover:bg-muted/30"
            >
              <div className="col-span-3 flex flex-col">
                <span className="font-medium">{member.name}</span>
                <span className="text-muted-foreground">{member.email}</span>
                {member.status === 'pending' && (
                  <span className="text-xs text-amber-500 mt-1">Invitation pending</span>
                )}
              </div>
              
              <div className="col-span-2">
                <span className="capitalize">{member.role}</span>
              </div>
              
              <div className="col-span-5 space-y-2">
                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                  <div className="flex items-center gap-2">
                    <Switch 
                      id={`edit-${member.id}`}
                      checked={member.permissions.canEditCampaigns} 
                      onCheckedChange={(checked) => updatePermission(member.id, 'canEditCampaigns', checked)}
                      disabled={member.role === 'admin'}
                    />
                    <Label htmlFor={`edit-${member.id}`} className="text-xs">
                      Edit Campaigns
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch 
                      id={`analytics-${member.id}`}
                      checked={member.permissions.canViewAnalytics} 
                      onCheckedChange={(checked) => updatePermission(member.id, 'canViewAnalytics', checked)}
                      disabled={member.role === 'admin'}
                    />
                    <Label htmlFor={`analytics-${member.id}`} className="text-xs">
                      View Analytics
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch 
                      id={`assets-${member.id}`}
                      checked={member.permissions.canManageAssets} 
                      onCheckedChange={(checked) => updatePermission(member.id, 'canManageAssets', checked)}
                      disabled={member.role === 'admin'}
                    />
                    <Label htmlFor={`assets-${member.id}`} className="text-xs">
                      Manage Assets
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch 
                      id={`invite-${member.id}`}
                      checked={member.permissions.canInviteUsers} 
                      onCheckedChange={(checked) => updatePermission(member.id, 'canInviteUsers', checked)}
                      disabled={member.role === 'admin'}
                    />
                    <Label htmlFor={`invite-${member.id}`} className="text-xs">
                      Invite Users
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 flex justify-end gap-2">
                {member.status === 'pending' ? (
                  <Button variant="ghost" size="sm">
                    <UserCheck className="h-4 w-4 mr-1" /> 
                    Resend
                  </Button>
                ) : (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" disabled={member.role === 'admin'}>
                        <UserX className="h-4 w-4 mr-1" /> 
                        Remove
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Remove Team Member</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to remove {member.name}? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button 
                          variant="destructive" 
                          onClick={() => removeTeamMember(member.id)}
                        >
                          Remove
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
