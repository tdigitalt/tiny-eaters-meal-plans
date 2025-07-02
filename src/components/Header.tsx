
import { Sun, Moon, Utensils } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-full">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shrink-0">
            <Utensils className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">Family Meal Planner</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Smart planning for busy parents</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDark(!isDark)}
          className="flex items-center space-x-1 sm:space-x-2 shrink-0"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="text-sm hidden sm:inline">Dark Mode</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
