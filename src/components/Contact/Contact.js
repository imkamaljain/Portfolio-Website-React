import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const emailRef = useRef(null);
    const checkEmailValidity = () => {
        const regex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        const value = emailRef.current.value;
        if (value === "" || value.match(regex)) {
            emailRef.current.classList.remove('contact_input_error');
        } else {
            emailRef.current.classList.add('contact_input_error');
            alert('Please enter valid email.')
        }
    };
    return (
        <div className="contact section">
            <span className="section-subtitle">Contact Me</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact_container bd-grid">
                <form className="contact_form" id="contactForm">
                    <div className="contact_inputs">
                        <input type="text" placeholder="Name" className="contact_input" name="fromName" id="fromName" required />
                        <input type="mail" placeholder="Email" className="contact_input" name="fromEmail" id="fromEmail" ref={emailRef} onBlur={checkEmailValidity} required />
                    </div>
                    <input type="text" placeholder="Subject" className="contact_input" name="subject" id="subject" required />
                    <textarea cols="30" rows="10" placeholder="Message" className="contact_input" name="message" id="message"></textarea>
                    <input type="submit" value="Send Message" className="send_message_btn" id="submitButton" />
                </form>
                <div>
                    <div className="about_information">
                        <h3 className="about_information-title">Phone</h3>
                        <div className="about_information-data">
                            <i className='bx bx-phone about_information-icon' ></i>
                            <span>9548132183</span>
                        </div>
                        <h3 className="about_information-title">Email</h3>
                        <div className="about_information-data">
                            <i className='bx bx-envelope about_information-icon' ></i>
                            <span>kamaljain1423@gmail.com</span>
                        </div>
                        <h3 className="contact_subtitle">Address</h3>
                        <div className="about_information-data">
                            <i className='bx bx-map about_information-icon'></i>
                            <span>Bangalore, Karnataka,<br />India</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer_container bd-grid">
                    <h1 className="footer_title">Thank You</h1>
                    <p className="footer_description">This is my personal website, connect me here.</p>
                    <div className="footer_social">
                        <a href="https://www.facebook.com/kamaljain1423" className="footer_link" target="blank"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/_kamal_jain" className="footer_link" target="blank"><i className='bx bxl-instagram'></i></a>
                        <a href="https://www.twitter.com/_kamal_jain" className="footer_link" target="blank"><i className='bx bxl-twitter'></i></a>
                    </div>
                    <p className="footer_copy">All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;