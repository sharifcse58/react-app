import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'


const Container = styled.div.attrs({
    className: 'container',
})``



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="common-card">
                    <div class="heding" uk-scrollspy="cls: uk-animation-slide-left;">Hello, I am Mehedi Hasan</div>
                    <div class="aboutme" uk-scrollspy="cls: uk-animation-slide-right;">
                     <h2>A Full Stack Laravel and ReactJS Web/Software Developer</h2> 
                     <p>I have 2 years 5 months working experience in different software company. Javascript, nodeJS Mongodb, express, featherjs, React, react native, electronjs are my top key skills and gathered experince through invoving myself in development of many desktop application , Web application.</p>
                     <p>Started my career as a Software Engineer and I got the opportunity to work in different companies with different teams and technologies. From there, I have learned a lot about Research and Development which is a key factor in order to solve newer problems.</p>
                     <p>Having a Computer Science background, I look forward to learning and research more and more about new technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity, professional skills and leadership abilities which I would love to implement in real life for making this world a much better place.</p>
                    </div>
                </div>
                <div class="common-card" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                    <div class="about">
                        <span class="lftBorder"></span>
                        <div class="aboutCont uk-card uk-card-default uk-card-body">
                            <div class="aboutHdr"><span>December, 2018 - Present</span></div>
                            <div class="aboutItem">
                                <h2>Software engineer</h2>
                                <h3>Mars Solution Ltd</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                            </div>
                        </div>
                        <div class="aboutCont uk-card uk-card-default uk-card-body">
                            <div class="aboutHdr"><span>December, 2018 - Present</span></div>
                            <div class="aboutItem">
                                <h2>Software engineer</h2>
                                <h3>Mars Solution Ltd</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                            </div>
                        </div>
                        <div class="aboutCont uk-card uk-card-default uk-card-body">
                            <div class="aboutHdr"><span>December, 2018 - Present</span></div>
                            <div class="aboutItem">
                                <h2>Software engineer</h2>
                                <h3>Mars Solution Ltd</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                            </div>
                        </div>
                        <div class="aboutCont uk-card uk-card-default uk-card-body">
                            <div class="aboutHdr"><span>December, 2018 - Present</span></div>
                            <div class="aboutItem">
                                <h2>Software engineer</h2>
                                <h3>Mars Solution Ltd</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>
        )
    }
}

export default withRouter(Home)