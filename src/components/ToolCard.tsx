import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  rotation: string;
  color: string;
}

const ToolCard = ({ title, description, icon: Icon, rotation, color }: ToolCardProps) => {
  return (
    <div 
      className={`group relative overflow-hidden bg-card backdrop-blur-sm border-4 ${color} transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer ${rotation} hover:rotate-0`}
      style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.5)' }}
    >
      <div className={`absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="relative p-6 space-y-4">
        <div className={`w-16 h-16 ${color} flex items-center justify-center group-hover:animate-bounce-slow`}>
          <Icon className="w-9 h-9 text-background" strokeWidth={2.5} />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground uppercase tracking-wide group-hover:text-glitch">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex items-center text-foreground font-bold uppercase text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LAUNCH →
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
