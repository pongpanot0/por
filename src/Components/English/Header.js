import React ,{useState} from 'react'
import { FiCode,FiX,FiMenu} from "react-icons/fi";
import {Link, NavLink,Switch,Route} from 'react-router-dom';

import "./clss.css"
function Header() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <Link exact to="/">Pongpanot <FiCode/> </Link>
                    </div>
                    <ul className={click ? "menu active" : "menu" } >
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
