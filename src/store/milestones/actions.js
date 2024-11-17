export default {
  addMilestone(milestone) {
    this.milestones.push(milestone);
  },

  updateMilestone(index, updatedMilestone) {
    this.milestones[index] = { ...this.milestones[index], ...updatedMilestone };
  },

  removeMilestone(id) {
    const selectedMilestone = this.milestones.find((m) => m.id === id);
    const index = this.milestones.indexOf(selectedMilestone);
    this.milestones.splice(index, 1);
  },

  calculateNextOccurrence(milestone) {
    const today = new Date();
    const startDate = new Date(milestone.startDate);
    let nextOccurrence = new Date(startDate);

    if (milestone.frequency === 'annual') {
      nextOccurrence.setFullYear(today.getFullYear());
      if (nextOccurrence < today) {
        nextOccurrence.setFullYear(today.getFullYear() + 1);
      }
    } else if (milestone.frequency === 'monthly') {
      nextOccurrence.setMonth(today.getMonth());
      if (nextOccurrence < today) {
        nextOccurrence.setMonth(today.getMonth() + 1);
      }
    } else if (milestone.frequency === 'diary') {
      nextOccurrence = today;
    }
    return nextOccurrence;
  },
};
