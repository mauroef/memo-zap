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

let unsubscribeMemos = null;

export default {
  async fetchMemos(uid) {
    let userId = uid || JSON.parse(localStorage.getItem('auth'));
    this.loading = true;
    this.error = null;
    try {
      const memosRef = collection(db, `users/${userId}/memos`);
      const q = query(memosRef);
      const querySnapshot = await getDocs(q);

      this.memos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      this.error = 'Error fetching memos';
      console.error('Error fetching memos:', error);
    } finally {
      this.loading = false;
    }
  },

  async listenToMemos(uid) {
    if (unsubscribeMemos) {
      unsubscribeMemos();
    }
    const memosRef = collection(db, `users/${uid}/memos`);
    unsubscribeMemos = onSnapshot(
      memosRef,
      (snapshot) => {
        this.memos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      },
      (error) => {
        console.error('Error in listener:', error);
        this.error = 'Error listening to memos';
      }
    );
  },

  clearMemos() {
    if (unsubscribeMemos) {
      unsubscribeMemos();
      unsubscribeMemos = null;
    }
    this.memos = [];
  },

  async addMemo(uid, memo) {
    try {
      const memosRef = collection(db, `users/${uid}/memos`);
      await addDoc(memosRef, memo);
    } catch (error) {
      this.error = 'Error adding memo';
      console.error('Error adding memo:', error);
    }
  },

  async updateMemo(uid, memoId, updates) {
    try {
      const memoRef = doc(db, `users/${uid}/memos/${memoId}`);
      await updateDoc(memoRef, updates);
    } catch (error) {
      this.error = 'Error updating memo';
      console.error('Error updating memo:', error);
    }
  },

  async deleteMemo(uid, memoId) {
    try {
      const memoRef = doc(db, `users/${uid}/memos/${memoId}`);
      await deleteDoc(memoRef);
    } catch (error) {
      this.error = 'Error deleting memo';
      console.error('Error deleting memo:', error);
    }
  },
};
