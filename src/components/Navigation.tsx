import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b-4 border-primary">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary flex items-center justify-center transform -rotate-6 hover:rotate-6 transition-transform">
            <Zap className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold uppercase tracking-wider bg-gradient-primary bg-clip-text text-transparent">
            CYBERTOOLS
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-foreground hover:text-primary font-semibold uppercase text-sm tracking-wide transition-colors">
            TOOLS
          </button>
          <button className="text-foreground hover:text-primary font-semibold uppercase text-sm tracking-wide transition-colors">
            ABOUT
          </button>
          <button className="px-6 py-3 bg-gradient-accent text-accent-foreground font-bold uppercase text-sm tracking-wide hover:shadow-neon transition-all transform hover:scale-105">
            ENTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
