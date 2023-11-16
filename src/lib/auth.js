import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  addDoc, arrayUnion, arrayRemove, collection,
  deleteDoc, doc, getDocs, updateDoc,
} from 'firebase/firestore';
import {
  auth, db,
} from './firebase';

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
// eslint-disable-next-line camelcase
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
export function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      auth.signOut();
      // Enviar un correo de verificación al usuario
      sendEmailVerification(user).then(() => {
        console.log('Correo de verificación enviado');
      });
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log('Error al registrar usuario:', errorMessage);
      return errorMessage;
    });
}

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

export const storeUserInfo = (info) => addDoc(collection(db, 'usersDrinks'), info); // revisar