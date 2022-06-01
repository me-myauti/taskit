import mostrarSenha from "../../controllers/passwordVisibilityToggle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../services/axiosConf";

export default function FormRegister() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    axios
      .post("/auth/register", {
        name: name,
        email: email,
        password: password,
        confirmPswd: passwordConfirm,
      })
      .then((res) => {
        const data = res.data;
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        const info = err.response.data;
        setError(info.err);
      });
  };

  return (
    <div className="login-box">
      <h2>Sign up</h2>

      <form method="post">
        <div className="user-box">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            required="name"
            autoComplete="off"
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required="email"
            autoComplete="off"
          />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required="password"
            autoComplete="off"
            id="password"
          />
          <label>Password</label>
        
        </div>

        <div className="user-box">
          <input
            type="password"
            name="confirmPswd"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required="password"
            autoComplete="off"
            id="password2"
          />
          <label>Confirm password</label>
         
        </div>

        <div className="message">
          <p>{error ? error : ""}</p>
        </div>

        <div className="buttons">
          <button onClick={registerUser} type="button">
            Submit
          </button>
          <button type="button" onClick={()=>navigate('/login')}>
            Go to login
          </button>
        </div>
      </form>
    </div>
  );
}
