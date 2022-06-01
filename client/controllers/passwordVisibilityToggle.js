export default function mostrarSenha() {
    if (document.getElementById("password").type == "text") {
      document.getElementById("password").type = "password";
      checkEye();
    } else {
      document.getElementById("password").type = "text";
      checkEye();
    }
  }

  function checkEye() {
    if (document.getElementById("icon").className == "icon-eye") {
      document.getElementById("icon").className = "icon-eye-off";
    } else {
      if (document.getElementById("icon").className == "icon-eye-off") {
        document.getElementById("icon").className = "icon-eye";
      }
    }
  }