
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  Video,
  Image,
  Calendar,
  Clock,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export function DashboardSidebar() {
  const menuItems = [
    {
      title: "Overview",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Scripts",
      path: "/scripts",
      icon: FileText,
    },
    {
      title: "Video",
      path: "/video",
      icon: Video,
    },
    {
      title: "Media Assets",
      path: "/assets",
      icon: Image,
    },
    {
      title: "Schedule",
      path: "/schedule",
      icon: Calendar,
    },
    {
      title: "Timeline",
      path: "/timeline",
      icon: Clock,
    },
    {
      title: "Team",
      path: "/team",
      icon: Users,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-6 py-4 text-xl font-bold">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Media Nexus
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Orchestration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/settings" className="flex items-center gap-3">
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mt-2 p-2">
          <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-sidebar-foreground/70">Director</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
