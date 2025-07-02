
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { weeklyTemplates, getTemplateById } from '@/data/mealTemplates';
import { mealDatabase, getMealById, getMealsByCategory } from '@/data/mealDatabase';
import { toast } from '@/hooks/use-toast';

interface MealPlan {
  [day: string]: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snack: string;
  };
}

const WeeklyPlanner = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [mealPlan, setMealPlan] = useState<MealPlan>({
    monday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    tuesday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    wednesday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    thursday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    friday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    saturday: { breakfast: '', lunch: '', dinner: '', snack: '' },
    sunday: { breakfast: '', lunch: '', dinner: '', snack: '' }
  });
  const [copied, setCopied] = useState(false);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = getTemplateById(templateId);
    if (template) {
      setMealPlan(template.meals);
      toast({
        title: "Template Applied!",
        description: `${template.name} has been loaded to your planner.`,
      });
    }
  };

  const handleMealChange = (day: string, mealType: string, mealId: string) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: mealId
      }
    }));
  };

  const copyWeeklyPlan = async () => {
    let planText = "🍽️ WEEKLY MEAL PLAN\n\n";
    
    days.forEach(day => {
      const dayName = day.charAt(0).toUpperCase() + day.slice(1);
      planText += `📅 ${dayName}:\n`;
      
      mealTypes.forEach(mealType => {
        const mealId = mealPlan[day][mealType];
        const meal = getMealById(mealId);
        const mealName = meal ? meal.name : 'Not selected';
        const mealTypeIcon = mealType === 'breakfast' ? '🌅' : 
                            mealType === 'lunch' ? '🌞' : 
                            mealType === 'dinner' ? '🌙' : '🍪';
        
        planText += `  ${mealTypeIcon} ${mealType.charAt(0).toUpperCase() + mealType.slice(1)}: ${mealName}\n`;
      });
      planText += '\n';
    });

    try {
      await navigator.clipboard.writeText(planText);
      setCopied(true);
      toast({
        title: "Copied to Clipboard!",
        description: "Your weekly meal plan is ready to paste anywhere.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please select the text manually to copy.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Weekly Meal Planner
            <Button onClick={copyWeeklyPlan} variant="outline" size="sm">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="ml-2">{copied ? 'Copied!' : 'Copy Plan'}</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Choose a Template:</label>
            <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select a meal planning template" />
              </SelectTrigger>
              <SelectContent>
                {weeklyTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    <div>
                      <div className="font-medium">{template.name}</div>
                      <div className="text-xs text-muted-foreground">{template.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {days.map(day => (
          <Card key={day}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg capitalize">{day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mealTypes.map(mealType => {
                  const meals = getMealsByCategory(mealType);
                  const selectedMealId = mealPlan[day][mealType];
                  const selectedMeal = getMealById(selectedMealId);
                  
                  return (
                    <div key={mealType} className="space-y-2">
                      <label className="text-sm font-medium capitalize">{mealType}</label>
                      <Select 
                        value={selectedMealId} 
                        onValueChange={(value) => handleMealChange(day, mealType, value)}
                      >
                        <SelectTrigger className="h-auto min-h-[44px]">
                          <SelectValue placeholder={`Select ${mealType}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {meals.map(meal => (
                            <SelectItem key={meal.id} value={meal.id}>
                              {meal.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedMeal && (
                        <div className="text-xs text-muted-foreground">
                          {selectedMeal.ingredients.slice(0, 3).join(', ')}
                          {selectedMeal.ingredients.length > 3 && '...'}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlanner;
