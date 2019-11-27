import React from 'react';

const NameInput = (props) => {
    return (
        <form>
            {props.characterName ? <h1>Hello {props.characterName}</h1> : ''}
            <p>Enter your name:</p>
            <input
                type='text'
                onChange={props.changeHandler}
            />
        </form>
    )
}

export default NameInput;