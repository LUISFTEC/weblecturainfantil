// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"; // Importa la autenticación de Firebase


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpkJIy-C65tKYlYFGP00m9NDwqZ4XR7og",
  authDomain: "loginweblecturadeninos.firebaseapp.com",
  projectId: "loginweblecturadeninos",
  storageBucket: "loginweblecturadeninos.appspot.com",
  messagingSenderId: "1006942244188",
  appId: "1:1006942244188:web:0f320264b1e5fd80e78599",
  measurementId: "G-LN9T60Y6VG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Exporta la autenticación de Firebase
export const auth = getAuth(app);
