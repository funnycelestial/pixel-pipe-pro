import { Globe, Download, Maximize2, ImageIcon, FileText, Scissors, Zap, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import ToolCard from "@/components/ToolCard";
import heroBg from "@/assets/hero-bg.jpg";

const tools = [
  {
    title: "WEB SCRAPER",
    description: "Extract data from websites instantly",
    icon: Globe,
    rotation: "rotate-2",
    color: "border-primary",
  },
  {
    title: "VIDEO DL",
    description: "Download from any platform",
    icon: Download,
    rotation: "-rotate-1",
    color: "border-accent",
  },
  {
    title: "COMPRESSOR",
    description: "Shrink files without quality loss",
    icon: Maximize2,
    rotation: "rotate-3",
    color: "border-secondary",
  },
  {
    title: "IMG CONVERT",
    description: "Transform image formats instantly",
    icon: ImageIcon,
    rotation: "-rotate-2",
    color: "border-primary",
  },
  {
    title: "PDF TOOLS",
    description: "Manipulate PDFs with ease",
    icon: FileText,
    rotation: "rotate-1",
    color: "border-accent",
  },
  {
    title: "URL SHORT",
    description: "Create tiny links + analytics",
    icon: Scissors,
    rotation: "-rotate-3",
    color: "border-secondary",
  },
  {
    title: "IMG OPTIMIZE",
    description: "Web-ready images in seconds",
    icon: Zap,
    rotation: "rotate-2",
    color: "border-primary",
  },
  {
    title: "CODE FORMAT",
    description: "Beautify code automatically",
    icon: Code,
    rotation: "-rotate-1",
    color: "border-accent",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroBg} 
            alt="Cyber background" 
            className="w-full h-full object-cover animate-float"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30 animate-glow" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent rounded-full blur-3xl opacity-30 animate-glow" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="px-6 py-3 bg-primary/20 text-primary text-sm font-bold uppercase tracking-wider border-4 border-primary transform -rotate-2 inline-block">
                CYBER TOOLKIT 2025
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight uppercase tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                BREAK THE
              </span>
              <span className="text-foreground block transform -rotate-1">INTERNET</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
              No BS. No signups. Just tools that actually work. 
              <span className="text-accent"> Free forever.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="px-10 py-5 bg-gradient-accent text-accent-foreground font-bold uppercase tracking-wide hover:shadow-neon transition-all transform hover:scale-110 border-4 border-accent-foreground/20">
                START NOW
              </button>
              <button className="px-10 py-5 bg-transparent text-foreground font-bold uppercase tracking-wide border-4 border-foreground hover:bg-foreground hover:text-background transition-all transform hover:scale-110">
                BROWSE TOOLS
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-foreground uppercase tracking-tight">
              CHOOSE YOUR <span className="bg-gradient-primary bg-clip-text text-transparent">WEAPON</span>
            </h2>
            <p className="text-muted-foreground text-lg uppercase tracking-wide font-semibold">
              8 TOOLS • ZERO LIMITS • INFINITE POSSIBILITIES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                rotation={tool.rotation}
                color={tool.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t-4 border-primary py-12 mt-20 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-bold uppercase tracking-wide">
            © 2025 CYBERTOOLS • BUILT DIFFERENT
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
