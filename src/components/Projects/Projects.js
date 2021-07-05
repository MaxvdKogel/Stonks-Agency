import React, { useEffect } from "react";
import Phone from "/src/assets/svg/Phone.js"
import Desktop from "/src/assets/svg/Desktop.js"
import lottie from 'lottie-web';
import style from './Projects.module.css'

function visitWebsite () {
    console.log("strontanusballen");
}

const Projects = function() {

    useEffect(() => {
        var cursor = document.querySelector(".cursor");
        
        // // view case

        const vastgoed = document.querySelector(".desktopVastgoed");
        const case_study = document.querySelector(".caseStudy");

        vastgoed.addEventListener('mouseover', () => {
            cursor.classList.add("viewCase");
            case_study.classList.add("viewCase__visible");
        })

        vastgoed.addEventListener('mouseleave', () => {
            cursor.classList.remove("viewCase");
            case_study.classList.remove("viewCase__visible");
        })

        // // bezoek website

        const bezoek = [].slice.call(document.querySelectorAll(".bezoek"));
        const bezoekWebsite = document.querySelector(".bezoekWebsite");

        bezoek.forEach(e => e.addEventListener('mouseover', () => {
            cursor.classList.add("bezoekWebsite__hover");
            bezoekWebsite.classList.add("bezoekWebsite__visible");
        }))

        bezoek.forEach(e => e.addEventListener('mouseleave', () => {
            cursor.classList.remove("bezoekWebsite__hover");
            bezoekWebsite.classList.remove("bezoekWebsite__visible");
        }))

        lottie.loadAnimation({
            container: document.querySelector("." + style["standingCat"]),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/lottie-animations/Kat staand.json'
        })  
      }, [])

    return (
        <section className={style.projects}>
            <div className="container">

                <div className={style.recentProjects}>
                    <div className={style.recentProjects__titleDiv}>
                        <h2 className={style.recentProjects__title}>Recente <span className="pink">projecten</span></h2>                
                    </div>  
                    <div className={style.standingCat}></div>
                </div>

                {/* mobile projects */}

                <div className={`d-flex ${[style.phoneroyal, style.desktopHidden].join(" ")}`}>
                    <div className={style.phoneroyal__col}>
                        <h2 className={style.phoneroyal__title}>Phoneroyal</h2>
                        <p className={style.phoneroyal__txt}>Telefoon reparatie bedrijf in Groningen.</p>
                        <div className={style.phoneroyal__ctaDiv}>
                            <a href="https://www.phoneroyal.nl/" className={style.phoneroyal__cta}>Bezoek website</a>
                        </div>                 
                    </div>
                    <Phone />
                </div>

                <div className={`d-flex center ${style.desktopHidden}`}><hr></hr></div>
                
                <div className={[style.vastgoed, style.desktopHidden].join(" ")}>
                    <Desktop />
                    <div className={style.vastgoed__col}>
                        <h2 className={style.vastgoed__title}>Groningen Stad Vatsgoed B.V.</h2>
                        <p className={style.vastgoed__txt}> Vastgoed software</p>
                        <div className={style.vastgoed__ctaDiv}>
                            <a href="#" className={style.vastgoed__cta}>Case study</a>
                        </div>
                    </div>
                
                </div>

                <div className={`d-flex center ${style.desktopHidden}`}><hr></hr></div>

                {/* dekstop projects */}

                <div className={style.phoneHidden}>

                    <div className={`d-flex desktopVastgoed ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <h2 className={style.clientName}>Groningenstad Vastgoed</h2>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Een volledige web software voor het onderhouden van vastgoed</p>
                        </div>
                        <p className={style.year}>2021</p>
                    </div>
                    <div className={`d-flex bezoek ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <h2 className={style.clientName}>Phoneroyal</h2>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Telefoon reparatie website met de mogelijkheid om reparaties te boeken</p>
                        </div>
                        <p className={style.year}>2020</p>
                    </div>
                    <div className={`d-flex bezoek ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <p className={style.clientName}>Jasper Evenboer media</p>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Website, portfolio voor videografie</p>
                        </div>
                        <p className={style.year}>2019</p>
                    </div>   

                </div>
            </div>
        </section>
    )
}

export default Projects;