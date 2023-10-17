import React from 'react';
import profilePicture from '../images/20131028_165723.jpg';

const About = () => {
    return (
        <div className="about">
            <h1 className="text-center mb-10">Avera Dellamorte</h1>
            <div className="d-flex g10">
                <div className="flex-1">
                    <img src={profilePicture} alt=""/>
                </div>
                <div className="flex-1 p10 d-flex f-col a-center">
                    <h3 className="text-center">- Apie mane -</h3>
                    <ul className="p10">
                        <li>Kuriu</li>
                        <li>Rašau</li>
                        <li>Slankioju po kapines</li>
                        <li>Nupiešiau šviesą savo lange, kad nematyčiau tamsos</li>
                        <li>Nusifotografavau antkapyje</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;