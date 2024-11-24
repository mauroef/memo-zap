export default {
  allMilestones: (state) => state.milestones,

  allMilestonesReversed: (state) => {
    return [...state.allMilestones].reverse();
  },

  milestoneById: (state) => (id) => state.milestones.find((m) => m.id === id),
};
