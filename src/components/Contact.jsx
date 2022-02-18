import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../css/style.css'

const Container = styled.div.attrs({
    className: 'container',
})``

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