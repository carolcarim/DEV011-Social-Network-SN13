import {
  onAuthStateChanged,
} from 'firebase/auth';
import {
  likePost, deletePost,
} from '../lib/auth.js';

import {
  createNewPost, paintRealTime,
} from '../lib/store.js';
import {
  auth,
} from '../lib/firebase.js';

function homepage() {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionHomepage');

  // Logo para el Inicio
  const imgLogoHp = document.createElement('img');
  imgLogoHp.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  imgLogoHp.alt = 'Logo de Drink Atlas';
  imgLogoHp.id = 'drink4';

  // Div para la barra de menú
  const menuBar = document.createElement('div');
  menuBar.setAttribute('id', 'menuBarHp'); // agregamos id

  // Función botón "Crear Post"
  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'Publicar';
  buttonCreatePost.setAttribute('id', 'btnCreatePost');
  buttonCreatePost.addEventListener('click', () => {
    const content = document.getElementById('postHp').value;
    console.log('funciona click', content);

    // Obtener el estado de autenticación actual
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        console.log('ID del usuario actual:', userId);
        createNewPost(userId, content);
        // Después de crear el nuevo post, volver a pintar todos los posts
        paintRealTime();
      } else {
        console.error("Error: 'userId' no está definido");
      }
    });
  });

  // Input para escribir una publicación
  const inputpost = document.createElement('input');
  inputpost.setAttribute('id', 'postHp');
  inputpost.placeholder = '¿Qué quieres publicar hoy?';

  // Sección "post"
  const postSection = document.createElement('article');
  postSection.setAttribute('class', 'postSection'); // le damos una clase

  // Función para que aparezcan las publicaciones en el muro
  paintRealTime((querySnapshot) => {
    postSection.textContent = ''; // vacía el contenido del elemento -- innerHTML
    // Aquí deberías manejar el snapshot en tiempo real
    if (querySnapshot) {
      querySnapshot.forEach((doc) => { // itera en cada publicacion
        console.log(doc.id);
        console.log(doc.data());

        // Crear el elemento "cada post" publicado
        const eachPost = document.createElement('article');
        eachPost.classList.add('postStyles');
        eachPost.value = doc.data().content; // establecemos en content el valor del elemento

        // Crear el elemento de texto para el contenido del post
        const userName = document.createElement('p');
        userName.textContent = doc.data().userId;
        userName.classList.add('userName'); // Agregar la clase de estilo para el contenido del post

        // Crear el elemento de texto para el contenido del post
        const eachPostContent = document.createElement('p');
        eachPostContent.textContent = doc.data().content;
        eachPostContent.classList.add('eachPostContent'); // Agregar la clase de estilo para el contenido del post

        // Crear el botón de "Like" para este post
        const likeButton = document.createElement('button');
        likeButton.setAttribute('id', `btnLike_${doc.id}`); // Asignar un ID único al botón
        likeButton.classList.add('likeButton'); // Agregar la clase de estilo base para el botón de "Like"

        // Crear el contador de likes
        const likeCounter = document.createElement('span');
        likeCounter.classList.add('likeCounter'); // Puedes agregar estilos según tus necesidades
        likeCounter.textContent = doc.data().likedBy ? doc.data().likedBy.length.toString() : '0'; // Mostrar la cantidad de likes

        likeButton.addEventListener('click', async () => {
          const userId = 'ID_DEL_USUARIO_ACTUAL'; // Reemplaza con el ID del usuario actual

          // Verificar si el usuario ya dio like
          const likedBy = doc.data().likedBy || [];

          if (likedBy.includes(userId)) {
          // Si el usuario ya dio like, quitar el like usando arrayRemove
            await likePost(doc.id, userId, 'arrayRemove');
            likeButton.classList.remove('liked');
            likeCounter.textContent = likedBy.length > 1 ? (likedBy.length - 1).toString() : '0';
          } else {
          // Si el usuario no ha dado like, agregar el like usando arrayUnion
            await likePost(doc.id, userId, 'arrayUnion');
            likeButton.classList.add('liked');
            likeCounter.textContent = (likedBy.length + 1).toString();
          }
        });

        // Crear botón para elminar post
        const deleteButton = document.createElement('button'); // agregamos el boton eliminar
        deleteButton.textContent = '';
        deleteButton.classList.add('btnDelete');

        // Crear botón para editar post
        const editButton = document.createElement('button'); // agregamos el boton editar
        editButton.textContent = '';
        editButton.classList.add('btnEdit');

        // Función para eliminar un post
        deleteButton.addEventListener('click', () => { // agregamos evento
          const documentId = doc.id;
          deletePost(documentId);
        });

        // Agregar los elementos al post
        eachPost.appendChild(userName);
        postSection.appendChild(eachPost, eachPostContent);
        eachPost.append(eachPostContent);
        eachPost.appendChild(likeButton);
        eachPost.appendChild(likeCounter);
        eachPost.appendChild(editButton);
        eachPost.appendChild(deleteButton);
      });
    }
  });

  // Función botón "Cerrar sesión"
  /* const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Cerrar Sesión';
  buttonSignOut.setAttribute('id', 'btnSignOut');
  buttonSignOut.addEventListener('click', () => {
    // Llama a la función signOutUser cuando se hace clic en el botón
    signOut(); //
    evento;
    navigateTo('/');
  });
 */

  // Agregamos toda la sección a la página
  section.append(
    menuBar,
    imgLogoHp,
    buttonCreatePost,
    inputpost,
    postSection,
  );

  return section;
}
export default homepage;
