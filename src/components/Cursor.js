import React, { useEffect, useState, useRef } from "react";
import useStateRef from 'react-usestateref';
import gsap from "gsap";
import style from "./Cursor.module.css";
import Play from "../assets/svg/Play";
import Pause from "../assets/svg/Pause";

const Cursor = function(props) {
    var theme = (typeof props.theme === "undefined") ? "" : style[props.theme];

    const isMountedRef = useRef(null);
    const [text, setText] = useState("");
    const [color, setColor] = useState("#FDB5F1");
    const [isVideo, setIsVideo] = useState(false);
    const [isPlaying, setIsPlaying, isPlayingGetter] = useStateRef(false);

    useEffect(() => {
        isMountedRef.current = true;

        const cursor = document.querySelector(".cursor")

        var listeners = {
            mousemove: function(e) {
                cursor.classList.contains("hide") && cursor.classList.remove("hide");

                if (e.target.classList.contains("project--desktop")) {
                    !cursor.classList.contains("project--hover") && cursor.classList.add("project--hover");
                    e.target.getAttribute("data-text") && setText(e.target.getAttribute("data-text"));
                    e.target.getAttribute("data-color") && setColor(e.target.getAttribute("data-color"));
                } else {
                    cursor.classList.contains("project--hover") && (
                        cursor.classList.remove("project--hover"),
                        setText(""),
                        setColor("#FDB5F1")
                    );
                } 
                
                if (e.target.hasAttribute("data-controls")) {
                    if(e.target.paused) setIsPlaying(false);
                    else setIsPlaying(true);
                }

                gsap.to(cursor, {
                    x: e.clientX - (cursor.getBoundingClientRect().width/2),
                    y: e.clientY - (cursor.getBoundingClientRect().height/2),
                    overwrite: true,
                    ease: "expo.out"
                });
            },
            click: function(e) {
                if (e.target.hasAttribute("data-controls")) {
                    if(isPlayingGetter.current) setIsPlaying(false);
                    else setIsPlaying(true);
                }
            },
            mouseover: function(e) {
                if (e.target.hasAttribute("data-controls")) {
                    gsap.to(".cursor__media", {scale: 1, duration: .4, overwrite: true, onComplete: () => setIsVideo(true)})
                }
            },
            mouseout: function(e) {
                if (e.target.hasAttribute("data-controls")) {
                    gsap.to(".cursor__media", {scale: 0, duration: .4, onComplete: () => setIsVideo(false)})
                } 
            },
            mouseleave: function(e){
                !cursor.classList.contains("hide") && cursor.classList.add("hide");
            }
        }

        if (isMountedRef.current) {
            document.addEventListener('mousemove', listeners.mousemove);
            document.addEventListener('mouseleave', listeners.mouseleave);
            document.addEventListener('mouseover', listeners.mouseover);
            document.addEventListener('mouseout', listeners.mouseout);
            document.addEventListener('click', listeners.click);
        }

        return () => {
            isMountedRef.current = false;

            document.removeEventListener('mousemove', listeners.mousemove);
            document.removeEventListener('mouseleave', listeners.mouseleave);
            document.removeEventListener('mouseover', listeners.mouseover);
            document.removeEventListener('mouseout', listeners.mouseout);
            document.removeEventListener('click', listeners.click);
        };
    }, []);

    return (
        <div className={["cursor", theme, isVideo ? "video-controls" : "", isPlaying ? "video-is-playing" : ""].join(" ")} style={{"--color": color }}>
            <div className="cursor__text">
                {text.split(" ").map((text,i) =>
                    <span key={i}>{text}</span>
                )}
            </div>
            <div className="cursor__media">
                <div className={style.cursorPlay}>
                    <Play />
                </div>
                <div className={style.cursorPause}>
                    <Pause />
                </div> 
            </div>
        </div>
    )
}

export default Cursor;