import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SideBar extends Component {
    render() {
        return (
            <div class="sidebar">
                <div class="profile">
                    <img class="profilePic" height="10" width="10" src={process.env.PUBLIC_URL + '/profilepic.jpg'} alt={"profilePic"}/> 
                    
                    <div class="">
                        <h1 class="profilename">Mehedi Hasan</h1>
                        <h2 class="profilename"> Software Engineer </h2>
                    </div>
                    <div >
                        
                    </div>
                    <div class="linksdiv">
                        <ul class="nav-menu">
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