import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="profile">
                    <img className="profilePic" height="10" width="10" src={process.env.PUBLIC_URL + '/profilepic.jpg'} alt={"profilePic"}/> 
                    
                    <div className="">
                        <h1 className="profilename">Mehedi Hasan</h1>
                        <h2 className="profilename"> Software Engineer </h2>
                    </div>
                    <div >
                        
                    </div>
                    <div className="linksdiv">
                        <ul className="nav-menu">
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/about">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar