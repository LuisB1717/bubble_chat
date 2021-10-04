// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {initializeApp} from 'https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js'
// import {getFirebaseAuth} from 'https://www.gstatic.com/firebasejs/7.14.4/firebase-auth.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4uYByMJYGcIp705LGSM0T6TWOoZ4I5Jg",
    authDomain: "bubblechat-43994.firebaseapp.com",
    projectId: "bubblechat-43994",
    storageBucket: "bubblechat-43994.appspot.com",
    messagingSenderId: "196537405344",
    appId: "1:196537405344:web:12acd8eff636e27db89ec5",
    measurementId: "G-DZQ3ZC6M70"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Firebase Auth
  
  function obtenerAuth() {
    return firebase.auth()
  }
  
  function obtenerProveedorGoogle(){
    return new firebase.auth.GoogleAuthProvider()
  }
  
  async function iniciarSesionGoogle(){
    try {
      const auth = obtenerAuth()
      const proveedor = obtenerProveedorGoogle()
      const resultado = await auth.signInWithPopup(proveedor)
      return resultado
    } catch (error) {
      console.error(error);
    }
  }
  
  export default {
    auth: {
      iniciarSesionGoogle
    }
  }
  
  