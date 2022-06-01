import '../../global/styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axiosConf'
import Loading from '../Loading'

export default function Login() {
  let navigate = useNavigate()
  const redirect = () => {
    navigate('/register')
  }
  const [isShowing, setIsShowing] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const getEmail = event => {
    const usermail = event.target.value
    setEmail(usermail)
  }
  const getPassword = event => {
    const userpswd = event.target.value
    setPassword(userpswd)
  }
  const logIn = async () => {
    setIsLoading(true)
    axios
      .post('http://localhost:3001/auth/user', {
        email: email,
        password: password
      })
      .then(res => {
        const data = res.data
        console.log(data)
        navigate('/tasks')
      })
      .catch(err => {
        setIsLoading(false)
        const info = err.response.data
        setError(info.err)
      })
  }

  function mostrarSenha() {
    if (document.getElementById('password').type == 'text') {
      document.getElementById('password').type = 'password'
      checkEye()
    } else {
      document.getElementById('password').type = 'text'
      checkEye()
    }
  }

  function checkEye() {
    if (document.getElementById('icon').className == 'icon-eye') {
      document.getElementById('icon').className = 'icon-eye-off'
    } else {
      if (document.getElementById('icon').className == 'icon-eye-off') {
        document.getElementById('icon').className = 'icon-eye'
      }
    }
  }

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <div className="main">
        <div className="login-box">
          <h2>Login</h2>
          <form method="post">
            <div className="user-box">
              <input
                type="text"
                name="email"
                onChange={getEmail}
                required="email"
                autoComplete="off"
              />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={getPassword}
                required="password"
                autoComplete="off"
                id="password"
              />
              <i id="icon" onClick={mostrarSenha} className="icon-eye"></i>
              <label>Password</label>
            </div>

            <div className="message">
              <p>{error ? error : ''}</p>
            </div>

            <div className="buttons">
              <button type="button" onClick={logIn}>
                Submit
              </button>
              <button type="button" onClick={redirect}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}