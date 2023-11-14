import {
  getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query, deleteDoc, doc
} from 'firebase/firestore';
import { app } from './firebase-config.js';

export const db = getFirestore(app);
export {
  getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query, deleteDoc, doc
};
