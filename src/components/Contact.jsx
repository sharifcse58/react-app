import React, { Component } from 'react'
import '../css/style.css'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="common-card">
                    <div class="contactBox">
                        <h2>Contact with me</h2>
                        <label class="defaultLabel" htmlFor="">Name</label>
                        <input class="customInput" type="text"/>
                        <label class="defaultLabel" htmlFor="">Email</label>
                        <input class="customInput" type="text"/>
                        <label class="defaultLabel" htmlFor="">Phone</label>
                        <input class="customInput" type="text"/>
                        <div><a class="mehedi common-top-margin" href="#">Submit</a></div>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default Contact