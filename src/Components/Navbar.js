
import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="nav">
            <div className="logo">
                <h1>Олег Марков</h1>
            </div>
            <ul >
                <li>
                    <Link className="item-link" to='/'>Menu</Link>
                </li>
                <li>
                    <Link className="item-link" to='about'>About</Link>
                </li>
                <li>
                    <Link className="item-link" to='contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;