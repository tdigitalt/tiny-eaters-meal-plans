
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import WeeklyPlanner from '@/components/WeeklyPlanner';
import ShoppingList from '@/components/ShoppingList';
import MealIdeas from '@/components/MealIdeas';
import QuickReference from '@/components/QuickReference';
import InstallPrompt from '@/components/InstallPrompt';

const Index = () => {
  const [activeTab, setActiveTab] = useState('planner');
  const [mealPlan, setMealPlan] = useState({});

  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'planner':
        return <WeeklyPlanner />;
      case 'shopping':
        return <ShoppingList mealPlan={mealPlan} />;
      case 'ideas':
        return <MealIdeas />;
      case 'reference':
        return <QuickReference />;
      default:
        return <WeeklyPlanner />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6 pb-24">
        {renderActiveTab()}
      </main>

      <InstallPrompt />
    </div>
  );
};

export default Index;
