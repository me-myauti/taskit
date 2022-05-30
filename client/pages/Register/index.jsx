import '../../global/styles.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../services/axiosConf'
import Loading from '../Loading'

export default function Register() {
  let navigate = useNavigate()
  function goToPage() {
    navigate("/login")
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getName = (event) => {
    const username = event.target.value
    setName(username)
  }
  const getEmail = (event) => {
    const usermail = event.target.value
    setEmail(usermail)
  }
  const getPassword = (event) => {
    const userpswd = event.target.value
    setPassword(userpswd)
  }
  const getConfirmPassword = (event) => {
    const userpswdconf = event.target.value
    setPasswordConfirm(userpswdconf)
  }

  const registerUser = async () => {
    setIsLoading(true)
    axios.post('/auth/register', {
      name: name,
      email: email,
      password: password,
      confirmPswd: passwordConfirm
    }).then((res) => {
      const data = res.data
      navigate('/')
    }).catch((err) => {
      setIsLoading(false)
      const info = err.response.data
      setError(info.err)
    })
  }
  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className="main">
        <div className="login-box">
          <h2>Sign up</h2>

          <form method="post">
            <div className="user-box">
              <input type="text" onChange={getName} name="name" required="name" autoComplete="off" />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="email" onChange={getEmail} required="email" autoComplete="off" />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input type="password" name="password" onChange={getPassword} required="password" autoComplete="off" />
              <label>Password</label>
            </div>

            <div className="user-box">
              <input type="password" name="confirmPswd" onChange={getConfirmPassword} required="password" autoComplete="off" />
              <label>Confirm password</label>
            </div>

            <div className='message'>
              <p>{error ? error : ''}</p>
            </div>

            <div className="buttons">
              <button onClick={registerUser} type="button">Submit</button>
              <button type="button" onClick={goToPage}>Go to login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}