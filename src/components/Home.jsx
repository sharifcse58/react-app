import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="common-card">
                        <div className="aboutme" uk-scrollspy="cls: uk-animation-slide-right;">

                            <div className="about-info">

                            <h5>A Full Stack Laravel Vue js and React JS Software Developer</h5> 
                                <p>I have 2 years 5 months working experience in different software company. Javascript, nodeJS Mongodb, express, featherjs, React, react native, electronjs are my top key skills and gathered experince through invoving myself in development of many desktop application , Web application.</p>
                                <p>Started my career as a Software Engineer and I got the opportunity to work in different companies with different teams and technologies. From there, I have learned a lot about Research and Development which is a key factor in order to solve newer problems.</p>
                                <p>Having a Computer Science background, I look forward to learning and research more and more about new technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity, professional skills and leadership abilities which I would love to implement in real life for making this world a much better place.</p>
                            </div>
                        </div>
                    </div>

                    <div className="common-card" uk-grid uk-scrollspy="cls: uk-animation-slide-left; target: .uk-card; delay: 300; repeat: true">
                        <div className="about">
                            <span className="lftBorder"></span>
                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>December, 2018 - Present</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Mars Solution Ltd</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                                </div>
                            </div>
                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>December, 2018 - Present</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Mars Solution Ltd</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                                </div>
                            </div>
                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>December, 2018 - Present</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Mars Solution Ltd</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati voluptates nostrum. Odio quis aliquid minima, voluptatibus voluptatum eveniet, nemo architecto adipisci eligendi repellat nobis nostrum. Officia beatae illo veritatis.</p>
                                </div>
                            </div>
                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>December, 2018 - Present</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Mars Solution Ltd</h5>
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