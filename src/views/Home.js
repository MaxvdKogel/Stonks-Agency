import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Projects from "../components/Projects.js"

const Home = function() {
    return (
        <div>
            <Header />
            <Hero />
            <Projects />
        </div>
    )
}

export default Home;