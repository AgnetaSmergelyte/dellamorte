import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCross} from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../images/20131028_165723.jpg";
import scaryPicture from "../images/scary.jpg";

const Home = () => {
    const [images, setImages] = useState([profilePicture, profilePicture, profilePicture]);
    const [flip, setFlip] = useState(['', '', '']);

    function flipPicture(num) {
        const photos = [...images];
        const flippers = [...flip];
        flippers[num] = 'flip'
        setFlip(flippers);
        setTimeout(() => {
            if (photos[num] === profilePicture) {
                photos[num] = scaryPicture;
            } else photos[num] = profilePicture;
            setImages(photos);
            setFlip(['', '', '']);
        }, 2000);
    }

    return (
        <div className="about">
            <div className="text-center p-1 main-title">
                <FontAwesomeIcon icon={faCross}/>
                <span className="mx-1">Avera Dellamorte</span>
                <FontAwesomeIcon icon={faCross}/>
            </div>
            <div className="d-flex g-1 j-even p-1">
                <div className="flex-1 p-1">
                    <div className={"oval-img-wrapper "+flip[0]} onClick={() => flipPicture(0)}>
                        <img src={images[0]} alt=""/>
                    </div>
                </div>
                <div className="flex-1 p-1 d-none d-block-xs">
                    <div className={"oval-img-wrapper "+flip[1]} onClick={() => flipPicture(1)}>
                        <img src={images[1]} alt=""/>
                    </div>
                </div>
                <div className="flex-1 p-1 d-none d-block-sm">
                    <div className={"oval-img-wrapper "+flip[2]} onClick={() => flipPicture(2)}>
                        <img src={images[2]} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;