import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about section">
            <span className="section-subtitle">My intro</span>
            <h2 className="section-title">About Me</h2>
            <div className="about_container bd-grid">
                <div className="about_data">
                    <p className="about_description">
                    Greetings! I am a highly experienced software developer who excels in all aspects of software engineering, including design, coding, testing, and maintenance. With a proven track record of delivering exceptional results, I possess a diverse and extensive skill set that allows me to work across various platforms, languages, and embedded systems.<br/><br/>
                    In addition, I am well-versed in the latest cutting-edge development tools and procedures, which enables me to stay up-to-date with emerging trends in the industry. Whether working independently or as part of a team, I am capable of effectively self-managing and ensuring timely delivery of projects.<br/><br/>
                    Moreover, I am an excellent communicator and problem-solver, always eager to collaborate with others to achieve optimal outcomes. I am committed to delivering high-quality work and maintaining a strong work ethic throughout all stages of development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;