import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul> 
                    <li> <Link to="/"> <i className="fas fa-home"></i> Home</Link>   </li>
                    <li> <Link to="/about"><i className="fas fa-address-card"></i> Resume</Link> </li>
                    <li> <Link to="/projects"> <i className="fas fa-address-card"></i> Projects</Link> </li>
                    <li> <Link to="/blog"> <i className="fas fa-info-circle"></i> Blog</Link> </li>
                    <li> <Link to="/contact"><i className="far fa-address-book"></i> Contact</Link> </li>
                </ul>
            </div>
        )
    }
}

export default Header