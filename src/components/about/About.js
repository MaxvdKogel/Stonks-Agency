import React, { useEffect, useRef } from "react";
import useState from 'react-usestateref';


import style from "./About.module.css";
import { gsap } from "gsap/all";

const About = function () {

    // < Debugging >
    // const [top, setTop] = useState(0);
    // const [stick, setStick] = useState(0);
    const isMountedRef = useRef(null);
    const [largeDevice, setDeviceState, deviceStateGetter] = useState(window.innerWidth >= 1200);
    var swapped = false;

    useEffect(() => {
        isMountedRef.current = true;

        var listener = () => setDeviceState(window.innerWidth >= 1200);

        isMountedRef.current && window.addEventListener("resize", listener);

        return () => (
            window.removeEventListener("resize", listener),
            isMountedRef.current = false
        );
    }, []);
    
    useEffect(() => {
        if(!isMountedRef.current) return;

        var el = document.querySelector("." + style.about);

        deviceStateGetter.current && gsap.set("." + style["paragraph-container"] + " > .inner > p", { y: document.querySelector("." + style["paragraph-container"]).clientHeight });
        deviceStateGetter.current || (
            gsap.killTweensOf("." + style["paragraph-container"] + " > .inner > p"),
            gsap.set("." + style["paragraph-container"] + " > .inner > p", { y: 0}),
            document.querySelector(".about--content").style.cssText = ""
        );

        var listener = () => {

            if (!deviceStateGetter.current) return;

            var bcr = el.getBoundingClientRect(),
                vp = window.innerHeight,
                perc = Math.min(Math.max(-bcr.top / (bcr.height - vp) * 100, 0), 100),
                scrolledPixels = Math.min(Math.max(parseInt(perc * bcr.height / 100), 0), bcr.height),
                offset = (33.3333/100) * (bcr.height - vp),
                scrollTextTrack = bcr.height - offset,
                scrolledTextPercentage = Math.min(Math.max(Math.round( ( (scrolledPixels - offset) / scrollTextTrack) * 100 ), 0), 100);

            // < Debugging >
            // setTop(offset + "px");
            // setStick(scrolledPixels + "px");

            /**
             * About section out of view
             */
            (scrolledPixels <= 0) && (
                document.querySelector(".about--content").style.cssText = "position: relative;",
                [].forEach.call(document.querySelectorAll("." + style["about--title__line"]), el => el.classList.remove(style.show, style.hide)),
                document.querySelector("." + style["about--title"]).classList.remove(style["in-view"]),
                document.querySelector("." + style.animation).classList.remove(style["show--animation"]),
                document.querySelector("." + style["about--media"]).classList.remove(style["show--about--media"])
            ),
            /**
             * About section in view
             */
            (scrolledPixels > 0) && (
                document.querySelector(".about--content").style.cssText = "position: fixed; top: 0; left: 0; right: 0;",
                [].forEach.call(document.querySelectorAll("." + style["about--title__line"]), el => (el.classList.add(style.show), el.classList.remove(style.hide))),
                document.querySelector("." + style["about--title"]).classList.add(style["in-view"]),
                document.querySelector("." + style.animation).classList.add(style["show--animation"]),
                document.querySelector("." + style["about--media"]).classList.add(style["show--about--media"])
            ),
            /**
             * Scrolled past offset
             */
            (scrolledPixels >= offset) && (
                [].forEach.call(document.querySelectorAll("." + style["about--title__line"]), el => el.classList.add(style.hide)),
                document.querySelector("." + style.animation).classList.remove(style["show--animation"]),
                document.querySelector("." + style["about--media"]).classList.remove(style["show--about--media"]),
                gsap.to("." + style["paragraph-container"] + " > .inner > p", { 
                    y: document.querySelector("." + style["paragraph-container"]).clientHeight - (scrolledTextPercentage/100) * document.querySelector("." + style["paragraph-container"] + " > .inner").clientHeight, 
                    duration: .4 
                })
            ),
            /**
             * Scrolled past about section
             */
            (scrolledPixels >= bcr.height) && (
                document.querySelector(".about--content").style.cssText = "position: absolute; bottom: 0; left: 0; right: 0;"
            )
    
        };

        document.addEventListener("scroll", listener);

        return () => document.removeEventListener("scroll", listener);
    }, [largeDevice]);

    useEffect(() => {
        if(!isMountedRef.current) return;

        var swap = setInterval(function() {
            swapped && document.querySelector("." + style["about--media"]).classList.add(style.swap);
            swapped || document.querySelector("." + style["about--media"]).classList.remove(style.swap);
            swapped = !swapped;
        }, 1000);
        
        return () => clearInterval(swap);
    }, []);

    return (
        <section className={style.about} style={{"--container-height": largeDevice ? (window.innerHeight * 6) + "px" : "auto"}}>
            <div className={["about--content", largeDevice ? "vp" : ""].join(" ")} style={{width: "100%"}} >

                <div className={style["about--intro-contianer"]}>
                    <div className={style["about--media"]}>
                        <div className={[style.img, style.top].join(" ")}>
                            <img className={style.doavid} src="/assets/img/david.jpg" />
                        </div>
                        <div className={[style.img, style.bottom].join(" ")}>
                            <img className={style.mank} src="/assets/img/mank.jpeg" />
                        </div>
                    </div>

                    <div className={style.animation}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 757.24 707.81">
                            <path className={style.path__one} d="M23.72,758.36c11.1-44.4,38-82.6,68-116.37,32-36,68.32-68.14,98.24-106q2.66-3.36,5.22-6.76c.21-.28,1.49-2.12,1.58-2.11a14.17,14.17,0,0,1,.37,2c.29,1.54.59,3.08.9,4.61q1.84,9.24,4,18.4,4.32,18.31,9.88,36.32,5.46,17.65,12.1,34.92,3.39,8.79,7.06,17.45c1.14,2.68,2.3,5.36,3.48,8s2.13,6.26,3.89,8.57c.87,1.13-.09,1.78,1.11,0a12.51,12.51,0,0,0,.8-1.79l1.88-4.19q1.89-4.18,3.77-8.38,3.78-8.37,7.57-16.74,7.47-16.46,15-32.85,15.33-33.09,31.45-65.81c21.44-43.26,44.3-85.86,69.67-127C394.76,360.05,422,320,453.52,284a249.5,249.5,0,0,1,24.91-25c4.3-3.68,8.76-7.18,13.4-10.43a20.36,20.36,0,0,1,3.65-2.47c1.27-.5.41-.87,1.22,0,.49.54.47,2.06.64,2.81l2.22,9.81,17.67,77.85L526,375.15c.67,3,1.06,6.25,2.07,9.11.77,2.2.11,1.35.74.29a12.25,12.25,0,0,0,.64-1.69c.56-1.49,1.14-3,1.72-4.47q2.93-7.54,6-15,12.69-30.75,28.06-60.3A767.13,767.13,0,0,1,725.63,93.11q11.89-11,24.27-21.41c.76-.65.07-6.44.07-7.5,0-1.77,0-3.54,0-5.31a9.63,9.63,0,0,1-.05-2.19,765.15,765.15,0,0,0-169.15,203q-16.57,28.84-30.6,59.06-6.95,15-13.22,30.2-3.2,7.75-6.22,15.58c-.43,1.12-.86,2.24-1.28,3.36a13.68,13.68,0,0,1-.64,1.69c-1,1.78-.27.87-.74-.29-1.22-3-1.52-6.67-2.23-9.81Q517,320.52,508.16,281.6L499.41,243l-2.23-9.82a7.41,7.41,0,0,0-.48-2.1c-.85-.93.08-.44-1.22,0s-2.92,2-4.16,2.83a173.06,173.06,0,0,0-13.84,10.9c-17.6,15.31-32.36,33.61-46.59,52q-22.22,28.71-42.19,59.08c-26.6,40.24-50.48,82.24-72.65,125.08-22.35,43.17-43,87.21-63.06,131.48q-3.66,8.07-7.3,16.15-1.89,4.18-3.77,8.38l-1.61,3.59c-.28.64-.53,2-1.07,2.39-.18.8-.36.8-.55,0l-.57-1.22q-7.77-16.77-14.39-34a549.23,549.23,0,0,1-21.89-71.28q-2.15-9.17-4-18.4c-.26-1.31-.52-2.63-.77-3.95l-.12-.67c.06-1.45-.16-1.72-.65-.79-.36.17-.93,1.25-1.18,1.58q-2.76,3.67-5.62,7.27c-7.61,9.61-15.65,18.87-23.92,27.91-16.28,17.81-33.44,34.78-50.18,52.14C83.65,634.45,52.66,669.77,34.3,712.22a201.06,201.06,0,0,0-10.58,31.14c-.56,2.23-.08,5.21-.08,7.5s.63,5.3.08,7.5Z" transform="translate(-23.45 -50.55)"/>
                            <path className={style.path__two}  d="M595,97.51c18.39-6.11,36.8-12.18,55.47-17.4A413,413,0,0,1,707,68a268.5,268.5,0,0,1,28.74-2.36q7.23-.19,14.46,0c1.11,0,2.22.08,3.33.14a2.74,2.74,0,0,1,.95,0h.23c.06.24.11.48.16.72.14.65.29,1.29.43,1.94.54,2.49,1.09,5,1.62,7.49q6.33,29.35,12,58.87t10.57,59.14q.62,3.64,1.21,7.31a14.38,14.38,0,0,1,0-2.19c0-1.77,0-3.54,0-5.31s0-3.53,0-5.3a16.16,16.16,0,0,0,0-2.2q-4.86-29.64-10.4-59.17t-11.79-58.9q-1.57-7.38-3.18-14.74c-.13-.57-.25-1.13-.37-1.69a5.76,5.76,0,0,0-.22-1,4,4,0,0,0-.95,0c-1.26-.07-2.53-.12-3.8-.16q-3.55-.12-7.11-.13A256.59,256.59,0,0,0,714,52.14a381.75,381.75,0,0,0-56.64,11.07c-18.74,5-37.2,11-55.6,17.05L595,82.51a17.25,17.25,0,0,0-.05,2.2c0,1.76,0,3.53,0,5.3s0,3.54,0,5.3c0,.23.11,2.18.05,2.2Z" transform="translate(-23.45 -50.55)"/>
                        </svg>
                    </div>

                    <div className={style["about--intro"]}>
                        <h2 className={style["about--title"]}>
                            <span className={style["text--wrapper"]}>
                                <span className={[style["about--title__line"]].join(" ")}>Wij zijn</span>
                            </span>
                            <span className={style["text--wrapper"]}>
                                <em className={[style["about--title__line"]].join(" ")}>Stonks</em> 
                            </span>
                            <span className={style["text--wrapper"]}>
                                <em className={[style["about--title__line"], "pink"].join(" ")}>Agency</em>
                            </span>
                        </h2>
                    </div>

                </div>

                <div className={style["paragraph-container"]}>
                    <div className="inner">
                        <p>Een jong en creatief duo die jouw online aanwezigheid een <em className="pink">boost</em> geeft. Van <em className="pink">websites</em> tot <em className="pink">web software</em>.</p>

                        <p>Wij helpen onze clienten met het oplossen van <em className="pink">complexe automatisering</em> en het neerzetten van <em className="pink">memorabele</em> online identiteiten.</p>
                    </div>
                </div>

            </div>
            
            {/* Scroll Indicators < Debugging > */}
            {/* <span style={{position: "absolute", right: 0, top: top}}>{ Math.round(parseInt(String(top).split("px")[0])) }px</span>
            <span style={{position: "absolute", right: 0, top: stick}}>{ Math.round(parseInt(String(stick).split("px")[0])) }px</span> */}
        </section>
    )
}

export default About;