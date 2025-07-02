
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, X } from 'lucide-react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Hide prompt if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember user's choice for this session
    sessionStorage.setItem('installPromptDismissed', 'true');
  };

  // Don't show if dismissed this session
  if (sessionStorage.getItem('installPromptDismissed') === 'true') {
    return null;
  }

  if (!showPrompt) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md bg-primary text-primary-foreground shadow-lg">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">Install Meal Planner</h3>
            <p className="text-xs opacity-90 mt-1">
              Add to your home screen for quick access and offline use!
            </p>
            <div className="flex space-x-2 mt-3">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleInstall}
                className="text-xs"
              >
                Install
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
                className="text-xs text-primary-foreground/80 hover:text-primary-foreground"
              >
                Not now
              </Button>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDismiss}
            className="p-1 h-auto w-auto text-primary-foreground/80 hover:text-primary-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstallPrompt;
