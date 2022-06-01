import "../../global/styles.css";
import { useState } from "react";
import axios from "../../services/axiosConf";
import { useNavigate } from "react-router-dom";
import mostrarSenha from "../../controllers/passwordVisibilityToggle";
import Loading from "../../pages/Loading";

export default function FormLogin() {
  let navigate = useNavigate();
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  
  const loginHandler = async () =>{
    setIsLoading(true);
    await axios.post("http://localhost:3001/auth/user", {
        email: email,
        password: password,
      })
      .then((res) => {
        const data = res.data;
        localStorage.setItem("UID", data.id)
        localStorage.setItem("UserToken", data.token)
        navigate('/tasks')
      })
      .catch((err) => {
        setIsLoading(false);
        const info = err.response.data
        setError(info.err)
      });
  }

  if(isLoading){
    return (
      <Loading />
    )
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={async ()=> await loginHandler(email, password)} method="post">
        <div className="user-box">
          <input
            type="text"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            required="email"
            autoComplete="off"
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            required="password"
            autoComplete="off"
            id="password"
            className="password-3"
          />
          <i id="icon" onClick={mostrarSenha} className="icon-eye" />
          <label>Password</label>
        </div>
        <div className="message">
          <p>{!error ? "" : error}</p>
        </div>
        <div className="buttons">
          <button type="button" onClick={()=>loginHandler(email, password)}>
            Submit
          </button>
          <button type="button" onClick={()=>navigate('/register')}>
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
