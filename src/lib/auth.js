import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  updateProfile,
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

// eslint-disable-next-line camelcase
export async function call_login_google() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log({ user });
    return user;
  } catch (error) {
    const errorMessage = error.message;
    console.log({ errorMessage });
    return errorMessage;
  }
}

// Función para el botón de registrar nuevos usuarios
// eslint-disable-next-line max-len
export const createUser = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('Nombre de usuario en createUser:', displayName);
    return updateProfile(user, { displayName })
      .then(() => user);
  })
  .catch((error) => {
    throw error;
  });

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
export async function likePost(postId, operationType) {
  console.log(postId, operationType);
  const user = auth.currentUser;
  console.log(user.uid);
  try {
    // Obtener la información actual del post
    const postRef = doc(db, 'postsDrinks', postId);
    const postQuerySnapshot = await getDocs(postRef);
    console.log(postQuerySnapshot);
    const postDoc = postQuerySnapshot.data();
    console.log(postDoc);
    if (postDoc.exists()) {
      // Obtener la lista de usuarios que han dado like
      const likedBy = postDoc.data().likedBy || [];
      console.log(likedBy);
      // Realizar la operación correspondiente
      if (operationType === 'arrayUnion') {
        console.log('arrayUnion');
        await updateDoc(postRef, {
          likedBy: arrayUnion(user.uid),
        });
      } else if (operationType === 'arrayRemove') {
        await updateDoc(postRef, {
          likedBy: arrayRemove(user.uid),
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

// Función para cerrar sesión
export const signOutFunction = () => {
  signOut(auth);
};

export const storeUserInfo = (info) => addDoc(collection(db, 'usersDrinks'), info); // revisar
