
import { menuItems } from "@/config/sidebarConfig";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface SidebarMenuItemsProps {
  isActiveRoute: (path: string) => boolean;
}

export function SidebarMenuItems({ isActiveRoute }: SidebarMenuItemsProps) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Studio Dashboard</SidebarGroupLabel>
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
    </>
  );
}
