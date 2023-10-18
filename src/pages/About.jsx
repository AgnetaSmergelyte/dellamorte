import React from 'react';
import profilePicture from '../images/20131028_165723.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCross} from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about">

            <h1 className="text-center p-1">
                <FontAwesomeIcon icon={faCross}/>
                <span className="mx-1">Avera Dellamorte</span>
                <FontAwesomeIcon icon={faCross}/>
            </h1>

            <div className="d-flex g-1">
                <div className="flex-1 d-flex j-center a-start p-1 flex-2-lg">
                    <div className="oval-img-wrapper">
                        <img src={profilePicture} alt=""/>
                    </div>
                </div>
                <div className="flex-1 flex-3-lg p-1 d-flex f-col a-center text-center g-1">
                    <h3 className="mb-1">- Apie mane -</h3>
                    <p>Nupiešiau šviesą savo lange, nes nenorėjau matyti suterštos šviesos.</p>
                    <p>Garsiai šaukiau, kad negirdėčiau triukšmo.</p>
                    <p>Juokiausi, kad nematyčiauų ašarų ir verkiau, kad nematyčiau veidmainystės.</p>
                    <p>Apgavau save, kad negalėtų apgauti kiti.</p>
                    <p>Bėgau, nes norėjau, kad kas nors pagautų.</p>
                    <p>Skridau tam, kad kai nukrisiu, galėčiau vėl pakilti.</p>
                </div>

            </div>
        </div>
    );
};

export default About;