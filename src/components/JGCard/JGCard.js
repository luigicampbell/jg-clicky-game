import React from "react";
import "./JGCard.css";

const JGCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.chooseJG(props.pose)}
                className={props.score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.pose} src={props.image} />
            </a>
        </div>
    </div>
);

export default JGCard;
