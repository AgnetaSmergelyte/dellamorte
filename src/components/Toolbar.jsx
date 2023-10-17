import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
const openMenu = <FontAwesomeIcon icon={faBars}/>;
const closeMenu = <FontAwesomeIcon icon={faTimes}/>;

const Toolbar = () => {
    const [toggleMenu, setToggleMenu] = useState(openMenu);
    const [toggleDisplay, setToggleDisplay] = useState('menu-closed');
    function toggleMainMenu() {
        if (toggleMenu === closeMenu) {
            setToggleDisplay('menu-closed');
            setToggleMenu(openMenu);
        } else {
            setToggleDisplay('menu-opened');
            setToggleMenu(closeMenu);
        }
    }
    function closeMainMenu() {
        setToggleDisplay('menu-closed');
        setToggleMenu(openMenu);
    }

    return (
    <div className="toolbar g10 f-wrap">
        <div className="btn-toggle d-flex j-end a-center">
            <button onClick={toggleMainMenu}>{toggleMenu}</button>
        </div>
        <div className={"d-flex g10 f-wrap " + toggleDisplay} onClick={closeMainMenu}>
            <NavLink className="menu-item" to="/">Pradinis</NavLink>
            <NavLink className="menu-item" to="/gallery">Galerija</NavLink>
            <NavLink className="menu-item" to="/about">Apie</NavLink>
        </div>
    </div>
    );
};

export default Toolbar;