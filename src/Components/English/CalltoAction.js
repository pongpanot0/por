import React from 'react'
import "./CalltoAction.css"
import { FiStar } from "react-icons/fi";
function CalltoAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiStar className="cs"/>
                    <h2>We are reacr</h2>
                    <p>
                        lorem
                    </p>
                    <a href="#" className="cta-btn">
                        Welcone
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CalltoAction
