
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

export const creativeTools = [
  {
    title: "Creator Studio",
    path: "/editor",
    icon: Pen,
  },
  {
    title: "SEO Tools",
    path: "/seo",
    icon: Search,
  },
  {
    title: "Fact Checker",
    path: "/fact-check",
    icon: FileText,
  },
  {
    title: "Campaign Approval",
    path: "/approval",
    icon: Check,
  },
  {
    title: "Brief Templates",
    path: "/briefs",
    icon: Folder,
  },
  {
    title: "Media Planning",
    path: "/planning",
    icon: Calendar,
  },
];
