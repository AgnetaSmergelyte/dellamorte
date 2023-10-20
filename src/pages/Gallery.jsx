import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Gallery = () => {
    const nav = useNavigate();
    return (
        <div className="gallery">
            <div onClick={() => nav('/gallery/skulls')} className="skull gallery-card">
                <div>
                    <h1>Kaukolės su akimis</h1>
                </div>
            </div>
            <div onClick={() => nav('/gallery/everydaylife')} className="casual gallery-card">
                <div>
                    <h1>Kasdienybė</h1>
                </div>
            </div>
            <div onClick={() => nav('/gallery/words')} className="words gallery-card">
                <div>
                    <h1>Žodžiai</h1>
                </div>
            </div>
            <div onClick={() => nav('/gallery/monsters')} className="monsters gallery-card">
                <div>
                    <h1>Monstrai</h1>
                </div>
            </div>
        </div>
    );
};

export default Gallery;