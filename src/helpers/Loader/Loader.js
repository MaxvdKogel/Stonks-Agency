import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/Logo";
import style from "./Loader.module.css";

const Loader = function() {

    const [isLoading, setLoadingState] = useState(true);

    useEffect(() => {

        Event.$on("loading", () => setLoadingState(true));
        Event.$on("doneLoading", () => setLoadingState(false));

        setTimeout(() => setLoadingState(false), 2000);

    }, []);

    return (
        <div className={isLoading ? `${style.loader} ${style.active}` : style.loader}>
            <div className={style["loader--center"]}>
                <Logo class={style.logo} />
            </div>
            <div className={style.container}>
                <svg className={style.shape} viewBox="0 0 100 100" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path strokeWidth="4" stroke="var(--white)" d="M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"/>
                </svg>
            </div>
        </div>
    )
}

export default Loader;