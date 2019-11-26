import React from 'react';

const StartButton = (props) =>  {

    return (
        <button onClick={props.handleClick}>
            start game
        </button>
    )

}

export default StartButton;