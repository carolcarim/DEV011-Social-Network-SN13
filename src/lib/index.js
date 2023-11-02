// aqui exportaras las funciones que necesites

import { auth, provider } from "../../firebase-config";

import { signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth"; //importamos metodos


export const myFunction = () => {
  // aqui tu codigo
  console.log("Hola mundo!");
};

//funcion de boton de google
export function call_login_google() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log({user});
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({errorMessage});
      return errorMessage
      //...
    });
}
 //Funcion registrar usuarios nuevos 
 export function createUser(email,password) {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }
