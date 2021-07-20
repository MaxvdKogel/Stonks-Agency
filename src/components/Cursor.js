import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import style from "./Cursor.module.css";
import Play from "../assets/svg/Play";

const Cursor = function(props) {
    var theme = (typeof props.theme === "undefined") ? "" : style[props.theme];

    const isMountedRef = useRef(null);
    const [text, setText] = useState("");
    const [color, setColor] = useState("#FDB5F1");
    const [isVideo, setIsVideo] = useState(false);

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
                    gsap.to(".cursor__media", {scale: 1, duration: 0, overwrite: true, onComplete: () => setIsVideo(true)})
                } else {
                    gsap.to(".cursor__media", {scale: 0, duration: .4, ease: "expo.out", overwrite: false, onComplete: () => setIsVideo(false)})
                } 
    
                gsap.to(cursor, {
                    x: e.clientX - (cursor.getBoundingClientRect().width/2),
                    y: e.clientY - (cursor.getBoundingClientRect().height/2),
                    overwrite: true,
                    ease: "expo.out"
                });
            },
            mouseleave: function(e){
                !cursor.classList.contains("hide") && cursor.classList.add("hide");
            }
        }

        isMountedRef.current && document.addEventListener('mousemove', listeners.mousemove);
        isMountedRef.current && document.addEventListener('mouseleave', listeners.mouseleave);

        return () => {
            isMountedRef.current = false;

            document.removeEventListener('mousemove', listeners.mousemove);
            document.removeEventListener('mouseleave', listeners.mouseleave);
        };
    }, []);

    return (
        <div className={["cursor", theme, isVideo ? "video-controls" : ""].join(" ")} style={{"--color": color }}>
            <div className="cursor__text">
                {text.split(" ").map((text,i) =>
                    <span key={i}>{text}</span>
                )}
            </div>
            <div className="cursor__media">{
                isVideo && <div className={style.cursorPlay}>
                    <Play />
                </div>
            }</div>
        </div>
    )
}

export default Cursor;