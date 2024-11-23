import { initializeApp } from 'firebase/app';
import { FIREBASE } from '@/constants';

const firebaseConfig = {
  apiKey: FIREBASE.apiKey,
  authDomain: FIREBASE.authDomain,
  projectId: FIREBASE.projectId,
  storageBucket: FIREBASE.storageBucket,
  messagingSenderId: FIREBASE.messagingSenderId,
  appId: FIREBASE.appId,
};

const app = initializeApp(firebaseConfig);

export default app;