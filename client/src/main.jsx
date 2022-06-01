import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Task from '../pages/Task'
import LandingPage from '../pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="tasks" element={<Task />} />   
    </Routes>
</BrowserRouter>
)
