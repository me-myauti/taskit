import './styles.css'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import CheckIcon from '../../assets/CheckIcon'
import CloseIcon from '../../assets/CloseIcon'
import EditIcon from '../../assets/EditIcon'
import axios from 'axios'


export default function Task() {
    const navigate = useNavigate()
    const token = localStorage.getItem('UserToken')
    const uid = localStorage.getItem('UID')
    const config = {
        headers: {
            'authorization': `Bearer: ${token}`
        }
    }
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }else{
            axios.get(`http://localhost:3001/user/${uid}`, config).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }, [])

    
    
    return (
        <div className="main">
            <div className="task-box">
                <h2 className='title'>Tasks</h2>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}