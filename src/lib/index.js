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

// Obtiene referencias a los elementos de entrada del DOM
const inputUserName = document.getElementById('inputUserName');
const inputNewEmail = document.getElementById('inputNewEmail');
const inputCreatePass = document.getElementById('inputCreatePass');
const registerButton = document.getElementById('btnRegister');

 //Funcion registrar usuarios nuevos 
 export function createUser(userName, email, password) {
 return createUserWithEmailAndPassword(auth, userName, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("usuario registrado:", user);
    return userCredential
    //..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al registrar usuario:", errorMessage); 
   return errorMessage
    // ..
  });
 }
