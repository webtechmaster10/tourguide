
export const API_CONFIG = {
  AI_AGENT_URL: "https://rhpxilzb.usw.sealos.io/api/v1/prediction/051194e2-f2f8-4058-988e-49ac46183d6e",
  TIMEOUT: 30000,
};


export const MESSAGE_TYPES = {
  USER: "user",
  BOT: "bot",
  SYSTEM: "system",
};

export const CHAT_STATES = {
  INITIAL: "initial",
  COLLECTING_DETAILS: "collecting_details",
  PLANNING: "planning",
  COMPLETED: "completed",
};

export const TRAVEL_INTERESTS = [
  {
    id: "beach_relaxation",
    label: "🏖️ Beach Getaway",
    description: "Beach Relaxation",
  },
  {
    id: "adventure_sports",
    label: "🏔️ Adventure",
    description: "Adventure Sports",
  },
  {
    id: "cultural_historical",
    label: "🏛️ Culture & History",
    description: "Cultural & Historical",
  },
  {
    id: "food_culinary",
    label: "🍽️ Food & Culinary",
    description: "Food & Culinary",
  },
];


export const BLOG_CATEGORIES = [
  "Budget Travel",
  "Technology",
  "Family Travel",
  "Adventure",
  "Culture",
  "Solo Travel",
];

export const SERVICES_LIST = [
  { icon: "🗺️", title: "Destination Planning" },
  { icon: "📅", title: "Itinerary Building" },
  { icon: "💰", title: "Budget Planning" },
  { icon: "🍽️", title: "Food & Dining" },
  { icon: "🏨", title: "Accommodation Advice" },
  { icon: "🎫", title: "Activity Recommendations" },
  { icon: "👨‍👩‍👧‍👦", title: "Group Travel Planning" },
  { icon: "🔐", title: "Travel Tips & Safety" },
];
