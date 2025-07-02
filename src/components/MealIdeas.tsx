
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Zap, RefreshCw, Calendar, Utensils, PartyPopper, Plane } from 'lucide-react';

const MealIdeas = () => {
  const mealCategories = [
    {
      title: "15-Minute Meals",
      icon: Clock,
      color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      meals: [
        "Scrambled Eggs & Toast",
        "Quesadillas",
        "Pasta with Butter & Parmesan",
        "Grilled Cheese & Tomato Soup",
        "Chicken & Veggie Stir-Fry",
        "Bagel Pizza",
        "Smoothie Bowl",
        "Mac & Cheese from Box"
      ]
    },
    {
      title: "Kid-Approved Favorites",
      icon: Users,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      meals: [
        "Chicken Nuggets & Fries",
        "Mini Pancakes",
        "Spaghetti & Meatballs",
        "Cheese Quesadillas",
        "Hot Dogs & Baked Beans",
        "French Toast Sticks",
        "Mini Pizzas",
        "Macaroni & Cheese"
      ]
    },
    {
      title: "Batch Cooking Ideas",
      icon: Utensils,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      meals: [
        "Slow Cooker Chicken & Vegetables",
        "Baked Ziti Casserole",
        "Meatball Prep",
        "Overnight Oats (5 jars)",
        "Freezer Breakfast Burritos",
        "Large Batch Soup",
        "Pre-cut Vegetables",
        "Energy Balls"
      ]
    },
    {
      title: "Leftover Transformations",
      icon: RefreshCw,
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      meals: [
        "Chicken → Chicken Salad",
        "Rice → Fried Rice",
        "Roast → Sandwiches",
        "Pasta → Pasta Salad",
        "Vegetables → Soup",
        "Bread → French Toast",
        "Fruit → Smoothies",
        "Potatoes → Hash Browns"
      ]
    },
    {
      title: "Seasonal Specialties",
      icon: Calendar,
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      meals: [
        "Spring: Asparagus & Pea Pasta",
        "Summer: Watermelon & Feta Salad",
        "Fall: Pumpkin Pancakes",
        "Winter: Hearty Beef Stew",
        "Spring: Strawberry Parfait",
        "Summer: Grilled Corn Salad",
        "Fall: Apple Cinnamon Oats",
        "Winter: Hot Chocolate Pancakes"
      ]
    },
    {
      title: "Emergency Pantry Meals",
      icon: Zap,
      color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      meals: [
        "Canned Soup & Crackers",
        "Peanut Butter & Jelly",
        "Instant Oatmeal",
        "Cereal & Milk",
        "Pasta with Olive Oil",
        "Rice & Frozen Vegetables",
        "Baked Beans & Toast",
        "Scrambled Eggs"
      ]
    },
    {
      title: "Special Occasion",
      icon: PartyPopper,
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
      meals: [
        "Birthday Pancakes",
        "Mini Cupcakes",
        "Fruit Kabobs",
        "Chocolate Chip Cookies",
        "Ice Cream Sundaes",
        "Pizza Party",
        "Taco Bar",
        "Homemade Lemonade"
      ]
    },
    {
      title: "Travel/Portable Meals",
      icon: Plane,
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400",
      meals: [
        "Sandwiches & Wraps",
        "Bento Box",
        "Trail Mix",
        "Fruit & Cheese",
        "Crackers & Hummus",
        "Granola Bars",
        "Apple Slices & Peanut Butter",
        "Hard-boiled Eggs"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Meal Ideas & Inspiration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Browse our collection of meal ideas organized by category. Perfect for when you need inspiration or want to try something new!
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {mealCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${category.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.meals.map((meal, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Badge variant="outline" className="text-xs">
                        {index + 1}
                      </Badge>
                      <span className="text-sm">{meal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MealIdeas;
