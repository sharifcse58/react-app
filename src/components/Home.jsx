import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="common-card">
                        <div className="aboutme" uk-scrollspy="cls: uk-animation-slide-right;">

                            <div className="about-info">

                                <h3>Mohammad Shariful Islam </h3>
                                <h5>Address: House#29, Road#08, DIT Project, Merul Badda, Dhaka</h5>
                                <h5>Email:  sharifcse57@gmail.com, mehedi_sharif@index-companies.com.</h5>
                                <h5>Mobile: +8801679174124</h5>
                                <h5>Blog: www.sharifcse57.blogspot.com</h5>
                                <h5>Skype: sharifcse57@gmail.com</h5>
                                <h5>LinkedIn: https://www.linkedin.com/in/shariful-islam-889a03112</h5>
                                <h5>Website: https://sharif-b56ea.firebaseapp.com/</h5>
                            </div>
                        </div>
                    </div>


                    <div className="common-card" uk-grid uk-scrollspy="cls: uk-animation-slide-left; target: .uk-card; delay: 300; repeat: true">
                        <div className="about">
                            <span className="lftBorder"></span>
                            <h1>Working Experience</h1>

                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>December, 2021 - Present</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Selise Digital Platform</h5>
                                    <p>SELISE is a fast growing digital platform developer with innovation, consulting & IT delivery centers across Europe, Middle East and Asia.</p>
                                </div>
                            </div>

                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>November, 2019 - November 2021</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Index companies</h5>
                                    <p>‘X Index’ Companies (XIC) is a business conglomerate with notable presence in Bangladesh. Initiating in the year 1977, with a heritage spanning over four decades, XIC established itself as a dynamic and progressive entity in the rapidly growing economy of Bangladesh.</p>
                                </div>
                            </div>

                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>September, 2018 - October 2019</span></div>
                                <div className="aboutItem">
                                    <h4>Software engineer</h4>
                                    <h5>Mars Solution Ltd</h5>
                                    <p>MARS Solutions Limited is a multifaceted company having strong footprint in Information Technology and allied fields. From it's inception, the company has been rigorously working to create an IT savvy workforce in the country by extending hands-on training on software, hardware and various world-class ERPs including SAP. MARS has also successfully developed numerous innovative IT products and technology-driven logistics services. Some of which are already operative in the market and some are in the queue to be launched officially.</p>
                                </div>
                            </div>

                            <div className="aboutCont uk-card uk-card-default uk-card-body">
                                <div className="aboutHdr"><span>August 2016 - 2018 </span></div>
                                <div className="aboutItem">
                                    <h4>Junior Software engineer</h4>
                                    <h5>UY Systems Ltd   </h5>
                                    <p>UY Systems Ltd. is an CMMI Level 3 Certified, ISO 9001-2008 certified software development & web solution provider company operating since 2003.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
        )
    }
}

export default withRouter(Home)