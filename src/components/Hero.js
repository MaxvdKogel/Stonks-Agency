import React from "react";
import "../css/Hero.module.css";

const Hero = function() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="sleeping-cat"></div>
                <div className="hero__col">
                <h1 className="hero__title">
                    Een profesionele website is een <span className="pink investering">investering</span>.
                </h1>
                <p className="hero__txt">
                    Je bereikt meer klanten en bouwt vertrouwen in je bedrijf.
                </p>
                <div className="cta__container cta__hover">
                    <a href="mailto: stront@gmail.com" className="hero__cta cta">
                    <text>Contacteer ons</text>
                    <span className="hero__cta-span"></span>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;