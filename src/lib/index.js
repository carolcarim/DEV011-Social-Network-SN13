import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'; // importamos metodos
import {
  orderBy, query, updateDoc, arrayUnion, arrayRemove, serverTimestamp,
} from 'firebase/firestore';
import { auth, provider } from '../../firebase-config';
import {
  db, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc,
} from '../../firestore';




// Función para el botón de inicio de sesión usuarios existentes
export function signInUsers(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(auth, email, password, userCredential.user);
      return user;
    })
    .catch((error) => {
      console.log('ACA CATCH 2===>', error);
      const errorMessage = error.message;
      return errorMessage;
    });
}

// Función para el botón de inicio de sesión con Google
export function call_login_google() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log({ user });
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log({ errorMessage });
      return errorMessage;
    });
}

// Función para el botón de registrar nuevos usuarios
export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      auth.signOut();
      // Enviar un correo de verificación al usuario
      sendEmailVerification(auth.currentUser).then(() => {
        console.log('Correo de verificación enviado');
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log('Error al registrar usuario:', errorMessage);
      return errorMessage;
      // ..
    });
}


// Funciones para homepage
const postCollection = collection(db, 'postDrinks');

// Función para dar like a los post
export async function likePost(docRef, userId, operationType) {
  try {
    // Obtener la información actual del post
    const postQuerySnapshot = await getDocs(docRef);
    console.log(postQuerySnapshot);
    const postDoc = postQuerySnapshot.docs[0];
    console.log(postDoc);
    if (postDoc.exists()) {
      // Obtener la lista de usuarios que han dado like
      const likedBy = postDoc.data().likedBy || [];

      // Realizar la operación correspondiente
      if (operationType === 'arrayUnion') {
        await updateDoc(docRef, {
          likedBy: arrayUnion(userId),
        });
      } else if (operationType === 'arrayRemove') {
        await updateDoc(docRef, {
          likedBy: arrayRemove(userId),
        });
      }

      console.log('Operación de like realizada correctamente');
    } else {
      console.log('El post no existe');
    }
  } catch (error) {
    console.error('Error al dar like al post', error);
  }
}

// Funcion crear Post
export const createPost = (comment) => {
  addDoc(postCollection, {
    comment,
    date: Date.now(),
  });
};
 
// Funcion para eliminar post

export const deletePost = (documentId) => {
  console.log(documentId, 'deletePost');
  deleteDoc(doc(db, 'postDrinks', documentId));
};



export const querySnapshot = getDocs(postCollection);
export const q = query(postCollection, orderBy('date', 'desc')); // para que aparezca en orden la publciacion
export const paintRealTime = (callback) => onSnapshot(q, callback);
