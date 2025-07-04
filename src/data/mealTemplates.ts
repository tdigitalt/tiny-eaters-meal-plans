
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
      monday: { breakfast: 'b1', lunch: 'l1', dinner: 'd13', snack: 's3' },
      tuesday: { breakfast: 'b3', lunch: 'l13', dinner: 'd14', snack: 's4' },
      wednesday: { breakfast: 'b5', lunch: 'l14', dinner: 'd15', snack: 's13' },
      thursday: { breakfast: 'b13', lunch: 'l15', dinner: 'd16', snack: 's14' },
      friday: { breakfast: 'b10', lunch: 'l16', dinner: 'd17', snack: 's7' },
      saturday: { breakfast: 'b14', lunch: 'l17', dinner: 'd18', snack: 's15' },
      sunday: { breakfast: 'b15', lunch: 'l18', dinner: 'd19', snack: 's16' }
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
      monday: { breakfast: 'b16', lunch: 'l19', dinner: 'd20', snack: 's17' },
      tuesday: { breakfast: 'b17', lunch: 'l20', dinner: 'd21', snack: 's18' },
      wednesday: { breakfast: 'b16', lunch: 'l19', dinner: 'd22', snack: 's19' },
      thursday: { breakfast: 'b18', lunch: 'l21', dinner: 'd23', snack: 's20' },
      friday: { breakfast: 'b19', lunch: 'l22', dinner: 'd24', snack: 's21' },
      saturday: { breakfast: 'b20', lunch: 'l23', dinner: 'd25', snack: 's22' },
      sunday: { breakfast: 'b21', lunch: 'l24', dinner: 'd26', snack: 's23' }
    }
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Week',
    description: 'Healthy Mediterranean-inspired family meals',
    meals: {
      monday: { breakfast: 'b22', lunch: 'l25', dinner: 'd27', snack: 's24' },
      tuesday: { breakfast: 'b23', lunch: 'l26', dinner: 'd28', snack: 's25' },
      wednesday: { breakfast: 'b24', lunch: 'l27', dinner: 'd29', snack: 's26' },
      thursday: { breakfast: 'b25', lunch: 'l28', dinner: 'd30', snack: 's27' },
      friday: { breakfast: 'b26', lunch: 'l29', dinner: 'd31', snack: 's28' },
      saturday: { breakfast: 'b27', lunch: 'l30', dinner: 'd32', snack: 's29' },
      sunday: { breakfast: 'b28', lunch: 'l31', dinner: 'd33', snack: 's30' }
    }
  },
  {
    id: 'asian-fusion',
    name: 'Asian Fusion Week',
    description: 'Kid-friendly Asian-inspired flavors',
    meals: {
      monday: { breakfast: 'b29', lunch: 'l32', dinner: 'd34', snack: 's31' },
      tuesday: { breakfast: 'b30', lunch: 'l33', dinner: 'd35', snack: 's32' },
      wednesday: { breakfast: 'b8', lunch: 'l34', dinner: 'd36', snack: 's33' },
      thursday: { breakfast: 'b4', lunch: 'l35', dinner: 'd37', snack: 's34' },
      friday: { breakfast: 'b31', lunch: 'l36', dinner: 'd38', snack: 's35' },
      saturday: { breakfast: 'b32', lunch: 'l37', dinner: 'd39', snack: 's36' },
      sunday: { breakfast: 'b33', lunch: 'l38', dinner: 'd40', snack: 's37' }
    }
  },
  {
    id: 'comfort-food',
    name: 'Comfort Food Week',
    description: 'Hearty, warming meals for the whole family',
    meals: {
      monday: { breakfast: 'b34', lunch: 'l39', dinner: 'd41', snack: 's38' },
      tuesday: { breakfast: 'b35', lunch: 'l40', dinner: 'd42', snack: 's39' },
      wednesday: { breakfast: 'b36', lunch: 'l41', dinner: 'd43', snack: 's40' },
      thursday: { breakfast: 'b37', lunch: 'l42', dinner: 'd44', snack: 's41' },
      friday: { breakfast: 'b7', lunch: 'l43', dinner: 'd45', snack: 's42' },
      saturday: { breakfast: 'b2', lunch: 'l44', dinner: 'd46', snack: 's43' },
      sunday: { breakfast: 'b38', lunch: 'l45', dinner: 'd47', snack: 's44' }
    }
  },
  {
    id: 'protein-power',
    name: 'Protein Power Week',
    description: 'High-protein meals for growing kids',
    meals: {
      monday: { breakfast: 'b39', lunch: 'l46', dinner: 'd48', snack: 's45' },
      tuesday: { breakfast: 'b40', lunch: 'l47', dinner: 'd49', snack: 's46' },
      wednesday: { breakfast: 'b41', lunch: 'l48', dinner: 'd50', snack: 's47' },
      thursday: { breakfast: 'b42', lunch: 'l49', dinner: 'd51', snack: 's48' },
      friday: { breakfast: 'b43', lunch: 'l50', dinner: 'd52', snack: 's49' },
      saturday: { breakfast: 'b44', lunch: 'l51', dinner: 'd53', snack: 's50' },
      sunday: { breakfast: 'b45', lunch: 'l52', dinner: 'd54', snack: 's51' }
    }
  },
  {
    id: 'finger-foods',
    name: 'Finger Foods Week',
    description: 'Easy-to-eat meals perfect for toddlers',
    meals: {
      monday: { breakfast: 'b46', lunch: 'l53', dinner: 'd55', snack: 's52' },
      tuesday: { breakfast: 'b47', lunch: 'l54', dinner: 'd56', snack: 's53' },
      wednesday: { breakfast: 'b48', lunch: 'l55', dinner: 'd57', snack: 's54' },
      thursday: { breakfast: 'b49', lunch: 'l56', dinner: 'd58', snack: 's55' },
      friday: { breakfast: 'b50', lunch: 'l57', dinner: 'd59', snack: 's56' },
      saturday: { breakfast: 'b51', lunch: 'l58', dinner: 'd60', snack: 's57' },
      sunday: { breakfast: 'b52', lunch: 'l59', dinner: 'd61', snack: 's58' }
    }
  },
  {
    id: 'international',
    name: 'International Flavors Week',
    description: 'Explore world cuisines with family-friendly versions',
    meals: {
      monday: { breakfast: 'b53', lunch: 'l60', dinner: 'd62', snack: 's59' },
      tuesday: { breakfast: 'b54', lunch: 'l61', dinner: 'd63', snack: 's60' },
      wednesday: { breakfast: 'b55', lunch: 'l62', dinner: 'd64', snack: 's61' },
      thursday: { breakfast: 'b56', lunch: 'l63', dinner: 'd65', snack: 's62' },
      friday: { breakfast: 'b57', lunch: 'l64', dinner: 'd66', snack: 's63' },
      saturday: { breakfast: 'b58', lunch: 'l65', dinner: 'd67', snack: 's64' },
      sunday: { breakfast: 'b59', lunch: 'l66', dinner: 'd68', snack: 's65' }
    }
  },
  {
    id: 'no-cook',
    name: 'No-Cook Week',
    description: 'Simple meals requiring no cooking - perfect for hot days',
    meals: {
      monday: { breakfast: 'b60', lunch: 'l67', dinner: 'd69', snack: 's66' },
      tuesday: { breakfast: 'b61', lunch: 'l68', dinner: 'd70', snack: 's67' },
      wednesday: { breakfast: 'b62', lunch: 'l69', dinner: 'd71', snack: 's68' },
      thursday: { breakfast: 'b63', lunch: 'l70', dinner: 'd72', snack: 's69' },
      friday: { breakfast: 'b64', lunch: 'l71', dinner: 'd73', snack: 's70' },
      saturday: { breakfast: 'b65', lunch: 'l72', dinner: 'd74', snack: 's71' },
      sunday: { breakfast: 'b66', lunch: 'l73', dinner: 'd75', snack: 's72' }
    }
  },
  {
    id: 'colorful-plates',
    name: 'Colorful Plates Week',
    description: 'Rainbow meals to make eating fun and nutritious',
    meals: {
      monday: { breakfast: 'b67', lunch: 'l74', dinner: 'd76', snack: 's73' },
      tuesday: { breakfast: 'b68', lunch: 'l75', dinner: 'd77', snack: 's74' },
      wednesday: { breakfast: 'b69', lunch: 'l76', dinner: 'd78', snack: 's75' },
      thursday: { breakfast: 'b70', lunch: 'l77', dinner: 'd79', snack: 's76' },
      friday: { breakfast: 'b71', lunch: 'l78', dinner: 'd80', snack: 's77' },
      saturday: { breakfast: 'b72', lunch: 'l79', dinner: 'd81', snack: 's78' },
      sunday: { breakfast: 'b73', lunch: 'l80', dinner: 'd82', snack: 's79' }
    }
  },
  {
    id: 'seasonal-summer',
    name: 'Summer Fresh Week',
    description: 'Light, fresh meals perfect for warm weather',
    meals: {
      monday: { breakfast: 'b74', lunch: 'l81', dinner: 'd83', snack: 's80' },
      tuesday: { breakfast: 'b75', lunch: 'l82', dinner: 'd84', snack: 's81' },
      wednesday: { breakfast: 'b76', lunch: 'l83', dinner: 'd85', snack: 's82' },
      thursday: { breakfast: 'b77', lunch: 'l84', dinner: 'd86', snack: 's83' },
      friday: { breakfast: 'b78', lunch: 'l85', dinner: 'd87', snack: 's84' },
      saturday: { breakfast: 'b79', lunch: 'l86', dinner: 'd88', snack: 's85' },
      sunday: { breakfast: 'b80', lunch: 'l87', dinner: 'd89', snack: 's86' }
    }
  }
];

export const getTemplateById = (id: string) => {
  return weeklyTemplates.find(template => template.id === id);
};
