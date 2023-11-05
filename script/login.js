import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

export function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Autenticación exitosa, el usuario está ahora autenticado
      const user = userCredential.user;
      console.log("Inicio de sesión exitoso. Usuario:", user);
      // Aquí puedes redirigir al usuario a la página deseada o realizar otras acciones después del inicio de sesión.
       // Redirigir al usuario a la página principal
      window.location.href = "prueba.html";
    })
    .catch((error) => {
      // Manejo de errores, muestra un mensaje de error al usuario
      console.error("Error de inicio de sesión:", error);
      alert("Error de inicio de sesión: " + error.message);
    });
}
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página por defecto
  login(); // Llama a la función de inicio de sesión
});