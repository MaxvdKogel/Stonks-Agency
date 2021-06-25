import React from "react";
import Cursor from "../components/Cursor.js"
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Projects from "../components/Projects.js"
import About from "../components/About.js"
import Contact from "../components/Contact.js"

const Home = function() {
    return (
        <div>
            <Cursor />
            <Header />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default Home;