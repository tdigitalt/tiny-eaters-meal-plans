
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
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Handle beforeinstallprompt for Android/Chrome
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
      console.log('Install prompt available');
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show iOS install instructions if on iOS and not standalone
    if (iOS && !standalone) {
      // Wait a bit before showing to ensure page is loaded
      const timer = setTimeout(() => {
        if (!sessionStorage.getItem('installPromptDismissed')) {
          setShowPrompt(true);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Install outcome:', outcome);
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('installPromptDismissed', 'true');
  };

  // Don't show if already installed or dismissed
  if (isStandalone || sessionStorage.getItem('installPromptDismissed') === 'true') {
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
