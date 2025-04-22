
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Globe, Moon, Sun } from "lucide-react";

export function UserPreferences() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [defaultPage, setDefaultPage] = useState("/");
  const [timezone, setTimezone] = useState("UTC");
  const [language, setLanguage] = useState("en-US");
  const [saved, setSaved] = useState(false);
  
  // Ensure theme toggle hydration only happens after mount
  useEffect(() => {
    setMounted(true);
    
    // Load saved preferences
    const savedDefaultPage = localStorage.getItem("defaultPage");
    const savedTimezone = localStorage.getItem("timezone");
    const savedLanguage = localStorage.getItem("language");
    
    if (savedDefaultPage) setDefaultPage(savedDefaultPage);
    if (savedTimezone) setTimezone(savedTimezone);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  const savePreferences = () => {
    localStorage.setItem("defaultPage", defaultPage);
    localStorage.setItem("timezone", timezone);
    localStorage.setItem("language", language);
    
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!mounted) return null;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Theme Preference</Label>
              <p className="text-sm text-muted-foreground">
                Choose between light and dark mode
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Sun size={18} />
              <Switch 
                checked={theme === "dark"} 
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} 
              />
              <Moon size={18} />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="default-page">Default Landing Page</Label>
            <Select value={defaultPage} onValueChange={setDefaultPage}>
              <SelectTrigger id="default-page">
                <SelectValue placeholder="Select default page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/">Overview</SelectItem>
                <SelectItem value="/scripts">Campaigns</SelectItem>
                <SelectItem value="/analytics">Analytics</SelectItem>
                <SelectItem value="/assets">Asset Library</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC (Coordinated Universal Time)</SelectItem>
                <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                <SelectItem value="Europe/London">London (GMT)</SelectItem>
                <SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
                <SelectItem value="Asia/Tokyo">Japan Standard Time (JST)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="flex items-center gap-2">
                <Globe size={16} />
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-US">English (US)</SelectItem>
                <SelectItem value="en-GB">English (UK)</SelectItem>
                <SelectItem value="es-ES">Español</SelectItem>
                <SelectItem value="fr-FR">Français</SelectItem>
                <SelectItem value="de-DE">Deutsch</SelectItem>
                <SelectItem value="ja-JP">日本語</SelectItem>
                <SelectItem value="zh-CN">中文 (简体)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              Note: UI translation not fully implemented yet
            </p>
          </div>
          
          <Button onClick={savePreferences}>
            Save Preferences
            {saved && <span className="ml-2 text-green-500">✓</span>}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
