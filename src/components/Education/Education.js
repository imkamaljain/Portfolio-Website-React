import React from 'react';
import { config } from '../../assets/config';
import './Education.css';

const Education = () => {
    return (
        <div className="education section">
            <span className="section-subtitle">Qualification</span>
            <h2 className="section-title">My Education</h2>
            <div className="education_container bd-grid">
                {config.education.map((item, index) => (
                    <div className="education_content" key={index}>
                        <div className="education_header">
                            <h3 className="education_institution">{item.name}</h3>
                            <span className="education_period">{item.period}</span>
                        </div>
                        <div className="education_body">
                            <div className="education_course">{item.course}</div>
                            <div className="education_details">
                                <span className="education_score">{item.score}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;