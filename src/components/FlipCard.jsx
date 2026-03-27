import { useState } from "react";
import "./FlipCard.css";

export default function FlipCard({ text, img }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card-container" onClick={() => setFlipped(!flipped)}>
            <div className={`card ${flipped ? "flipped" : ""}`}>
                <div className="card-front">
                    <p>{text}</p>
                </div>

                <div className="card-back">
                    <img src={img} alt="Your photo" />
                </div>
            </div>
        </div>
    )
}