import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div class="header">
                <ul> 
                    <li> <div><i class="fas fa-home"></i></div> <Link to="/">Home</Link> </li>
                    <li><div><i class="fas fa-address-card"></i></div><Link to="/about">About</Link> </li>
                    <li><div><i class="fas fa-address-card"></i></div><Link to="/projects">Projects</Link> </li>
                    <li><div><i class="fas fa-info-circle"></i></div><Link to="/blog">Blog</Link> </li>
                    <li><div><i class="far fa-address-book"></i></div><Link to="/contact">Contact</Link>  </li>
                </ul>
            </div>
        )
    }
}

export default Header