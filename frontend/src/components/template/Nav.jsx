import './Nav.css'
import React from 'react'
import { Link }  from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <ul className="nav">
        <li className="nav-item">
            <Link to='/' className="nav-link">Início</Link>
        </li>
        <li className="nav-item">
            <Link to='/user' className="nav-link">Usuário</Link>
        </li>
    </ul>
</aside>