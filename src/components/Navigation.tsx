
import { Calendar, ShoppingCart, Lightbulb, BookOpen, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'planner', label: 'Weekly Planner', icon: Calendar },
    { id: 'shopping', label: 'Shopping List', icon: ShoppingCart },
    { id: 'ideas', label: 'Meal Ideas', icon: Lightbulb },
    { id: 'reference', label: 'Quick Reference', icon: BookOpen }
  ];

  return (
    <nav className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center space-y-1 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap min-w-0",
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:block">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
