import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./firebase.js"; // Asegúrate de importar el objeto auth desde tu archivo firebase.js

// Función para registrar un usuario
function register() {
  const email = document.getElementById("registro-email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registro exitoso, el usuario está ahora registrado
      const user = userCredential.user;
      console.log("Registro exitoso. Usuario:", user);
      // Redirigir al usuario a la página deseada o realizar otras acciones después del registro.
      window.location.href = "inicioSesion.html"; // Cambia "pagina-de-exito.html" por la página a la que deseas redirigir.
    })
    .catch((error) => {
      // Manejo de errores, muestra un mensaje de error al usuario
      console.error("Error de registro:", error);
      alert("Error de registro: " + error.message);
    });
}

document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página por defecto
  register(); // Llama a la función de registro
});
