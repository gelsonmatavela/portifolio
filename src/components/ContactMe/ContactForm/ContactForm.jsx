import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lnctg0w", "template_dqqlnt4", form.current, {
        publicKey: "sJn2fmoISl2n82xhu",
      })
      .then(
        () => {
          console.log("SUCCESS! Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form-contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="user_name" placeholder="First Name" />
          <input type="text" name="user_lastname" placeholder="Last Name" />
        </div>

        <input type="text" name="user_email" placeholder="E-mail" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />

        <button type="submit">SEND</button>
      </form>

      {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
    </div>
  );
};

export default ContactForm;
