import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './NavBar.module.css'

const NavBar = () => {

    return (
        <nav className={Styles.main}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;