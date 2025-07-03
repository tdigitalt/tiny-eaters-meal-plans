
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, X, Download } from 'lucide-react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode
    const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    console.log('PWA Check:', { iOS, standalone });

    // Handle beforeinstallprompt for Android/Chrome
    const handler = (e: Event) => {
      console.log('beforeinstallprompt fired');
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Show prompt after a short delay if not dismissed
      setTimeout(() => {
        if (!sessionStorage.getItem('installPromptDismissed')) {
          setShowPrompt(true);
        }
      }, 1500);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // For iOS, show install instructions if not standalone and not dismissed
    if (iOS && !standalone) {
      const timer = setTimeout(() => {
        if (!sessionStorage.getItem('installPromptDismissed')) {
          console.log('Showing iOS install prompt');
          setShowPrompt(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }

    // For other browsers, also show after delay if no beforeinstallprompt fired
    if (!iOS) {
      const fallbackTimer = setTimeout(() => {
        if (!deferredPrompt && !sessionStorage.getItem('installPromptDismissed') && !standalone) {
          console.log('Showing fallback install prompt');
          setShowPrompt(true);
        }
      }, 5000);
      
      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener('beforeinstallprompt', handler);
      };
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [deferredPrompt]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Install outcome:', outcome);
      
      setDeferredPrompt(null);
      setShowPrompt(false);
      if (outcome === 'accepted') {
        sessionStorage.setItem('installPromptDismissed', 'true');
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('installPromptDismissed', 'true');
  };

  // Don't show if already installed
  if (isStandalone) {
    return null;
  }

  if (!showPrompt) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md bg-primary text-primary-foreground shadow-xl border-0">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 shrink-0">
            {isIOS ? <Download className="h-6 w-6" /> : <Smartphone className="h-6 w-6" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base mb-1">Installa Family Meal Planner</h3>
            {isIOS ? (
              <div className="text-sm opacity-90 space-y-2">
                <p>Per installare l'app sul tuo iPhone:</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Tocca il pulsante "Condividi" ⬆️</li>
                  <li>Scorri e tocca "Aggiungi alla schermata Home"</li>
                  <li>Tocca "Aggiungi" per confermare</li>
                </ol>
              </div>
            ) : (
              <p className="text-sm opacity-90">
                Aggiungi alla schermata home per accesso rapido e uso offline!
              </p>
            )}
            <div className="flex space-x-2 mt-3">
              {!isIOS && deferredPrompt && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleInstall}
                  className="text-sm font-medium"
                >
                  Installa Ora
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                Non ora
              </Button>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleDismiss}
            className="p-1.5 h-auto w-auto text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 shrink-0"
            aria-label="Chiudi"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstallPrompt;
