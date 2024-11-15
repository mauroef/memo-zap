export default {
  allMilestones: (state) => state.milestones,

  allMilestonesReversed: (state) => state.milestones.reverse(),

  annualMilestones: (state) =>
    state.milestones.filter((m) => m.frequency === 'annual'),

  monthlyMilestones: (state) =>
    state.milestones.filter((m) => m.frequency === 'monthly'),

  dailyMilestones: (state) =>
    state.milestones.filter((m) => m.frequency === 'diary'),
};
