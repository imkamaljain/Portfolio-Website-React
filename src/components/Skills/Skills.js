import React from 'react';
import { config } from '../../assets/config';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills section">
            <span className="section-subtitle">Why Choose Me?</span>
            <h2 className="section-title">My Expertise Area</h2>
            <div className="skills_container bd-grid">
                {config.skills.map((item, idx1) => (
                    <div className="skills_content" key={idx1}>
                        <h3 className="skills_subtitle">{item.title}</h3>
                        {item.summary.map((skill, idx2) => (
                            <div className="skills_data" key={idx2}>
                                <div className="skills_info">
                                    <span className="skills_name">{skill.name}</span>
                                    <span className="skills_number">{skill.score}</span>
                                </div>
                                <div className="skills_bar_container">
                                    <span className="skills_bar" style={{width: skill.score}}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;