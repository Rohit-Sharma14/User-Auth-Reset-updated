import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <Link class="brand-logo">Foodviram</Link>
                <ul id="nav-mobile" class="right">
                    <li><Link to="/signin">signin</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}
