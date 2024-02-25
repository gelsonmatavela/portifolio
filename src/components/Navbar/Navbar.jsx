import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import "../ContactMe/ContactMe";
import "../Skills/Skills";
import "../WorkExperience/WorkExperience";
import "../Hero/Hero";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toogleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toogleMenu} />
            
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/gelsonNamesimple.png" alt="Gelson Matavela Logo" /*width={80} height={80}*/ />

                    <ul>
                        <li>
                            <a href="#home" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="#work-experience" className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a href="#contact-me" className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}> <a href="https://wa.link/6ma3hr">Hire Me</a></button>
                    </ul>

                    <button class="menu-btn" onClick={toogleMenu}>
                        <span class={"material-symbols-outlined"}
                            style={{ fontSize: "1.4rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );


};

export default Navbar