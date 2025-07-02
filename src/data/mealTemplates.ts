
export interface WeeklyTemplate {
  id: string;
  name: string;
  description: string;
  meals: {
    [day: string]: {
      breakfast: string;
      lunch: string;
      dinner: string;
      snack: string;
    };
  };
}

export const weeklyTemplates: WeeklyTemplate[] = [
  {
    id: 'classic-family',
    name: 'Classic Family Week',
    description: 'Traditional family favorites that everyone will love',
    meals: {
      monday: { breakfast: 'b4', lunch: 'l5', dinner: 'd9', snack: 's1' },
      tuesday: { breakfast: 'b2', lunch: 'l2', dinner: 'd4', snack: 's2' },
      wednesday: { breakfast: 'b1', lunch: 'l6', dinner: 'd1', snack: 's3' },
      thursday: { breakfast: 'b5', lunch: 'l3', dinner: 'd2', snack: 's4' },
      friday: { breakfast: 'b7', lunch: 'l9', dinner: 'd8', snack: 's5' },
      saturday: { breakfast: 'b6', lunch: 'l4', dinner: 'd10', snack: 's6' },
      sunday: { breakfast: 'b12', lunch: 'l1', dinner: 'd7', snack: 's7' }
    }
  },
  {
    id: 'quick-easy',
    name: 'Quick & Easy Week',
    description: '15-minute meals for busy weekdays',
    meals: {
      monday: { breakfast: 'b8', lunch: 'l10', dinner: 'd9', snack: 's8' },
      tuesday: { breakfast: 'b3', lunch: 'l5', dinner: 'd3', snack: 's1' },
      wednesday: { breakfast: 'b10', lunch: 'l6', dinner: 'd1', snack: 's11' },
      thursday: { breakfast: 'b1', lunch: 'l2', dinner: 'd4', snack: 's2' },
      friday: { breakfast: 'b9', lunch: 'l9', dinner: 'd8', snack: 's9' },
      saturday: { breakfast: 'b2', lunch: 'l7', dinner: 'd11', snack: 's5' },
      sunday: { breakfast: 'b12', lunch: 'l4', dinner: 'd12', snack: 's10' }
    }
  },
  {
    id: 'picky-eater',
    name: 'Picky Eater Week',
    description: 'Kid-approved meals that even the pickiest eaters will enjoy',
    meals: {
      monday: { breakfast: 'b2', lunch: 'l5', dinner: 'd9', snack: 's8' },
      tuesday: { breakfast: 'b12', lunch: 'l6', dinner: 'd8', snack: 's1' },
      wednesday: { breakfast: 'b8', lunch: 'l9', dinner: 'd5', snack: 's2' },
      thursday: { breakfast: 'b7', lunch: 'l2', dinner: 'd4', snack: 's11' },
      friday: { breakfast: 'b5', lunch: 'l5', dinner: 'd8', snack: 's6' },
      saturday: { breakfast: 'b6', lunch: 'l12', dinner: 'd10', snack: 's5' },
      sunday: { breakfast: 'b4', lunch: 'l4', dinner: 'd1', snack: 's9' }
    }
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Week',
    description: 'Plant-based meals full of flavor and nutrition',
    meals: {
      monday: { breakfast: 'b1', lunch: 'l1', dinner: 'd1', snack: 's3' },
      tuesday: { breakfast: 'b3', lunch: 'l2', dinner: 'd8', snack: 's4' },
      wednesday: { breakfast: 'b5', lunch: 'l5', dinner: 'd12', snack: 's1' },
      thursday: { breakfast: 'b6', lunch: 'l7', dinner: 'd8', snack: 's5' },
      friday: { breakfast: 'b10', lunch: 'l9', dinner: 'd1', snack: 's7' },
      saturday: { breakfast: 'b2', lunch: 'l1', dinner: 'd11', snack: 's6' },
      sunday: { breakfast: 'b12', lunch: 'l4', dinner: 'd12', snack: 's10' }
    }
  },
  {
    id: 'budget-friendly',
    name: 'Budget-Friendly Week',
    description: 'Delicious meals that won\'t break the bank',
    meals: {
      monday: { breakfast: 'b8', lunch: 'l5', dinner: 'd9', snack: 's12' },
      tuesday: { breakfast: 'b4', lunch: 'l10', dinner: 'd1', snack: 's1' },
      wednesday: { breakfast: 'b1', lunch: 'l3', dinner: 'd5', snack: 's2' },
      thursday: { breakfast: 'b9', lunch: 'l2', dinner: 'd11', snack: 's8' },
      friday: { breakfast: 'b2', lunch: 'l8', dinner: 'd7', snack: 's11' },
      saturday: { breakfast: 'b6', lunch: 'l1', dinner: 'd12', snack: 's3' },
      sunday: { breakfast: 'b5', lunch: 'l4', dinner: 'd10', snack: 's4' }
    }
  },
  {
    id: 'prep-ahead',
    name: 'Prep-Ahead Week',
    description: 'Weekend prep for stress-free weekdays',
    meals: {
      monday: { breakfast: 'b1', lunch: 'l1', dinner: 'd7', snack: 's4' },
      tuesday: { breakfast: 'b6', lunch: 'l4', dinner: 'd11', snack: 's6' },
      wednesday: { breakfast: 'b1', lunch: 'l10', dinner: 'd7', snack: 's7' },
      thursday: { breakfast: 'b5', lunch: 'l1', dinner: 'd2', snack: 's4' },
      friday: { breakfast: 'b3', lunch: 'l8', dinner: 'd6', snack: 's9' },
      saturday: { breakfast: 'b2', lunch: 'l3', dinner: 'd8', snack: 's5' },
      sunday: { breakfast: 'b12', lunch: 'l12', dinner: 'd10', snack: 's10' }
    }
  }
];

export const getTemplateById = (id: string) => {
  return weeklyTemplates.find(template => template.id === id);
};
