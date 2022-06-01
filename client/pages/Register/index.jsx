import "../../global/styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../services/axiosConf";
import Loading from "../Loading";
import FormRegister from "../../components/FormRegister";

export default function Register() {
  let navigate = useNavigate();
  function goToPage() {
    navigate("/login");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);
    axios
      .post("/auth/register", {
        name: name,
        email: email,
        password: password,
        confirmPswd: passwordConfirm,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        const info = err.response.data;
        setError(info.err);
      });
  };

 
    return (
      <div className="main">
        <FormRegister />
      </div>
    );
}
