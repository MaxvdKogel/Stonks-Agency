import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Phone from "/src/assets/svg/Phone.js"
import Desktop from "/src/assets/svg/Desktop.js"
import lottie from 'lottie-web';
import style from './Projects.module.css'

const Projects = function() {

    useEffect(() => {
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
                        <h2 className={style.vastgoed__title}>Groningenstad Vatsgoed B.V.</h2>
                        <p className={style.vastgoed__txt}> Vastgoed software</p>
                        <div className={style.vastgoed__ctaDiv}>
                            <a href="gsv" className={style.vastgoed__cta}>Case study</a>
                        </div>
                    </div>
                </div>

                <div className={`d-flex center ${style.desktopHidden}`}><hr></hr></div>

                {/* dekstop projects */}

                <div className={style.phoneHidden}>

                    <Link to="/gsv" data-text="Case Study" data-color="#003770" className={`d-flex desktopVastgoed project--desktop ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <h2 className={style.clientName}>Groningenstad Vastgoed</h2>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Een volledige web software voor het onderhouden van vastgoed</p>
                        </div>
                        <p className={style.year}>2021</p>
                    </Link>

                    <a href="https://www.phoneroyal.nl/" data-text="Bezoek Site" data-color="#001F54" className={`d-flex bezoek project--desktop ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <h2 className={style.clientName}>Phoneroyal</h2>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Telefoon reparatie website met de mogelijkheid om reparaties te boeken</p>
                        </div>
                        <p className={style.year}>2020</p>
                    </a>

                    <a href="https://www.jasperevenboermedia.nl/" data-text="Bezoek Site" data-color="#000" className={`d-flex bezoek project--desktop ${style.project}`}>
                        <div className={style.client}>
                            <p className={style.subTitle}>Client</p>
                            <p className={style.clientName}>Jasper Evenboer media</p>
                        </div>
                        <div className={style.description}>
                            <p className={style.subTitle}>Wat we hebben gemaakt</p>
                            <p className={style.description__txt}>Website, portfolio voor videografie</p>
                        </div>
                        <p className={style.year}>2019</p>
                    </a>   

                </div>
            </div>
        </section>
    )
}

export default Projects;