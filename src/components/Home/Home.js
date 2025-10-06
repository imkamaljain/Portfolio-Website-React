import { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin } from "react-icons/bi";
import profileImage from '../../assets/profile.jpg';
import { config } from '../../assets/config';
import './Home.css';

const Home = () => {
    const downloadButtonRef = useRef(null);
    const downloadResume = () => {
        window.open(config.resume_url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="home_container bd-grid">
            <div className="home_data">
                <div className="home_img">
                    <img src={profileImage} alt="Profile not available" />
                </div>
                <h1 className="home_title">Kamal Jain</h1>
                <span className="home_profession">Software Engineer</span>
                <div className="home_social">
                    <a href="https://www.linkedin.com/in/imkamaljain" className="home_social-link" target="blank"><BiLogoLinkedin /></a>
                    <a href="https://www.github.com/imkamaljain" className="home_social-link" target="blank"><BsGithub /></a>
                </div>
                <div ref={downloadButtonRef} className='download_btn' onClick={downloadResume}>Download Resume</div>
            </div>
        </div>
    );
}

export default Home;