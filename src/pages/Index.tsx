import { Globe, Download, Maximize2, ImageIcon, FileText, Scissors, Zap, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import ToolCard from "@/components/ToolCard";
import heroBg from "@/assets/hero-bg.jpg";

const tools = [
  {
    title: "Web Scraper",
    description: "Extract data from any website with our powerful scraping tool. Fast, reliable, and easy to use.",
    icon: Globe,
  },
  {
    title: "Video Downloader",
    description: "Download videos from popular platforms in multiple formats and quality options.",
    icon: Download,
  },
  {
    title: "Video Compressor",
    description: "Reduce video file sizes while maintaining quality. Perfect for sharing and storage.",
    icon: Maximize2,
  },
  {
    title: "Photo Converter",
    description: "Convert images between formats (JPG, PNG, WEBP) with batch processing support.",
    icon: ImageIcon,
  },
  {
    title: "PDF Tools",
    description: "Merge, split, compress, and convert PDF documents with ease.",
    icon: FileText,
  },
  {
    title: "URL Shortener",
    description: "Create short, memorable links and track click analytics in real-time.",
    icon: Scissors,
  },
  {
    title: "Image Optimizer",
    description: "Optimize images for web use while preserving visual quality.",
    icon: Zap,
  },
  {
    title: "Code Formatter",
    description: "Format and beautify code in multiple programming languages instantly.",
    icon: Code,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroBg} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                All-in-One Toolkit
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Powerful Tools
              </span>
              <br />
              <span className="text-foreground">At Your Fingertips</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access a comprehensive suite of web utilities designed to streamline your workflow. 
              No signup required, completely free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-glow">
                Explore Tools
              </button>
              <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Choose Your Tool
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select from our collection of professional-grade utilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ToolBox. All tools are free to use.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
