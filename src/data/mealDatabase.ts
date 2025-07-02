
export interface Meal {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  ingredients: string[];
  prepTime?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export const mealDatabase: Meal[] = [
  // Breakfast Options
  { id: 'b1', name: 'Overnight Oats', category: 'breakfast', ingredients: ['Rolled oats', 'Milk', 'Yogurt', 'Berries', 'Honey'] },
  { id: 'b2', name: 'Mini Pancakes', category: 'breakfast', ingredients: ['Pancake mix', 'Eggs', 'Milk', 'Butter', 'Syrup'] },
  { id: 'b3', name: 'Smoothie Bowls', category: 'breakfast', ingredients: ['Frozen fruit', 'Yogurt', 'Granola', 'Berries', 'Chia seeds'] },
  { id: 'b4', name: 'Scrambled Eggs & Toast', category: 'breakfast', ingredients: ['Eggs', 'Bread', 'Butter', 'Cheese', 'Milk'] },
  { id: 'b5', name: 'Yogurt Parfait', category: 'breakfast', ingredients: ['Greek yogurt', 'Granola', 'Mixed berries', 'Honey'] },
  { id: 'b6', name: 'Banana Muffins', category: 'breakfast', ingredients: ['Bananas', 'Flour', 'Eggs', 'Sugar', 'Baking powder'] },
  { id: 'b7', name: 'French Toast Sticks', category: 'breakfast', ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Syrup'] },
  { id: 'b8', name: 'Cereal & Fruit', category: 'breakfast', ingredients: ['Whole grain cereal', 'Milk', 'Banana', 'Berries'] },
  { id: 'b9', name: 'Breakfast Burrito', category: 'breakfast', ingredients: ['Tortilla', 'Scrambled eggs', 'Cheese', 'Salsa'] },
  { id: 'b10', name: 'Bagel & Cream Cheese', category: 'breakfast', ingredients: ['Bagel', 'Cream cheese', 'Cucumber', 'Tomato'] },
  { id: 'b11', name: 'Fruit & Cheese', category: 'breakfast', ingredients: ['Apple slices', 'Cheddar cheese', 'Whole grain crackers'] },
  { id: 'b12', name: 'Waffle Bites', category: 'breakfast', ingredients: ['Frozen waffles', 'Butter', 'Syrup', 'Berries'] },

  // Lunch Options
  { id: 'l1', name: 'Pasta Salad', category: 'lunch', ingredients: ['Pasta', 'Cherry tomatoes', 'Cheese cubes', 'Cucumber', 'Dressing'] },
  { id: 'l2', name: 'Quesadillas', category: 'lunch', ingredients: ['Tortillas', 'Cheese', 'Chicken', 'Bell peppers', 'Salsa'] },
  { id: 'l3', name: 'Soup & Sandwich', category: 'lunch', ingredients: ['Tomato soup', 'Bread', 'Ham', 'Cheese', 'Butter'] },
  { id: 'l4', name: 'Bento Box', category: 'lunch', ingredients: ['Rice', 'Chicken nuggets', 'Cucumber', 'Berries', 'Crackers'] },
  { id: 'l5', name: 'Mac & Cheese', category: 'lunch', ingredients: ['Macaroni', 'Cheese sauce', 'Milk', 'Butter', 'Breadcrumbs'] },
  { id: 'l6', name: 'Chicken Nuggets & Veggies', category: 'lunch', ingredients: ['Chicken nuggets', 'Carrots', 'Cucumber', 'Ranch dip'] },
  { id: 'l7', name: 'Wrap Roll-ups', category: 'lunch', ingredients: ['Tortilla', 'Turkey', 'Cheese', 'Lettuce', 'Mayo'] },
  { id: 'l8', name: 'Rice Bowl', category: 'lunch', ingredients: ['Brown rice', 'Chicken strips', 'Broccoli', 'Soy sauce'] },
  { id: 'l9', name: 'Pizza Bagels', category: 'lunch', ingredients: ['Bagels', 'Pizza sauce', 'Mozzarella cheese', 'Pepperoni'] },
  { id: 'l10', name: 'Leftover Reheat', category: 'lunch', ingredients: ['Previous dinner leftovers', 'Fresh fruit', 'Crackers'] },
  { id: 'l11', name: 'Salad & Protein', category: 'lunch', ingredients: ['Mixed greens', 'Grilled chicken', 'Cherry tomatoes', 'Dressing'] },
  { id: 'l12', name: 'Mini Sandwiches', category: 'lunch', ingredients: ['Slider buns', 'Ham', 'Cheese', 'Lettuce', 'Mayo'] },

  // Dinner Options
  { id: 'd1', name: 'One-Pot Pasta', category: 'dinner', ingredients: ['Pasta', 'Ground beef', 'Tomato sauce', 'Vegetables', 'Cheese'] },
  { id: 'd2', name: 'Sheet Pan Chicken', category: 'dinner', ingredients: ['Chicken breast', 'Sweet potatoes', 'Broccoli', 'Olive oil'] },
  { id: 'd3', name: 'Stir-Fry', category: 'dinner', ingredients: ['Rice', 'Chicken strips', 'Mixed vegetables', 'Stir-fry sauce'] },
  { id: 'd4', name: 'Taco Night', category: 'dinner', ingredients: ['Ground beef', 'Taco shells', 'Cheese', 'Lettuce', 'Tomatoes'] },
  { id: 'd5', name: 'Meatballs & Rice', category: 'dinner', ingredients: ['Ground beef', 'Rice', 'Marinara sauce', 'Parmesan cheese'] },
  { id: 'd6', name: 'Baked Fish & Vegetables', category: 'dinner', ingredients: ['White fish', 'Green beans', 'Carrots', 'Lemon', 'Herbs'] },
  { id: 'd7', name: 'Slow Cooker Meal', category: 'dinner', ingredients: ['Chicken thighs', 'Potatoes', 'Carrots', 'Onions', 'Broth'] },
  { id: 'd8', name: 'Homemade Pizza', category: 'dinner', ingredients: ['Pizza dough', 'Sauce', 'Mozzarella', 'Toppings'] },
  { id: 'd9', name: 'Spaghetti & Sauce', category: 'dinner', ingredients: ['Spaghetti', 'Marinara sauce', 'Ground beef', 'Parmesan'] },
  { id: 'd10', name: 'Grilled Chicken & Sides', category: 'dinner', ingredients: ['Chicken breast', 'Mashed potatoes', 'Green beans'] },
  { id: 'd11', name: 'Casserole', category: 'dinner', ingredients: ['Ground beef', 'Rice', 'Cheese', 'Vegetables', 'Cream soup'] },
  { id: 'd12', name: 'Soup & Bread', category: 'dinner', ingredients: ['Chicken soup', 'Dinner rolls', 'Butter', 'Side salad'] },

  // Snack Options
  { id: 's1', name: 'Apple Slices & Peanut Butter', category: 'snack', ingredients: ['Apples', 'Peanut butter'] },
  { id: 's2', name: 'Cheese Cubes & Crackers', category: 'snack', ingredients: ['Cheddar cheese', 'Whole grain crackers'] },
  { id: 's3', name: 'Veggie Cups & Hummus', category: 'snack', ingredients: ['Carrots', 'Celery', 'Cucumber', 'Hummus'] },
  { id: 's4', name: 'Energy Balls', category: 'snack', ingredients: ['Oats', 'Peanut butter', 'Honey', 'Chocolate chips'] },
  { id: 's5', name: 'Fruit Kabobs', category: 'snack', ingredients: ['Strawberries', 'Grapes', 'Melon', 'Pineapple'] },
  { id: 's6', name: 'Yogurt Tubes', category: 'snack', ingredients: ['Frozen yogurt tubes', 'Fresh berries'] },
  { id: 's7', name: 'Trail Mix', category: 'snack', ingredients: ['Nuts', 'Dried fruit', 'Chocolate chips', 'Cereal'] },
  { id: 's8', name: 'Goldfish & Fruit', category: 'snack', ingredients: ['Goldfish crackers', 'Grapes', 'String cheese'] },
  { id: 's9', name: 'Smoothie Pops', category: 'snack', ingredients: ['Frozen smoothie pops', 'Fresh fruit'] },
  { id: 's10', name: 'Mini Muffins', category: 'snack', ingredients: ['Mini blueberry muffins', 'Milk'] },
  { id: 's11', name: 'String Cheese', category: 'snack', ingredients: ['String cheese', 'Whole grain crackers'] },
  { id: 's12', name: 'Banana & Crackers', category: 'snack', ingredients: ['Banana', 'Graham crackers', 'Peanut butter'] }
];

export const getMealsByCategory = (category: string) => {
  return mealDatabase.filter(meal => meal.category === category);
};

export const getMealById = (id: string) => {
  return mealDatabase.find(meal => meal.id === id);
};
