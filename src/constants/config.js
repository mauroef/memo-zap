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
  API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  DATABASE_URL: 'https://memo-zap.firebaseio.com',
  PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const TOAST = {
  AUTO_HIDE_TIME: 3000,
  TYPE: {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning',
  },
};
