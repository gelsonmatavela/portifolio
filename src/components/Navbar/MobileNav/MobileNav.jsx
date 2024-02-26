import React from "react";
import './MobileNav.css';
import "../../ContactMe/ContactMe";
import "../../Skills/Skills";
import "../../WorkExperience/WorkExperience";
import "../../Hero/Hero";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

                <div className="mobile-menu-container">
                    <img className="logo" src="./assets/images/gelsonNamesimple.png" />
                    
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
                        <a href="https://wa.link/6ma3hr"><button className="contact-btn"> Hire Me</button></a>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default MobileNav;