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
  Settings,
  ChevronLeft,
  BarChart2,
  Link as LinkIcon,
  ShieldCheck,
  Pen,
  Search,
  Check,
} from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export function DashboardSidebar() {
  const location = useLocation();
  
  // Function to check if route is active (includes URL parameters)
  const isActiveRoute = (path: string) => {
    // Exact match (for root path)
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    
    // Partial match (for sub-paths)
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    
    return false;
  };

  const menuItems = [
    {
      title: "Overview",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Content",
      path: "/scripts",
      icon: FileText,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: BarChart2,
    },
    {
      title: "Publishing",
      path: "/publishing",
      icon: LinkIcon,
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
          <SidebarGroupLabel>Media Intelligence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} className={isActiveRoute(item.path) ? "bg-sidebar-accent/60" : ""}>
                  <SidebarMenuButton asChild>
                    <RouterLink to={item.path} className="flex items-center gap-3">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Editorial Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className={isActiveRoute("/editor") ? "bg-sidebar-accent/60" : ""}>
                <SidebarMenuButton asChild>
                  <RouterLink to="/editor" className="flex items-center gap-3">
                    <Pen size={18} />
                    <span>Writer</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className={isActiveRoute("/seo") ? "bg-sidebar-accent/60" : ""}>
                <SidebarMenuButton asChild>
                  <RouterLink to="/seo" className="flex items-center gap-3">
                    <Search size={18} />
                    <span>SEO Tools</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className={isActiveRoute("/fact-check") ? "bg-sidebar-accent/60" : ""}>
                <SidebarMenuButton asChild>
                  <RouterLink to="/fact-check" className="flex items-center gap-3">
                    <FileText size={18} />
                    <span>Fact Checker</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className={isActiveRoute("/approval") ? "bg-sidebar-accent/60" : ""}>
                <SidebarMenuButton asChild>
                  <RouterLink to="/approval" className="flex items-center gap-3">
                    <Check size={18} />
                    <span>Approval</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className={isActiveRoute("/settings") ? "bg-sidebar-accent/60" : ""}>
            <SidebarMenuButton asChild>
              <RouterLink to="/settings" className="flex items-center gap-3">
                <Settings size={18} />
                <span>Settings</span>
              </RouterLink>
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
              <span className="text-xs text-sidebar-foreground/70">Editor-in-Chief</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
