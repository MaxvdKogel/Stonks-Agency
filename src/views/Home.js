import React from "react"
import Cursor from "../components/Cursor"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import About from "../components/about/About"
import Contact from "../components/Contact/Contact"


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