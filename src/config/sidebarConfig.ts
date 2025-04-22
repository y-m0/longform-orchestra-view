
import {
  LayoutDashboard,
  FileText,
  BarChart2,
  Link as LinkIcon,
  Pen,
  Search,
  Check,
  Users,
  Image,
  Calendar,
  Folder,
  BookOpen,
  MapPin,
  Square,
} from "lucide-react";

export const menuItems = [
  {
    title: "Overview",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Campaigns",
    path: "/scripts",
    icon: FileText,
  },
  {
    title: "Story Elements",
    path: "/story-elements",
    icon: BookOpen,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart2,
  },
  {
    title: "Media Distribution",
    path: "/publishing",
    icon: LinkIcon,
  },
  {
    title: "Clients",
    path: "/clients",
    icon: Users,
  },
  {
    title: "Asset Library",
    path: "/assets",
    icon: Image,
  },
];

// Removed creativeTools export, as the toolkit section is no longer shown in the sidebar.
