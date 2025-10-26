import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ToolBox
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Tools
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            About
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
