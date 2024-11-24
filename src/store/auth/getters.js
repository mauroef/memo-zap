export default {
  getUser(state) {
    return state.user;
  },
  getUid(state) {
    return state.user.uid;
  },
  getEmail(state) {
    return state.user.email;
  },
  getDisplayName(state) {
    return state.user.displayName;
  },
  getPhotoURL(state) {
    return state.user.photoURL;
  },
  getCreationTime(state) {
    return state.user.creationTime;
  },
  getLastSignInTime(state) {
    return state.user.lastSignInTime;
  },
  isAuthenticated(state) {
    return state.user && state.user.uid != null;
  },
};
