import React, { Component } from 'react'


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="common-card">
                    <div className="contactBox">
                        <h2>Contact with me</h2>
                        <label className="defaultLabel" htmlFor="">Name</label>
                        <input className="customInput" type="text"/>
                        <label className="defaultLabel" htmlFor="">Email</label>
                        <input className="customInput" type="text"/>
                        <label className="defaultLabel" htmlFor="">Phone</label>
                        <input className="customInput" type="text"/>
                        <div><button className="mehedi common-top-margin">Submit</button></div>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default Contact