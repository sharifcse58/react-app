import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../css/style.css'

const Container = styled.div.attrs({
    className: 'container',
})``



class Blog extends Component {
    render() {
        return (
            <React.Fragment> 
            <div class="common-card">
                <img class="blogImg" src={process.env.PUBLIC_URL + '/blog1.jpg'} alt=""/>
                
                <div className="blog">
                <h2 class="common-top-margin">Blog title 1</h2>
                    <p class="blogContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                    </p>
                    <div><a class="readMore" href="#">Read more ... </a></div>
                </div>

                <div className="blog">
                <h2 class="common-top-margin">Blog title 1</h2>
                    <p class="blogContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                    </p>
                    <div><a class="readMore" href="#">Read more ... </a></div>
                </div>

                <div className="blog">
                <h2 class="common-top-margin">Blog title 1</h2>
                    <p class="blogContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                    </p>
                    <div><a class="readMore" href="#">Read more ... </a></div>
                </div>

                <div className="blog">
                <h2 class="common-top-margin">Blog title 1</h2>
                    <p class="blogContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                    </p>
                    <div><a class="readMore" href="#">Read more ... </a></div>
                </div>

                <div className="blog">
                <h2 class="common-top-margin">Blog title 1</h2>
                    <p class="blogContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eum nesciunt nam porro fuga laudantium earum qui quisquam temporibus placeat aliquid, ab quis accusamus ut officia doloribus, doloremque quo? Dolores!
                    </p>
                    <div><a class="readMore" href="#">Read more ... </a></div>
                </div>

               
            </div>
            </React.Fragment> 
        )
    }
}

export default Blog