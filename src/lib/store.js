import {
  collection, addDoc, getDocs, query, orderBy, onSnapshot,
} from 'firebase/firestore';

import { db } from './firebase';

// Funciones para HOMEPAGE
const postCollection = collection(db, 'postDrinks');

// Función para agregar un nuevo post a Firestore
export function createNewPost(user, content) {
  if (user && content) {
    const timestamp = new Date();

    // Agregar un nuevo documento con un ID generado automáticamente
    const newDocRef = addDoc(postCollection, {
      userId: user.uid,
      userName: user.displayName,
      content,
      timestamp,
      likedBy: [],
    });
    console.log('Documento agregado con el ID:', newDocRef.id);
  } else {
    console.error('Error: User ID or content is undefined or null');
  }
}

export {
  addDoc, collection, getDocs, onSnapshot, orderBy, query,
};

export const querySnapshot = getDocs(postCollection);
export const q = query(postCollection, orderBy('timestamp', 'desc')); // para que aparezca en orden la publciacion
export const paintRealTime = (callback) => onSnapshot(q, callback);
