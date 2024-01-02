import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const images = {
    skulls: ['20230925_080530_546.jpg', '20230925_080530_513.jpg',
        '20221212_222644_329.jpg', '20221211_155507_843.jpg', '20221202_183813_567.jpg', '20221201_010335_523.jpg', '20221201_010335_418.jpg',
        '20221216_110530_299.jpg', '20221216_110530_250.jpg', '20221216_110530_158.jpg', '20221126_214150_237.jpg', '20221111_171643_489.jpg',
        '20221110_225118_073.jpg', '20221110_225118_037.jpg', '20221110_225117_924.jpg', '20220901_225313_073.jpg', '20220823_002106_759.jpg',
        '20220819_152639_028.jpg', '20220819_152638_349.jpg', '20220818_173552_070.jpg', '20210801_212056_905.webp', '20210713_134237_670.jpg',
        '20220724_132035_940.jpg', '20220718_172052_512.jpg', '20220709_234912_780.jpg', '20220702_145516_269.jpg', '20210502_024401_268.jpg',
        '20220130_142900_520.jpg', '20220106_232358_344.jpg', '20211226_142821_105.jpg', '20211226_142608_862.jpg', '20211211_225834_520.jpg',
        '20211211_224156_853.jpg', '20211207_232205_943.jpg', '20211207_232205_846.jpg', '20211207_232205_739.jpg', '20211207_232205_998.jpg',
        '20210924_004602_128.jpg', '20210924_004602_094.jpg', '20210924_004602_041.jpg', '20210821_010555_147.jpg', '20210821_010555_102.jpg',
        '20210818_172908_592.jpg', '20210818_172908_495.jpg', '20210803_005950_703.webp', '20210712_233521_563.jpg', '20210709_002216_421.jpg',
        '20210609_153320_341.jpg', '20210605_150321_393.jpg', '20210503_183554_125.jpg', '20210529_025027_472.jpg', '20210521_005350_307.jpg'],
    everydaylife: ['IMG_20211017_142008_926.jpg', 'IMG_20210920_023848_006.jpg', 'IMG_20210203_174854_609.jpg', 'IMG_20201230_193123_485.jpg', 'IMG_20201230_025631_059.jpg',
        'IMG_20201227_191231_161.jpg', 'IMG_20201230_223555_568.jpg'],
    words: ['fall.jpeg', 'fear.jpeg', 'misery.jpeg', 'pain.jpeg', 'shame.jpeg', 'wine.jpeg', 'wwtimenspace.jpeg', 'zbadiou.jpeg'],
    monsters: ['angel.jpeg', 'ood.jpeg', 'silence.jpeg', 'thesis.jpeg']
}

const SingleGallery = () => {
    const {title} = useParams();
    const [name, setName] = useState(images[title]);
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(`/images/monsters/silence.jpeg`);
    const [currentIndex, setCurrentIndex] = useState(0);
    const nav = useNavigate();

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowRight':
                navigateImage(1);
                break;
            case 'ArrowLeft':
                navigateImage(-1);
                break;
            case 'Escape':
                setShowModal(false);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function zoomImage(index) {
        setShowModal(true);
        setCurrentImage(`/images/${title}/${name[index]}`);
        setCurrentIndex(index);
    }

    function navigateImage(num) {
        setCurrentIndex((currentIndex) => {
            let newIndex = currentIndex + num;
            if (newIndex === -1) {
                newIndex = name.length - 1;
            } else if (newIndex === name.length) {
                newIndex = 0;
            }
            setCurrentImage(`/images/${title}/${name[newIndex]}`);
            return newIndex;
        });
    }

    return (
        <>
            {showModal &&
                <div className="modal">
                    <div tabIndex="0" onKeyDown={handleKeyDown}>
                        <div className="modal-buttons">
                            <div className="d-flex j-end">
                                <div onClick={() => setShowModal(false)} className="btn-close">
                                    <FontAwesomeIcon icon={faTimes}/>
                                </div>
                            </div>
                            <div className="photo-nav d-flex">
                                <div className="j-start" onClick={() => navigateImage(-1)}>
                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                </div>
                                <div className="j-end" onClick={() => navigateImage(1)}>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </div>
                            </div>
                        </div>
                        <div className="display-image">
                            <img src={currentImage} alt=""/>
                        </div>
                    </div>
                    modal
                </div>}
            <div className="single-gallery p-1 g-1">
                {name.map((x, i) => <img onClick={() => zoomImage(i)} key={i} src={`/images/${title}/${x}`}
                                         alt=""/>)}
            </div>
            <h2 className="text-center p-2 go-back" onClick={() => nav("/gallery")}>{'<'} Grįžti į galeriją</h2>
        </>
    );
};

export default SingleGallery;