import '../../global/styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axiosConf'
import Loading from '../Loading'
import FormLogin from '../../components/FormLogin'

export default function Login() {
    return (
      <div className="main">
        <FormLogin />
      </div>
    )
}
