import {
  getFirestore,
  collection,
  query,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import app from './config';

const db = getFirestore(app);

export {
  db,
  collection,
  query,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
};
