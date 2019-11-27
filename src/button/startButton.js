import React from 'react';
import { Link } from "react-router-dom";

const StartButton = () => {
    return (
        <button>
            <Link to="/about">
                start game
            </Link>
        </button>
    )

}

export default StartButton;