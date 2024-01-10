import React, {useState} from "react";
import {  NavLink, Outlet } from "react-router-dom";




 

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const burger = () => {
        setShowMenu(!showMenu);
    }

    

    // const span =  showMenu ? 'menu-btn__burger open' : 'menu-btn__burger';
        
        return(
            <div>
                <header>
                    <nav className={`nav ${showMenu ? 'nav open' : 'nav'}`}>
                        <ul className={`menu-nav ${showMenu ? 'menu-nav open' : 'menu-nav'}`}>
                            <li className={`menu-nav__item ${showMenu ? 'menu-nav__item open' : 'menu-nav__item'}`} >
                                <NavLink to="/home" className="menu-nav__link" activeclassname="active">Home</NavLink>
                            </li>
                            <li className={`menu-nav__item ${showMenu ? 'menu-nav__item open' : 'menu-nav__item'} `}>
                                <NavLink to="/about" className="menu-nav__link" activeclassname="active">About</NavLink>
                            </li>
                            <li className={`menu-nav__item ${showMenu ? 'menu-nav__item open' : 'menu-nav__item'} `}>
                                <NavLink to="/portfolio" className="menu-nav__link" activeclassname="active">Portfolio</NavLink>
                            </li>
                            <li className={`menu-nav__item ${showMenu ? 'menu-nav__item open' : 'menu-nav__item'} `}>
                                <NavLink to="/contact" className="menu-nav__link" activeclassname="active">Contact</NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                    
                    <div className="menu-btn" onClick={burger}>
                        <span className={`menu-btn__burger ${showMenu ? 'menu-btn__burger open' : 'menu-btn__burger' }`}></span>
                    </div>
                </header>
                {/* <Outlet /> */}
            </div>
        )
    }
    

   
