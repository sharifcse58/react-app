import React, { Component } from 'react'



class About extends Component {
    render() {
        return (
            <div className="col-md-9 col-sm-12">
                <div className="common-card">
                    
                    <div className="aboutContent">

                        <div className="heding">Hello, I am Mehedi Hasan</div>

                        <div className="col-sm-12">
                            <img className="aboutImgStyle" src={process.env.PUBLIC_URL + '/profilepic.jpg'} alt=""/>
                        </div>

                        <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h2>Bio</h2>
                        <p>
                            Already as a teenager I loved to create crappy little websites for friends and family. I always loved to fiddle around with code and that’s one of the reasons why I became a software developer in 2010. Since then I did not only develop enterprise software with .NET C# in my main job, I also got the chance to visit the customers premises to set up and configure our products. While doing so, I studied part time.
                            While getting my masters degree in Information Technologies & Business Informatics in 2015, I started to learn more about web and mobile development with React and React Native, which finally lead to my role as App Development Lead at Axtesys. 
                        </p>
                        <h2>Education and Work Experience</h2>
                        <div className="educationInfo">
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                            <div className="educationDate">04/2018</div>
                            <div className="educationTitle">	“App Development Lead” at Axtesys OG</div>
                        </div>
                        <h2 className="common-top-margin">What do I write about?</h2>
                        <p>I write about software development. More precisely, I will focus on web development. So you can expect posts about JavaScript, Frameworks like ReactJS or useful libraries.

                            As an example, learn about my way into web development:
                        </p>
                    </div>  
                </div> 
            </div>
           
        )
    }
}

export default About