import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';
import style from './Hero.module.css'

const Hero = function() {

    const isMountedRef = useRef(null);
  
    useEffect(() => {
        isMountedRef.current = true;
      
        const cursor = document.querySelector(".cursor");
        const hero_cta = document.querySelector("." + style["hero__cta"]);
        const hero_cta_span = document.querySelector(".hero__cta-span");

        var listeners = {
            mouseover:  e => {
                hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
                hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
                cursor.classList.add("hide-cursor");
            },
            mouseout: e => {
                hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
                hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
                cursor.classList.remove("hide-cursor");
            }
        };

        if (isMountedRef.current) {
            hero_cta.addEventListener("mouseover", listeners.mouseover);
            hero_cta.addEventListener("mouseout", listeners.mouseout);
        }

        var promise = new Promise((resolve, reject) => {
            lottie
            .loadAnimation({
                container: document.querySelector("." + style["sleepingCat"]),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/assets/lottie-animations/slapende-kat-final-2.json'
            })
            .addEventListener("DOMLoaded", () => resolve())
        });

        Event.$emit("enqueueLoading", [promise]);

        return () => {
            isMountedRef.current = false;

            hero_cta.removeEventListener("mouseover", listeners.mouseover);
            hero_cta.removeEventListener("mouseout", listeners.mouseout);
        };
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
                        Je bereikt meer klanten en bouwt een vertrouwen op in je bedrijf.
                    </p>
                    <div className={`cta__hover ${style.cta__container}`}>
                        <a href="mailto: hello@stonks.agency" className={`cta ${style.hero__cta}`}>
                            <p className="cta__txt">Contacteer ons</p>
                            <span className="hero__cta-span"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;