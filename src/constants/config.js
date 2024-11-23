export const SITE_NAME = 'Memo Zap';

export const FREQUENCY = {
  DAILY: 'daily',
  MONTHLY: 'monthly',
  ANNUAL: 'annual',
};

export const AUTH_MODE = {
  LOGIN: 'login',
  SIGNUP: 'signup',
};

export const FIREBASE = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://memo-zap.firebaseio.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};