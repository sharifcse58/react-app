import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul> 
                    <li> <div><Link to="/"><div><i className="fas fa-home"></i></div> Home </Link></div>  </li>
                    <li><div><Link to="/about"><div><i className="fas fa-address-card"></i></div>Resume</Link> </div> </li>
                    <li><div><Link to="/projects"><div><i className="fas fa-address-card"></i></div>Projects</Link></div> </li>
                    <li><div><Link to="/blog"><div><i className="fas fa-info-circle"></i></div>Blog</Link></div> </li>
                    <li><div><Link to="/contact"><div><i className="far fa-address-book"></i></div>Contact</Link></div> </li>
                </ul>
            </div>
        )
    }
}

export default Header