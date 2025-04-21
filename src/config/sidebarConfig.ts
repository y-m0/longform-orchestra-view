
import {
  LayoutDashboard,
  FileText,
  BarChart2,
  Link as LinkIcon,
  Pen,
  Search,
  Check,
} from "lucide-react";

export const menuItems = [
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

export const editorialTools = [
  {
    title: "Writer",
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
    title: "Approval",
    path: "/approval",
    icon: Check,
  },
];
