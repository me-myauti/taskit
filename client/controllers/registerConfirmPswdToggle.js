function mostrarSenha2() {
  var id = document.getElementById('password2')
  if (id.type === 'password') {
    id.type = 'text'
  } else {
    id.type = 'password'
  }
}
