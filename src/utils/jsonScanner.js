

export function scanTourGuide(tourGuideData) {
  if (!tourGuideData) return {};

  const summary = {
    title: tourGuideData.guide_metadata?.title || null,
    version: tourGuideData.guide_metadata?.version || null,
    interest_categories: tourGuideData.user_profile_capture?.interest_categories || [],
    budget_categories: Object.keys(tourGuideData.user_profile_capture?.budget_categories || {}),
    travel_party_types: tourGuideData.user_profile_capture?.travel_party_types || [],
    ai_mappings: tourGuideData.ai_mappings ? {
      interest_aliases_keys: Object.keys(tourGuideData.ai_mappings.interest_aliases || {}),
      budget_aliases_keys: Object.keys(tourGuideData.ai_mappings.budget_aliases || {}),
      suggested_destinations: tourGuideData.ai_mappings.suggested_destinations || {}
    } : {},
    recommendation_samples: (() => {
      const rec = tourGuideData.pre_trip_planning?.destination_selection?.recommendation_engine || {};
      const samples = {};
      if (rec.beach_destinations && rec.beach_destinations.length) samples.beach = rec.beach_destinations.slice(0,2).map(d => d.name);
      if (rec.cultural_destinations && rec.cultural_destinations.length) samples.cultural = rec.cultural_destinations.slice(0,2).map(d => d.name);
      if (rec.adventure_destinations && rec.adventure_destinations.length) samples.adventure = rec.adventure_destinations.slice(0,2).map(d => d.name);
      return samples;
    })()
  };

  return summary;
}
