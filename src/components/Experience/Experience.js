import React from 'react';
import { config } from '../../assets/config';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience section">
            <span className="section-subtitle">Experience</span>
            <h2 className="section-title">Employment Details</h2>
            <div className="education_container bd-grid">
                {config.experience.map((item, index) => (
                    <div className="education_content" key={index}>
                        <div>
                            <h3 className="education_year">{item.period}</h3>
                            <span className="education_university">{item.jobType}</span>
                        </div>
                        <div className="education_time">
                            <span className="education_rounder"></span>
                            <span className="education_line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">{item.name}</h3>
                            <span className="education_speciality">{item.designation}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;