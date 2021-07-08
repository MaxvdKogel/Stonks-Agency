import React, { useEffect } from "react";
import lottie from 'lottie-web';
import style from './Hero.module.css'

const Hero = function() {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const hero_cta = document.querySelector("." + style["hero__cta"]);
        const hero_cta_span = document.querySelector(".hero__cta-span");

        hero_cta.addEventListener("mouseover", e => {
            hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
            hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
            cursor.classList.add("hide-cursor");
        });

        hero_cta.addEventListener("mouseout", e => {
            hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
            hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
            cursor.classList.remove("hide-cursor");
        });

        lottie.loadAnimation({
            container: document.querySelector("." + style["sleepingCat"]),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/lottie-animations/slapende-kat-final-2.json'
          })
    }, []);

    return (
        <section className={style.hero}>
            <div className={`container ${style.hero__container}`}>
                <div className={style.sleepingCat}></div>
                <div className={style.hero__col}>
                    <h1 className={style.hero__title}>
                        Een profesionele website is een <span className="pink investering">investering</span>.
                    </h1>
                    <p className={style.hero__txt}>
                        Je bereikt meer klanten en bouwt vertrouwen in je bedrijf.
                    </p>
                    <div className={`cta__hover ${style.cta__container}`}>
                        <a href="mailto: stront@gmail.com" className={`cta ${style.hero__cta}`}>
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