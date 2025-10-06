import React from 'react';
import { config } from '../../assets/config';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience section">
            <span className="section-subtitle">Experience</span>
            <h2 className="section-title">Employment Details</h2>
            <div className="experience_container bd-grid">
                {config.experience.map((item, index) => (
                    <div className="experience_content" key={index}>
                        <div className="experience_header">
                            <h3 className="experience_company">{item.name}</h3>
                            <span className="experience_period">{item.period}</span>
                        </div>
                        <div className="experience_body">
                            <div className="experience_position">{item.designation}</div>
                            <div className="experience_details">
                                <span className="experience_jobtype">{item.jobType}</span>
                                <span className="experience_location">{item.location}</span>
                                <span className="experience_location_type">{item.locationType}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;