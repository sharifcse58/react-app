import React, { Component } from 'react'



class About extends Component {
    render() {
        return (
                <div className="common-card">
                    
                    <div className="aboutContent">

                        <div className="heding">Hello, I am Mehedi Hasan</div>

                        <div className="col-sm-12">
                            <img className="aboutImgStyle" src={process.env.PUBLIC_URL + '/profilepic.jpg'} alt=""/>
                        </div>

                        <div className="about-info">
                            <h5>A Full Stack Laravel Vue js and React JS Software Developer</h5> 

                            <p>
                            I am a software engineer having 4.5+ years of experience. Already worked with languages like Laravel,CakePHP, Angular,Vue js, React. Always try to develop software (DRY) code architecture but still learning in progress. Always try to maintain a good relationship with my colleagues with honesty and manners.
                            </p>
                            
                            <p>
                                Started my career as a Software Engineer and I got the opportunity to work in different companies with different teams and technologies. From there, I have learned a lot about Research and Development which is a key factor in order to solve newer problems.
                            </p>
                            <p>
                                Having a Computer Science background, I look forward to learning and research more and more about new technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity, professional skills and leadership abilities which I would love to implement in real life for making this world a much better place.
                            </p>
                        </div>
                        
                        <h2>Recent works</h2>

                        <p> Nilam Ecommerce ( <a target='_blank' href="https://nilam.xyz/">Nilam</a> ) </p>
                        <p> Knittersland ( <a target='_blank' href="https://knittersland.com">Knittersland</a> )</p>
                        <p> Xirooms resturent management ( <a target='_blank' href="https://xirooms.com/">Xirooms</a> ) </p>
                        <p>NRB Jobs ( <a target='_blank' href="https://www.nrbjobs.com/">nrb jobs</a> )</p>
                        <p>Route66 USA ( <a target='_blank' href="https://route66international.cn/">Route 66</a> )</p>
                        <p>Lillehammer ( <a target='_blank' href="https://lillehammer.cn">Lillehammmer</a> )</p>
                        <p>Hurtigruten ( <a target='_blank' href="http://hurtigruten.cn/">Hurtigruten</a> ) </p>
                        <p>Online Purchase Order and Sales Order(Software)(laravel)</p>
                        <p>UY Systems Website ( <a target='_blank' href="https://www.uysys.com/">uysys</a> )</p>

                        <h2 className="common-top-margin">What do I write about?</h2>
                        <p>I write about software development. More precisely, I will focus on web development. So you can expect posts about JavaScript, Frameworks like ReactJS or useful libraries.

                        As an example, learn about my way into web development:
                        </p>
                    </div>  
                </div> 
        )
    }
}

export default About