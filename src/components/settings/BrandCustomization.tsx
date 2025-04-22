
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export function BrandCustomization() {
  const [brandName, setBrandName] = useState("Media Center");
  const [primaryColor, setPrimaryColor] = useState("#7E69AB");
  const [secondaryColor, setSecondaryColor] = useState("#0EA5E9");
  const [logoUrl, setLogoUrl] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const [entityMappings, setEntityMappings] = useState([
    { original: "Campaigns", custom: "Campaigns" },
    { original: "Assets", custom: "Assets" },
    { original: "Clients", custom: "Clients" },
  ]);
  
  useEffect(() => {
    // Load saved branding if available
    const savedBrandName = localStorage.getItem("brandName");
    const savedPrimaryColor = localStorage.getItem("primaryColor");
    const savedSecondaryColor = localStorage.getItem("secondaryColor");
    const savedLogoUrl = localStorage.getItem("logoUrl");
    const savedEntityMappings = localStorage.getItem("entityMappings");
    
    if (savedBrandName) setBrandName(savedBrandName);
    if (savedPrimaryColor) setPrimaryColor(savedPrimaryColor);
    if (savedSecondaryColor) setSecondaryColor(savedSecondaryColor);
    if (savedLogoUrl) {
      setLogoUrl(savedLogoUrl);
      setLogoPreview(savedLogoUrl);
    }
    if (savedEntityMappings) {
      try {
        setEntityMappings(JSON.parse(savedEntityMappings));
      } catch (e) {
        console.error("Error parsing saved entity mappings", e);
      }
    }
    
    // Apply colors for preview
    updateCssVariables(savedPrimaryColor || primaryColor, savedSecondaryColor || secondaryColor);
  }, []);
  
  const updateCssVariables = (primary: string, secondary: string) => {
    // Convert hex to HSL for CSS variables
    document.documentElement.style.setProperty('--primary-temp', primary);
    document.documentElement.style.setProperty('--secondary-temp', secondary);
    
    // In a real implementation, this would properly convert to HSL
    // and update the CSS variables permanently
  };
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // In a real app, this would upload to a server
    // For this example, we'll use a local URL
    const url = URL.createObjectURL(file);
    setLogoPreview(url);
    
    // Simulate upload complete
    setTimeout(() => {
      setLogoUrl(url);
      toast.success("Logo uploaded successfully");
    }, 1000);
  };
  
  const handleEntityChange = (index: number, value: string) => {
    const updatedMappings = [...entityMappings];
    updatedMappings[index].custom = value;
    setEntityMappings(updatedMappings);
  };
  
  const applyBranding = () => {
    updateCssVariables(primaryColor, secondaryColor);
    
    // Save to localStorage for persistence
    localStorage.setItem("brandName", brandName);
    localStorage.setItem("primaryColor", primaryColor);
    localStorage.setItem("secondaryColor", secondaryColor);
    localStorage.setItem("logoUrl", logoUrl);
    localStorage.setItem("entityMappings", JSON.stringify(entityMappings));
    
    toast.success("Brand settings applied successfully!");
  };
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Brand Identity</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="brand-name">Company/Product Name</Label>
                <Input 
                  id="brand-name" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="mb-4 mt-1"
                />
                
                <Label htmlFor="primary-color">Primary Brand Color</Label>
                <div className="flex gap-2 mt-1 mb-4">
                  <div className="w-10 h-10 rounded border" style={{ backgroundColor: primaryColor }}></div>
                  <Input
                    id="primary-color"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
                
                <Label htmlFor="secondary-color">Secondary Brand Color</Label>
                <div className="flex gap-2 mt-1">
                  <div className="w-10 h-10 rounded border" style={{ backgroundColor: secondaryColor }}></div>
                  <Input
                    id="secondary-color"
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="logo-upload">Company Logo</Label>
                <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center">
                  {logoPreview ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={logoPreview} 
                        alt="Company logo" 
                        className="max-h-32 max-w-full mb-4 object-contain"
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => document.getElementById('logo-file')?.click()}
                      >
                        Change Logo
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="bg-muted rounded-full p-4 mb-2">
                        <Upload size={24} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop or click to upload
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => document.getElementById('logo-file')?.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  )}
                  <input 
                    id="logo-file" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleLogoChange}
                    className="hidden" 
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Recommended: PNG or SVG with transparent background, 400x100px
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Entity Name Customization</h3>
            <div className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-2 bg-muted p-3">
                <div className="font-medium">Default Term</div>
                <div className="font-medium">Custom Term</div>
              </div>
              {entityMappings.map((mapping, index) => (
                <div key={index} className="grid grid-cols-2 p-3 border-t items-center">
                  <div>{mapping.original}</div>
                  <div>
                    <Input
                      value={mapping.custom}
                      onChange={(e) => handleEntityChange(index, e.target.value)}
                      placeholder={`Custom name for ${mapping.original}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Customize entity names to match your organization's terminology.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={applyBranding}>Apply Branding</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
