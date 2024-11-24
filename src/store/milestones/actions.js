import {
  db,
  collection,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  onSnapshot,
} from '@/plugins/firebase';

let unsubscribeMilestones = null;

export default {
  async fetchMilestones(uid) {
    this.loading = true;
    this.error = null;
    try {
      const milestonesRef = collection(db, `users/${uid}/milestones`);
      const q = query(milestonesRef);
      const querySnapshot = await getDocs(q);

      this.milestones = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      this.error = 'Error fetching milestones';
      console.error('Error fetching milestones:', error);
    } finally {
      this.loading = false;
    }
  },

  async listenToMilestones(uid) {
    if (unsubscribeMilestones) {
      unsubscribeMilestones();
    }
    const milestonesRef = collection(db, `users/${uid}/milestones`);
    unsubscribeMilestones = onSnapshot(
      milestonesRef,
      (snapshot) => {
        this.milestones = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      },
      (error) => {
        console.error('Error in listener:', error);
        this.error = 'Error listening to milestones';
      }
    );
  },

  clearMilestones() {
    if (unsubscribeMilestones) {
      unsubscribeMilestones();
      unsubscribeMilestones = null;
    }
    this.milestones = [];
  },

  async addMilestone(uid, milestone) {
    try {
      const milestonesRef = collection(db, `users/${uid}/milestones`);
      await addDoc(milestonesRef, milestone);
    } catch (error) {
      this.error = 'Error adding milestone';
      console.error('Error adding milestone:', error);
    }
  },

  async updateMilestone(uid, milestoneId, updates) {
    try {
      const milestoneRef = doc(db, `users/${uid}/milestones/${milestoneId}`);
      await updateDoc(milestoneRef, updates);
    } catch (error) {
      this.error = 'Error updating milestone';
      console.error('Error updating milestone:', error);
    }
  },

  async deleteMilestone(uid, milestoneId) {
    try {
      const milestoneRef = doc(db, `users/${uid}/milestones/${milestoneId}`);
      await deleteDoc(milestoneRef);
    } catch (error) {
      this.error = 'Error deleting milestone';
      console.error('Error deleting milestone:', error);
    }
  },
};
