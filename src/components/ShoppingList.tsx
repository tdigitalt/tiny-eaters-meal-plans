
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Copy, Check, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ShoppingListProps {
  mealPlan: any;
}

const ShoppingList = ({ mealPlan }: ShoppingListProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const [organizedList, setOrganizedList] = useState<{[category: string]: string[]}>({});

  const categories = {
    'Produce': ['apples', 'bananas', 'berries', 'tomatoes', 'cucumber', 'lettuce', 'carrots', 'broccoli', 'bell peppers', 'onions', 'garlic', 'herbs', 'lemon', 'avocado', 'spinach'],
    'Dairy': ['milk', 'cheese', 'yogurt', 'butter', 'cream cheese', 'eggs'],
    'Meat & Protein': ['chicken', 'ground beef', 'fish', 'turkey', 'ham', 'pepperoni'],
    'Pantry': ['flour', 'sugar', 'honey', 'oil', 'pasta', 'rice', 'oats', 'bread', 'crackers', 'cereal', 'nuts', 'soy sauce', 'marinara sauce'],
    'Frozen': ['frozen fruit', 'frozen vegetables', 'frozen waffles', 'nuggets'],
    'Condiments': ['mayo', 'mustard', 'ketchup', 'salsa', 'dressing', 'peanut butter', 'hummus']
  };

  useEffect(() => {
    if (!mealPlan) return;

    const allIngredients = new Set<string>();
    const days = Object.keys(mealPlan);
    
    days.forEach(day => {
      const dayMeals = mealPlan[day];
      Object.values(dayMeals).forEach((mealId: any) => {
        if (mealId) {
          // In a real app, we'd fetch the meal ingredients from the database
          // For now, we'll use some common ingredients based on meal types
          const commonIngredients = [
            'Eggs', 'Milk', 'Bread', 'Cheese', 'Chicken breast', 'Ground beef',
            'Rice', 'Pasta', 'Olive oil', 'Onions', 'Garlic', 'Tomatoes',
            'Bell peppers', 'Carrots', 'Broccoli', 'Apples', 'Bananas',
            'Yogurt', 'Oats', 'Honey', 'Butter', 'Salt', 'Pepper'
          ];
          
          // Add some random ingredients for demonstration
          const randomIngredients = commonIngredients
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * 5) + 3);
          
          randomIngredients.forEach(ingredient => allIngredients.add(ingredient));
        }
      });
    });

    // Organize ingredients by category
    const organized: {[category: string]: string[]} = {};
    
    Object.keys(categories).forEach(category => {
      organized[category] = [];
    });
    organized['Other'] = [];

    allIngredients.forEach(ingredient => {
      let categorized = false;
      
      Object.entries(categories).forEach(([category, keywords]) => {
        if (keywords.some(keyword => 
          ingredient.toLowerCase().includes(keyword.toLowerCase())
        )) {
          organized[category].push(ingredient);
          categorized = true;
        }
      });
      
      if (!categorized) {
        organized['Other'].push(ingredient);
      }
    });

    // Remove empty categories
    Object.keys(organized).forEach(category => {
      if (organized[category].length === 0) {
        delete organized[category];
      } else {
        organized[category].sort();
      }
    });

    setOrganizedList(organized);
  }, [mealPlan]);

  const handleItemCheck = (item: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(item)) {
      newCheckedItems.delete(item);
    } else {
      newCheckedItems.add(item);
    }
    setCheckedItems(newCheckedItems);
  };

  const copyShoppingList = async () => {
    let listText = "🛒 SHOPPING LIST\n\n";
    
    Object.entries(organizedList).forEach(([category, items]) => {
      listText += `📦 ${category}:\n`;
      items.forEach(item => {
        const checked = checkedItems.has(item) ? '✅' : '⬜';
        listText += `${checked} ${item}\n`;
      });
      listText += '\n';
    });

    try {
      await navigator.clipboard.writeText(listText);
      setCopied(true);
      toast({
        title: "Shopping List Copied!",
        description: "Your organized shopping list is ready to use.",
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

  const totalItems = Object.values(organizedList).reduce((total, items) => total + items.length, 0);
  const checkedCount = checkedItems.size;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Shopping List</span>
              <span className="text-sm text-muted-foreground">
                ({checkedCount}/{totalItems} items)
              </span>
            </div>
            <Button onClick={copyShoppingList} variant="outline" size="sm">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="ml-2">{copied ? 'Copied!' : 'Copy List'}</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-4">
            Automatically generated from your weekly meal plan. Organized by store sections for efficient shopping.
          </div>
          
          {totalItems === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your shopping list will appear here once you plan your meals.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(organizedList).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-lg border-b pb-2">
                    {category} ({items.length} items)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {items.map(item => (
                      <div key={item} className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50">
                        <Checkbox
                          id={item}
                          checked={checkedItems.has(item)}
                          onCheckedChange={() => handleItemCheck(item)}
                        />
                        <label
                          htmlFor={item}
                          className={`flex-1 cursor-pointer ${
                            checkedItems.has(item) ? 'line-through text-muted-foreground' : ''
                          }`}
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingList;
