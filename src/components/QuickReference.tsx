
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Shield, Zap, Scale, Archive, AlertTriangle } from 'lucide-react';

const QuickReference = () => {
  const portionGuide = [
    { age: '2-3 years', protein: '1-2 oz', grains: '1/2-1 slice bread', fruits: '1/2 cup', vegetables: '1/4-1/2 cup', dairy: '1/2 cup milk' },
    { age: '4-5 years', protein: '2-3 oz', grains: '1-1.5 slices bread', fruits: '1/2-3/4 cup', vegetables: '1/2-3/4 cup', dairy: '3/4 cup milk' }
  ];

  const storageGuide = [
    { food: 'Bananas', tip: 'Store at room temperature, refrigerate when ripe' },
    { food: 'Bread', tip: 'Freeze extra loaves, toast directly from freezer' },
    { food: 'Milk', tip: 'Store in coldest part of fridge, not in door' },
    { food: 'Berries', tip: 'Don\'t wash until ready to eat' },
    { food: 'Avocado', tip: 'Ripen in paper bag, then refrigerate' },
    { food: 'Cheese', tip: 'Wrap in parchment paper, then plastic wrap' }
  ];

  const substitutions = [
    { original: '1 egg', substitute: '1/4 cup applesauce or 1 mashed banana' },
    { original: '1 cup milk', substitute: '1 cup plant milk or 1/2 cup evaporated milk + 1/2 cup water' },
    { original: '1 cup flour', substitute: '1 cup almond flour or 3/4 cup coconut flour' },
    { original: '1 tbsp fresh herbs', substitute: '1 tsp dried herbs' },
    { original: '1 cup sugar', substitute: '3/4 cup honey or maple syrup (reduce liquids by 1/4 cup)' }
  ];

  const prepShortcuts = [
    { task: 'Wash and chop vegetables', tip: 'Do on Sunday for the whole week' },
    { task: 'Prepare smoothie packs', tip: 'Pre-portion frozen fruit in bags' },
    { task: 'Cook grains in bulk', tip: 'Prepare large batches of rice/quinoa' },
    { task: 'Portion snacks', tip: 'Divide crackers and fruit into containers' },
    { task: 'Muffin batter prep', tip: 'Mix dry ingredients in advance' }
  ];

  const troubleshooting = [
    { problem: 'Won\'t eat vegetables', solution: 'Mix small amounts into favorite foods, offer repeatedly without pressure' },
    { problem: 'Only wants snacks', solution: 'Serve meals first, limit snacks to 2 per day' },
    { problem: 'Refuses new foods', solution: 'Put small amounts on plate without pressure' },
    { problem: 'Eats too slowly', solution: 'Set reasonable time limits, stay calm and patient' },
    { problem: 'Wants same food always', solution: 'It\'s normal! Offer variety alongside favorites' }
  ];

  const nutritionBalance = [
    { component: 'Protein', sources: 'Eggs, chicken, beans, cheese, yogurt', amount: '2-3 servings/day' },
    { component: 'Fruits & Vegetables', sources: 'Fresh, frozen or dried', amount: '5+ servings/day' },
    { component: 'Whole Grains', sources: 'Brown rice, whole wheat bread, oats', amount: '3+ servings/day' },
    { component: 'Dairy', sources: 'Milk, cheese, yogurt', amount: '2-3 servings/day' },
    { component: 'Healthy Fats', sources: 'Avocado, nuts, olive oil', amount: 'Include in meals' }
  ];

  const safetyTips = [
    { tip: 'Always supervise children while cooking' },
    { tip: 'Keep knife handles turned away from children' },
    { tip: 'Teach proper handwashing before and after cooking' },
    { tip: 'Use step stools with railings to reach counters' },
    { tip: 'Start with cold ingredients to avoid burns' },
    { tip: 'Assign age-appropriate tasks (stirring, measuring, washing)' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Essential guides and tips for successful meal planning. Save this page for quick access!
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="portions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
          <TabsTrigger value="portions" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Scale className="h-3 w-3" />
            <span>Portions</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Archive className="h-3 w-3" />
            <span>Storage</span>
          </TabsTrigger>
          <TabsTrigger value="substitutions" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Zap className="h-3 w-3" />
            <span>Substitutions</span>
          </TabsTrigger>
          <TabsTrigger value="prep" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Clock className="h-3 w-3" />
            <span>Prep</span>
          </TabsTrigger>
          <TabsTrigger value="troubleshooting" className="flex items-center justify-center space-x-1 text-xs px-2">
            <AlertTriangle className="h-3 w-3" />
            <span>Help</span>
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Users className="h-3 w-3" />
            <span>Nutrition</span>
          </TabsTrigger>
          <TabsTrigger value="safety" className="flex items-center justify-center space-x-1 text-xs px-2">
            <Shield className="h-3 w-3" />
            <span>Safety</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="portions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Portions by Age</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portionGuide.map((guide, index) => (
                  <div key={index} className="space-y-3">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {guide.age}
                    </Badge>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Protein</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.protein}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Grains</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.grains}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Fruits</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.fruits}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Vegetables</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.vegetables}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm">Dairy</div>
                        <div className="text-xs text-muted-foreground mt-1">{guide.dairy}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Archive className="h-5 w-5" />
                <span>Storage Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {storageGuide.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mt-0.5 shrink-0">{item.food}</Badge>
                    <p className="text-sm text-muted-foreground flex-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="substitutions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Ingredient Substitutions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {substitutions.map((sub, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="secondary" className="shrink-0 w-fit">{sub.original}</Badge>
                    <span className="hidden sm:inline text-muted-foreground">→</span>
                    <span className="text-sm flex-1">{sub.substitute}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prep" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Prep Shortcuts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {prepShortcuts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mt-0.5 text-xs shrink-0">{item.task}</Badge>
                    <p className="text-sm text-muted-foreground flex-1">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="troubleshooting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Feeding Challenges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="font-medium text-sm text-red-600 dark:text-red-400">
                      Problem: {item.problem}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Solution: {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Nutritional Balance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutritionBalance.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant="secondary">{item.component}</Badge>
                      <span className="text-sm font-medium">{item.amount}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.sources}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Kitchen Safety with Children</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {safetyTips.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Shield className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                    <span className="text-sm flex-1">{item.tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QuickReference;
