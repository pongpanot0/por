import React, { useState } from 'react'
import { FiCode, FiX, FiMenu } from "react-icons/fi";
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import "./clss.css"
import LanguageIcon from '@material-ui/icons/Language';
import { blue } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <Link exact to="/">Pongpanot <FiCode /> </Link>
                    </div>
                    <ul className={click ? "menu active" : "menu"} >
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <Link to="/About">
                                About
                            </Link>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <Link to="/Education">
                                Education
                            </Link>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <Link to="/MyWorking">
                                MyWorking
                            </Link>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <Link to="/Contact">
                                Contact
                            </Link>

                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu} >
                        <Tooltip   title="thaiLanguage">
                        <Link to="/Contact">
                        <img className="ma" src="https://img.icons8.com/color/48/000000/thailand.png"/>
                            </Link>
                        </Tooltip>
                        <Tooltip   title="EnglishLanguage">
                        <Link to="/en">
                        <img className="ma" style={{marginLeft:10}} src="https://img.icons8.com/emoji/48/000000/england-emoji.png"/ >
                            </Link>
                        </Tooltip>
                            
                        </li>
                    </ul>

                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                                <FiMenu />
                            )}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header
