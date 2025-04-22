
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Settings } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { SidebarMenuItems } from "./sidebar/SidebarMenuItems";
import { UserProfile } from "./sidebar/UserProfile";

export function DashboardSidebar() {
  const location = useLocation();
  
  const isActiveRoute = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    
    return false;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-6 py-4 text-xl font-bold">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Media Center
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenuItems isActiveRoute={isActiveRoute} />
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
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
