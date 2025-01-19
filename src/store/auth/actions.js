import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from '@/plugins/firebase';

import { useMemoStore } from '@/store';

export default {
  async register(email, password) {
    try {
      this.loading = true;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      this.user = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      };
      this.error = null;
    } catch (err) {
      this.error = err.message;
      this.user = null;
    } finally {
      this.loading = false;
    }
  },
  async login(email, password) {
    try {
      this.loading = true;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      this.user = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      };
      this.error = null;
    } catch (err) {
      this.error = err.message;
      this.user = null;
    } finally {
      this.loading = false;
    }
  },
  setUser(user) {
    this.user = user;
  },
  initAuthListener() {
    onAuthStateChanged(auth, (user) => {
      const memoStore = useMemoStore();

      if (user) {
        this.setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        });
        localStorage.setItem('auth', JSON.stringify(user.uid));

        memoStore.listenToMemos(user.uid);
      } else {
        memoStore.memos = [];

        this.logout();
      }
    });
  },
  async logout() {
    try {
      const memoStore = useMemoStore();
      memoStore.clearMemos();

      await auth.signOut();

      localStorage.removeItem('auth');
      this.setUser({
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        creationTime: null,
        lastSignInTime: null,
      });

      this.error = null;
    } catch (err) {
      console.error('Error logging out:', err);
      this.error = 'Error logging out. Please try again.';
    }
  },
};
