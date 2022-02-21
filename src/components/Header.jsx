import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul> 
                    <li> <div><i className="fas fa-home"></i></div> <Link key="1" to="/">Home</Link> </li>
                    <li><div><i className="fas fa-address-card"></i></div><Link key="2" to="/about">About</Link> </li>
                    <li><div><i className="fas fa-address-card"></i></div><Link key="3" to="/projects">Projects</Link> </li>
                    <li><div><i className="fas fa-info-circle"></i></div><Link key="4" to="/blog">Blog</Link> </li>
                    <li><div><i className="far fa-address-book"></i></div><Link key="5" to="/contact">Contact</Link>  </li>
                </ul>
            </div>
        )
    }
}

export default Header