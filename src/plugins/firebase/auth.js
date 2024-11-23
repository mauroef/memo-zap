import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import app from './config';

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Session persistence set to browserLocalPersistence');
  })
  .catch((error) => {
    console.error('Error setting session persistence:', error.message);
  });

export default auth;