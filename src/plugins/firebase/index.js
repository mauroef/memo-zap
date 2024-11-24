import app from './config';
import auth from './auth';
import {
  db,
  collection,
  query,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from './firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from './authUtils';

export {
  app,
  auth,
  db,
  collection,
  query,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
