import app from './config';
import auth from './auth';
import db from './firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from './authUtils';

export {
  app,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};