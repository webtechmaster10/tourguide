

export function mapUserInputToCategories(userMessage, tourGuideData) {
  const lowerMessage = userMessage.toLowerCase();
  const matchedInterests = [];
  const matchedBudgets = [];
  const aliasMap = (tourGuideData && tourGuideData.ai_mappings && tourGuideData.ai_mappings.interest_aliases) || {
    mountain: ['nature_wildlife', 'adventure_sports'],
    climb: ['adventure_sports'],
    hike: ['adventure_sports', 'nature_wildlife'],
    trek: ['adventure_sports', 'nature_wildlife'],
    beach: ['beach_relaxation'],
    relax: ['beach_relaxation', 'wellness_spa'],
    food: ['food_culinary'],
    culture: ['cultural_historical'],
    history: ['cultural_historical'],
    night: ['nightlife'],
    shop: ['shopping'],
    adventure: ['adventure_sports'],
    sport: ['adventure_sports'],
    wellness: ['wellness_spa'],
    spa: ['wellness_spa'],
    photo: ['photography'],
    religious: ['religious_pilgrimage'],
    pilgrimage: ['religious_pilgrimage'],
    festival: ['festival_events'],
    road: ['road_trips'],
    trip: ['road_trips'],
  };

  Object.entries(aliasMap).forEach(([keyword, interests]) => {
    if (lowerMessage.includes(keyword)) {
      matchedInterests.push(...interests);
    }
  });

  const budgetMap = (tourGuideData && tourGuideData.ai_mappings && tourGuideData.ai_mappings.budget_aliases) || {
    budget: 'backpacker',
    cheap: 'backpacker',
    hostel: 'backpacker',
    luxury: 'luxury',
    expensive: 'luxury',
    five: 'luxury',
    mid: 'mid_range',
    moderate: 'mid_range',
    afford: 'mid_range',
  };

  Object.entries(budgetMap).forEach(([keyword, budget]) => {
    if (lowerMessage.includes(keyword)) {
      matchedBudgets.push(budget);
    }
  });

  const uniqueInterests = [...new Set(matchedInterests)];
  const uniqueBudgets = [...new Set(matchedBudgets)];

  return {
    matchedInterests: uniqueInterests,
    matchedBudgets: uniqueBudgets,
    enrichedContext: enrichContext(uniqueInterests, uniqueBudgets, tourGuideData),
  };
}


function enrichContext(interests, budgets, tourGuideData) {
  const context = {
    relevant_interests: [],
    relevant_budgets: [],
    suggestions: [],
  };

  if (tourGuideData.user_profile_capture) {
    const availableInterests = tourGuideData.user_profile_capture.interest_categories || [];

    interests.forEach((interest) => {
      if (availableInterests.includes(interest)) {
        context.relevant_interests.push(interest);
      }
    });

    const budgetCategories = tourGuideData.user_profile_capture.budget_categories || {};
    budgets.forEach((budget) => {
      if (budgetCategories[budget]) {
        context.relevant_budgets.push({
          category: budget,
          ...budgetCategories[budget],
        });
      }
    });
  }

  return context;
}


export function formatAIResponse(rawResponse, mappedData) {
  if (!rawResponse) return "I'm having trouble understanding that. Could you tell me more?";

  const responseText = rawResponse.text || rawResponse.message || "";

  if (mappedData.matchedInterests.length > 0) {
    const interests = mappedData.matchedInterests.join(", ");
    if (!responseText.toLowerCase().includes(interests.toLowerCase())) {
      return `Great! I see you're interested in ${interests}. ${responseText}`;
    }
  }

  return responseText || "I'm processing your request. Could you provide more details?";
}
