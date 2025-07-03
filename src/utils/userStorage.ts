
// Generate or retrieve user ID
export const getUserId = (): string => {
  let userId = localStorage.getItem('mealPlannerUserId');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('mealPlannerUserId', userId);
  }
  return userId;
};

// Save meal plan to localStorage with user ID
export const saveMealPlan = (mealPlan: any): void => {
  const userId = getUserId();
  const key = `mealPlan_${userId}`;
  localStorage.setItem(key, JSON.stringify(mealPlan));
  console.log('Meal plan saved for user:', userId);
};

// Load meal plan from localStorage with user ID
export const loadMealPlan = (): any => {
  const userId = getUserId();
  const key = `mealPlan_${userId}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      console.log('Meal plan loaded for user:', userId);
      return parsed;
    } catch (error) {
      console.error('Error parsing saved meal plan:', error);
    }
  }
  return null;
};

// Save selected template
export const saveSelectedTemplate = (templateId: string): void => {
  const userId = getUserId();
  const key = `selectedTemplate_${userId}`;
  localStorage.setItem(key, templateId);
};

// Load selected template
export const loadSelectedTemplate = (): string => {
  const userId = getUserId();
  const key = `selectedTemplate_${userId}`;
  return localStorage.getItem(key) || '';
};
