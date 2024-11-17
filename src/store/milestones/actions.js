export default {
  addMilestone(milestone) {
    this.milestones.push(milestone);
  },

  updateMilestone(updatedMilestone) {
    const index = this.milestones.findIndex(
      (m) => m.id === updatedMilestone.id
    );
    if (index === -1) {
      console.warn(`Update: Milestone with ID ${updatedMilestone.id} not found.`);
      return;
    }
    this.milestones[index] = { ...this.milestones[index], ...updatedMilestone };
  },

  removeMilestone(id) {
    const index = this.milestones.findIndex((m) => m.id === id);
    if (index === -1) {
      console.error(`Remove: Milestone with ID ${id} not found.`);
      return;
    }
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
    } else if (milestone.frequency === 'daily') {
      nextOccurrence = today;
    }
    return nextOccurrence;
  },
};
