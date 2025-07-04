
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
    // Check if running in standalone mode (app is already installed)
    const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                      (window.navigator as any).standalone === true ||
                      window.matchMedia('(display-mode: fullscreen)').matches ||
                      window.matchMedia('(display-mode: minimal-ui)').matches;
    setIsStandalone(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    console.log('PWA Check:', { iOS, standalone, userAgent: navigator.userAgent });

    // Don't show if already installed
    if (standalone) {
      console.log('App is already installed - not showing prompt');
      return;
    }

    // Handle beforeinstallprompt for browsers that support it
    const handler = (e: Event) => {
      console.log('beforeinstallprompt fired');
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show prompt after a delay if not dismissed and not installed
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('installPromptDismissed') && !standalone) {
        console.log('Showing install prompt');
        setShowPrompt(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt && deferredPrompt.prompt) {
      // Browser supports native installation
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('Install outcome:', outcome);
        
        if (outcome === 'accepted') {
          setShowPrompt(false);
          sessionStorage.setItem('installPromptDismissed', 'true');
        }
        setDeferredPrompt(null);
      } catch (error) {
        console.error('Installation failed:', error);
        // Show manual instructions as fallback
        showManualInstructions();
      }
    } else {
      // No native support, show manual instructions
      showManualInstructions();
    }
  };

  const showManualInstructions = () => {
    if (isIOS) {
      alert('Per installare l\'app:\n1. Tocca il pulsante Condividi ⬆️\n2. Scorri e tocca "Aggiungi alla schermata Home"\n3. Tocca "Aggiungi" per confermare');
    } else {
      alert('Per installare l\'app:\n1. Tocca il menu del browser (⋮)\n2. Seleziona "Aggiungi alla schermata Home" o "Installa app"\n3. Conferma l\'installazione');
    }
    setShowPrompt(false);
    sessionStorage.setItem('installPromptDismissed', 'true');
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
            <p className="text-sm opacity-90 mb-3">
              Aggiungi l'app alla schermata home per un accesso rapido e utilizzo offline!
            </p>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleInstall}
                className="text-sm font-medium"
              >
                Installa Ora
              </Button>
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
