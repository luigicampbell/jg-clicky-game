import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="https://luigicampbell.github.io/jg-clicky-game/">Jeff Goldblum Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "#ff8a80"}}>{props.sore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;
