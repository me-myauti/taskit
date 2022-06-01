function mostrarSenha() {
  var id = document.getElementById('password')
  if (id.type === 'password') {
    id.type = 'text'
  } else {
    id.type = 'password'
  }
}