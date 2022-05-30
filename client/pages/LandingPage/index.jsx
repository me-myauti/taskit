import './styles.css'
import LoginIcon from '../../assets/LoginIcon'
import RegisterIcon from '../../assets/RegisterIcon'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
    
    const navigate = useNavigate()
    
    const goToLogin = () => {
        navigate('login')
    }
    const goToRegister = () => {
        navigate('register')
    }
    
    return (
        <div className="main-page">
           
        
            <div className="choose">
                 <div className="title">
                    <h2>Welcome to Taskit</h2>
                </div>
                <div className="option">
                    <button onClick={goToLogin} className="content">
                        <LoginIcon />
                        <h2>Login</h2>
                    </button>
                        
                    <button onClick={goToRegister} className="content">
                        <RegisterIcon />
                        <h2>Register</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}
