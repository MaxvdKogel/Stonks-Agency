import React from "React"
import { render } from "react-dom";
import style from "./Casestudyhero.module.css";

class Casestudyhero extends React.Component {
    constructor() {
        super()
        
        this.state = {
            title: "Groningenstad Vastgoed"
        }
    }

    render() {
        return (
            <div className={style.background}>
                <div className={style.txt}>
                    <p>Client</p>
                    <h1>{this.state.title}</h1>
                </div>
                <div className={style.cat}></div>
            </div>
        )
    }
}

export default Casestudyhero;