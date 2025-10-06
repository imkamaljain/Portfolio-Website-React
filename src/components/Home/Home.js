import { useRef } from 'react';
import profileImage from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf';
import './Home.css';

const Home = () => {
    const downloadButtonRef = useRef(null);
    const downloadResume = () => {
        downloadButtonRef.current.className = 'downloading_btn';
        let anim = setInterval(animate, 30);
        let percent = 0;
        function animate() {
            percent++;
            if (percent > 100) {
                clearInterval(anim);
                downloadFile(resume);
                downloadButtonRef.current.innerHTML = 'Download Resume';
                downloadButtonRef.current.className = 'download_btn';
            } else {
                downloadButtonRef.current.innerHTML = `${percent} %`;
            }
        }
    };
    const downloadFile = (file) => {
        let element = document.createElement('a');
        element.setAttribute('href', file);
        element.setAttribute('download', '');
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
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
                    <a href="https://www.linkedin.com/in/imkamaljain" className="home_social-link" target="blank"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://www.github.com/imkamaljain" className="home_social-link" target="blank"><i className='bx bxl-github'></i></a>
                </div>
                <div ref={downloadButtonRef} className='download_btn' onClick={downloadResume}>Download Resume</div>
            </div>
        </div>
    );
}

export default Home;