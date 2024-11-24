import { initializeApp } from 'firebase/app';
import { FIREBASE } from '@/constants';

const firebaseConfig = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
  appId: FIREBASE.appId,
};

const app = initializeApp(firebaseConfig);

export default app;