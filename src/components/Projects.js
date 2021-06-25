import React, { useEffect } from "react";
import Phone from "../assets/svg/Phone.js"
import Desktop from "../assets/svg/Desktop.js"
import lottie from 'lottie-web';

function visitWebsite () {
    console.log("strontanusballen");
}

const Projects = function() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('.standing-cat'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie-animations/Kat staand.json'
        })  
      }, [])

    return (
        <section className="projects">
            <div className="container">

                <div className="recent-projects">
                    <div className="recent-projects__title-div">
                        <h2 className="recent-projects__title ">Recente <span className="pink">projecten</span></h2>                
                    </div>  
                    <div className="standing-cat"></div>
                </div>

                {/* mobile projects */}

                <div className="phoneroyal d-flex desktop-hidden">
                    <div className="phoneroyal__col">
                        <h2 className="phoneroyal__title">Phoneroyal</h2>
                        <p className="phoneroyal__txt">Telefoon reparatie bedrijf in Groningen.</p>
                        <div className="phoneroyal__cta-div">
                            <a href="https://www.phoneroyal.nl/" className="phoneroyal__cta">Bezoek website</a>
                        </div>                 
                    </div>
                    <Phone />
                </div>

                <div className="d-flex center desktop-hidden"><hr></hr></div>
                    
                <div className="vastgoed desktop-hidden">
                    <Desktop />
                    <div className="vastgoed__col">
                        <h2 className="vastgoed__title">Groningen Stad Vatsgoed B.V.</h2>
                        <p className="vastgoed__txt"> Vastgoed software</p>
                        <div className="vastgoed__cta-div">
                            <a href="#" className="vastgoed__cta">Case study</a>
                        </div>
                    </div>
            </div>

            <div className="d-flex center desktop-hidden"><hr></hr></div>

            {/* dekstop projects */}

            <div className="desktop-projects phone-hidden">

                <div className="desktop-vastgoed desktop-project">
                <div className="client">
                    <p>Client</p>
                    <h2>Groningenstad Vastgoed</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Een volledige web software voor het onderhouden van vastgoed</p>
                </div>

                </div>

                <p className="year">2021</p>

                <div className="project-line"></div>

                <div className="desktop-phoneroyal desktop-project" onClick={visitWebsite}>
                <div className="client">
                    <p>Client</p>
                    <h2 className="desktop-phoneroyal__title">Phoneroyal</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Telefoon reparatie website met de mogelijkheid om reparaties te boeken</p>
                </div>
                </div>

                <p className="year">2020</p>

                <div className="project-line"></div>

                <div className="desktop-jasper desktop-project" onClick={visitWebsite}>
                <div className="client">
                    <p>Client</p>
                    <h2>Jasper Evenboer media</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Website, portfolio voor videografie</p>
                </div>
                </div>

                <p className="year">2019</p>

                <div className="project-line"></div>

            </div>
            </div>
        </section>
    )
}

export default Projects;