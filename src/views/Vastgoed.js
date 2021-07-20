import React, { useEffect, useRef } from 'react'
import Cursor from '../components/Cursor'
import Header from '../components/Header/Header'
import Casestudyhero from '../components/casestudy/Hero/Casestudyhero'
import Quote from '../components/casestudy/Quote/1/Quote'
import Quote2 from '../components/casestudy/Quote/2/Quote2'
import Quote3 from '../components/casestudy/Quote/3/Quote3'
import Quote4 from '../components/casestudy/Quote/4/Quote4'
import Resultaat from '../components/casestudy/Resultaat/Resultaat'
import Contact from '../components/Contact/Contact'
import gsap from "gsap"

class Vastgoed extends React.Component {
  
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
            <div className={this.state.mounted ? "mounted" : ''} style={{background: "#fff", position: "relative"}}>
                <Header theme="light" />
                <Casestudyhero />
                <Quote2 />
                <Quote3 />
                <Quote4 />
                <Contact theme="light"/>
                <Cursor theme="gsv"/>
            </div>
        )
    }
}

export default Vastgoed;