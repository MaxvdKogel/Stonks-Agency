import React, { useEffect } from "react";
import useState from 'react-usestateref';
import Logo from "../../assets/svg/Logo";
import style from "./Loader.module.css";

import detect from 'detect-browser';
import { array } from "prop-types";

const Loader = function() {

    const [isLoading, setLoadingState] = useState(true);
    const [loadingQueue, setLoadingQueue, loadingQueueGetter] = useState([]);
    const id = Math.floor(100000 + Math.random() * 900000);

    useEffect(() => {
        /**
         * Add new promise to queue [GLOBAL]
         */
        Event.$on("enqueueLoading", (new_items) => setLoadingQueue([...loadingQueueGetter.current, ...new_items]));
        /**
         * refresh queue [LOADER COMPONENT ONLY]
         */
        Event.$on("refreshQueue", (new_queue) => setLoadingQueue(new_queue));

        return () => (Event.$off("enqueueLoading"), Event.$off("refreshQueue"));
    }, []);

    useEffect(() => {
        if(!loadingQueueGetter.current.length) return setLoadingState(false);
        setLoadingState(true);

        var arr = loadingQueueGetter.current.slice();

        arr.shift().then(() => Event.$emit("refreshQueue", arr));

    }, [loadingQueue]);

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