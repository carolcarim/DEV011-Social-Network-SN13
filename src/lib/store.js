import {
  collection, addDoc, getDocs, query, orderBy, onSnapshot,
} from 'firebase/firestore';

import { db } from './firebase';

// Funciones para HOMEPAGE
const postCollection = collection(db, 'postDrinks');

// Función para agregar un nuevo post a Firestore
export function createNewPost(userId, content) {
  if (userId && content) {
    const timestamp = new Date();
    addDoc(postCollection, {
      userId,
      content,
      timestamp,
    });
  } else {
    console.error('Error: User ID or content is undefined or null');
  }
}

export {
  addDoc, collection, getDocs, onSnapshot, orderBy, query,
};

export const querySnapshot = getDocs(postCollection);
export const q = query(postCollection, orderBy('date', 'desc')); // para que aparezca en orden la publciacion
export const paintRealTime = (callback) => onSnapshot(q, callback);
