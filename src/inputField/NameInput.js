import React from 'react';

export default class NameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { characterName: '' };
    }

    changeHandler = (event) => this.setState({
        characterName: event.target.value
    });

    render() {
        let header = '';
        if (this.state.characterName) {
            header = <h1>Hello {this.state.characterName}</h1>;
        }
        return (
            <form>
                {header}
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.changeHandler}
                />
            </form>
        )
    }
}