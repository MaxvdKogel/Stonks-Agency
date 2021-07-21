import React from "react"
import Cursor from "../components/Cursor"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import About from "../components/about/About"
import Contact from "../components/Contact/Contact"
import gsap from "gsap"

class Home extends React.Component {
  
    constructor() {
        super()
        
        this.state = {
            mounted: false
        }

    }

    scroll(e) {
        var Event = e;

        [].forEach.call(document.querySelectorAll(".fade-in"), (target) => {
            var bcr = target.getBoundingClientRect();

            if ((-bcr.top + window.innerHeight + (0.10*bcr.height)) > 0) !target.classList.contains("in-view") && target.classList.add("in-view");
        })
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.setState({
            mounted: true
        })

        document.addEventListener("scroll", (e) => this.scroll(e));
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", () => this.scroll());
    }

    render() {
        return (
            <div style={{background: "var(--dark)"}}>
                <Header theme="dark" />
                <Hero />
                <Projects />
                <About />
                <Contact theme="dark" />
                <Cursor theme="dark" />
            </div>
        )
    }
}

export default Home;