import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import {
  addDoc, arrayUnion, arrayRemove, collection,
  deleteDoc, doc, getDocs, updateDoc,
} from 'firebase/firestore';
import {
  auth, db,
} from './firebase';

// eslint-disable-next-line max-len
export const signInUsers = async (email, password) => signInWithEmailAndPassword(auth, email, password);

export function call_login_google() {
  const provider = new GoogleAuthProvider();
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
// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Manejar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    console.log('ID del usuario actual:', userId);

    // Ahora puedes usar userId en tu aplicación
  } else {
    console.log('No hay usuario autenticado');
  }
});

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

// Función para eliminar un post
export const deletePost = (documentId) => {
  console.log(documentId, 'deletePost');
  deleteDoc(doc(db, 'postDrinks', documentId));
};

export const signOutFunction = () => {
  signOut(auth);
};

export const storeUserInfo = (info) => addDoc(collection(db, 'usersDrinks'), info); // revisar
