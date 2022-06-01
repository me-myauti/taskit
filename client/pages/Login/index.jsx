import '../../global/styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axiosConf'
import Loading from '../Loading'

export default function Login() {
  let navigate = useNavigate()
  const redirect = () => {
    navigate("/register")
  }
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const getEmail = (event) =>{
    const usermail = event.target.value
    setEmail(usermail)
  }
  const getPassword = (event) =>{
    const userpswd = event.target.value
    setPassword(userpswd)
  }
  
  const loginHandler = async () => {
    axios.post("http://localhost:3001/auth/user",{
        email: email,
        password: password
        }).then((res)=>{
            const info = res.data
            console.log(info.token)
        }).catch((err)=>{
          const info = err.data
            console.log(info.err)
        })
  }

  if(isLoading){
    return(
      <Loading />
    )
  }else{
    return (
      <div className="main">
        <div className="login-box">
          <h2>Login</h2>
          <form method="post">
            <div className="user-box">
              <input type="text" name="email" onChange={getEmail} required="email" autoComplete="off" />
              <label>Email</label>
            </div>
  
            <div className="user-box">
              <input type="password" name="password" onChange={getPassword} required="password" autoComplete='off' />
              <label>Password</label>
            </div>
  
            <div className='message'>
              <p>{error ? error : ''}</p>
            </div>
  
            <div className="buttons">
              <button type="button" onClick={loginHandler}>Submit</button>
              <button type="button" onClick={redirect}>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  } 
}
