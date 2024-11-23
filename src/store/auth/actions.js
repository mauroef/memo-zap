import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from '@/plugins/firebase';

export default {
  async register(email, password) {
    try {
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
    }
  },
  async login(email, password) {
    try {
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
    }
  },
  setUser(user) {
    this.user = user;
  },
  initAuthListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        });
      } else {
        this.logout();
      }
    });
  },
  async logout() {
    try {
      await auth.signOut();

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
