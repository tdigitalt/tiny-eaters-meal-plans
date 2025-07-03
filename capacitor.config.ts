
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a0bbaf6f3b4f425499f98b7155a70b03',
  appName: 'tiny-eaters-meal-plans',
  webDir: 'dist',
  server: {
    url: 'https://a0bbaf6f-3b4f-4254-99f9-8b7155a70b03.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#7CB342',
      showSpinner: false
    }
  }
};

export default config;
