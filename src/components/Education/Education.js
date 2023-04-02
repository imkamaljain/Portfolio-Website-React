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
                        <div>
                            <h3 className="education_year">{item.period}</h3>
                            <span className="education_university">{item.name}</span>
                        </div>
                        <div className="education_time">
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">{item.course}</h3>
                            <span className="education_speciality">{item.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;