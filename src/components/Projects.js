import React, { useEffect } from "react";
import Phone from "../assets/svg/Phone.js"
import Desktop from "../assets/svg/Desktop.js"
import lottie from 'lottie-web';

function visitWebsite () {
    console.log("strontanusballen");
}

const Projects = function() {

    useEffect(() => {
        var cursor = document.querySelector(".cursor");
        
        // // view case

        const vastgoed = document.querySelector(".desktop-vastgoed");
        const case_study = document.querySelector(".case-study");

        vastgoed.addEventListener('mouseover', () => {
            cursor.classList.add("view-case");
            case_study.classList.add("view-case__visible");
        })

        vastgoed.addEventListener('mouseleave', () => {
            cursor.classList.remove("view-case");
            case_study.classList.remove("view-case__visible");
        })

        // // bezoek website

        const bezoek = [].slice.call(document.querySelectorAll(".bezoek"));
        const bezoek_website = document.querySelector(".bezoek-website");

        bezoek.forEach(e => e.addEventListener('mouseover', () => {
            cursor.classList.add("bezoek-website__hover");
            bezoek_website.classList.add("bezoek-website__visible");
        }))

        bezoek.forEach(e => e.addEventListener('mouseleave', () => {
            cursor.classList.remove("bezoek-website__hover");
            bezoek_website.classList.remove("bezoek-website__visible");
        }))

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

                <div className="project d-flex desktop-vastgoed">
                    <div className="client">
                        <p className="subTitle">Client</p>
                        <h2 className="clientName">Groningenstad Vastgoed</h2>
                    </div>
                    <div className="description">
                        <p className="subTitle">Wat we hebben gemaakt</p>
                        <p className="description__txt">Een volledige web software voor het onderhouden van vastgoed</p>
                    </div>
                    <p className="year">2021</p>
                </div>
                <div className="project d-flex bezoek">
                    <div className="client">
                        <p className="subTitle">Client</p>
                        <h2 className="clientName">Phoneroyal</h2>
                    </div>
                    <div className="description">
                        <p className="subTitle">Wat we hebben gemaakt</p>
                        <p className="description__txt">Telefoon reparatie website met de mogelijkheid om reparaties te boeken</p>
                    </div>
                    <p className="year">2020</p>
                </div>
                <div className="project d-flex bezoek">
                    <div className="client">
                        <p className="subTitle">Client</p>
                        <p className="clientName">Jasper Evenboer media</p>
                    </div>
                    <div className="description">
                        <p className="subTitle">Wat we hebben gemaakt</p>
                        <p className="description__txt">Website, portfolio voor videografie</p>
                    </div>
                    <p className="year">2019</p>
                </div>   

            </div>
            </div>
        </section>
    )
}

export default Projects;