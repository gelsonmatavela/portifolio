import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactinfoCard";
import ContactForm from "./ContactForm/ContactForm";


const ContactMe = () => {
    return (
        <section id="contact-me" className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/email-icon.png" 
                        text="gelsonmatavela@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/github-142-svgrepo-com.svg" 
                        text="https://github.com/gelsonmatavela"
                    />

                    <ContactInfoCard
                        iconUrl="./assets/images/🦆 icon _facebook icon_.svg" 
                        text="https://facebook.com/@gelsonmatavela"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/linkedin-svgrepo-com.svg" 
                        text="https://www.linkedin.com/in/@gelsonmatavela"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>


        </section>
    )
}

export default ContactMe;