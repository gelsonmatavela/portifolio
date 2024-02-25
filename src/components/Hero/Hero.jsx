import React from "react";
import './Hero.css';


const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experience That Inspire</h2>
                <p>Passionate Frontend and Backend Developer | Graphic Designer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/react-svgrepo-com.svg" alt="react icon" />
                    </div>

                    <img id="imageGelson" src="./assets/images/gelsonPrimeiraImagem.png" alt="Gelson Matavela Image"  />
                </div>
                
                <div>
                     {/* <div className="tech-icon">
                            <img src="./assets/images/html-5-svgrepo-com.svg" alt="HTML icon"/>
                    </div> */}
                    <div className="tech-icon">
                            <img src="./assets/images/css-3-svgrepo-com.svg" alt="CSS icon" />
                    </div>
                    <div className="tech-icon">
                            <img src="./assets/images/javascript-svgrepo-com.svg" alt="JAVASCRIPT icon"/>
                    </div>
                    <div className="tech-icon">
                            <img src="./assets/images/photoshop-svgrepo-com.svg" alt="PHOTOSHOP icon"/>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Hero;