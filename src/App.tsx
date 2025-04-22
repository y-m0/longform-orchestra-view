
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScriptsPage from "./pages/ScriptsPage";
import FactCheckPage from "./pages/FactCheckPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import PublishingPage from "./pages/PublishingPage";
import SettingsPage from "./pages/SettingsPage";
import EditorPage from "./pages/EditorPage";
import SeoPage from "./pages/SeoPage";
import ApprovalPage from "./pages/ApprovalPage";
import ClientsPage from "./pages/ClientsPage";
import AssetsPage from "./pages/AssetsPage";
import BriefsPage from "./pages/BriefsPage";
import PlanningPage from "./pages/PlanningPage";
import StoryElementsPage from "./pages/StoryElementsPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/fact-check" element={<FactCheckPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/publishing" element={<PublishingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/seo" element={<SeoPage />} />
            <Route path="/approval" element={<ApprovalPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/briefs" element={<BriefsPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/story-elements" element={<StoryElementsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
