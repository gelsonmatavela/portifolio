import React from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";


const App = () =>{
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
