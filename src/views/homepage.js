import {
  createPost, querySnapshot, paintRealTime, deletePost, likePost,
} from '../lib/index.js';

function homepage(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionHomepage'); // agregamos id

  // Título de Login
  /* const titleHomepage = document.createElement("h2");
titleHomepage.setAttribute("id", "titleHomepage"); //agregamos id
titleHomepage.textContent = "¿Qué quieres publicar?"; */

  // Logo para el Inicio
  const imgLogoHp = document.createElement('img');
  imgLogoHp.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  imgLogoHp.alt = 'Logo de Drink Atlas';
  imgLogoHp.id = 'drink4';

  // Div para menú
  const menuBar = document.createElement('div');
  menuBar.setAttribute('id', 'menuBarHp'); // agregamos id

  // Foto de perfil sobre el Div --> menú
  const imgProfilePic = document.createElement('img');
  imgProfilePic.src = 'https://freesvg.org/img/abstract-user-flat-4.png';
  imgProfilePic.alt = 'Foto perfil del usuario';
  imgProfilePic.id = 'profilePic';

  // Función botón "Crear Post"
  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.textContent = 'Publicar';
  buttonCreatePost.setAttribute('id', 'btnCreatePost');
  buttonCreatePost.addEventListener('click', () => {
    const comment = document.getElementById('postHp').value;
    console.log('funciona click', comment);
    createPost(comment);
  // evento
  // navigateTo("/"); //deberia aparecer un pop-up? para poder publicar...
  });

  // Función botón "Crear Post"
  const buttonEditPost = document.createElement('button');
  buttonEditPost.textContent = 'Editar';
  buttonEditPost.setAttribute('id', 'btnEditPost');
  buttonEditPost.addEventListener('click', () => {
  // evento
    navigateTo('/'); // deberia aparecer un pop-up? para poder publicar...
  });

  // Input para Post
  const inputpost = document.createElement('input');
  inputpost.setAttribute('id', 'postHp'); // agregamos id
  inputpost.placeholder = '¿Qué quieres publicar hoy?';

  // seccion post
  const postSection = document.createElement('article');
  postSection.setAttribute('class', 'postSection'); // agregamos id

  // Agregar post al muro
  querySnapshot.then((docs) => {
    docs.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      const post = document.createElement('input');
      post.value = doc.data().comment;
      postSection.append(post);
    });
  });

  paintRealTime((querySnapshot) => { // definimos la funcion
    postSection.textContent = ''; // vacía el contenido del elemento
    querySnapshot.forEach((doc) => { // itera en cada publicacion
      console.log(doc.id);
      console.log(doc.data());

      // Crear el elemento "cada post" publicado
      const eachPost = document.createElement('div');
      eachPost.classList.add('postStyles');
      eachPost.value = doc.data().comment; // establecemos en comment el valor del elemento

      // Crear botón para elminar post
      const deleteButton = document.createElement('button'); // agregamos el boton eliminar
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('btnDelete');

      // Crear botón para editar post
      const editButton = document.createElement('button'); // agregamos el boton editar
      editButton.textContent = 'Editar';
      editButton.classList.add('btnEdit');

      // Crear el elemento de texto para el contenido del post
      const eachPostContent = document.createElement('input');
      eachPostContent.value = doc.data().comment;
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

      // Función para eliminar un post
      deleteButton.addEventListener('click', () => { // agregamos evento
        const documentId = doc.id;
        deletePost(documentId);
      });

      // agregamos los elementos al post
      postSection.appendChild(eachPost);
      eachPost.append(eachPostContent, likeButton, deleteButton, editButton);
      postSection.append(eachPost);
    });
  });
   // Función botón "Cerrar sesión"
  // const buttonSignOut = document.createElement('button');
 // buttonSignOut.textContent = 'Cerrar Sesión';
  //buttonSignOut.setAttribute('id', 'btnSignOut');
  //buttonSignOut.addEventListener('click', () => {
    // Llama a la función signOutUser cuando se hace clic en el botón
   // signOut(); //
    // evento
    // navigateTo('/');
  //}); 

  // Agregamos la sección a la página
  section.append(imgLogoHp,
    menuBar,
    imgProfilePic,
    buttonCreatePost,
    buttonEditPost,
    inputpost,
    postSection,
  );

  return section;
}
export default homepage;
