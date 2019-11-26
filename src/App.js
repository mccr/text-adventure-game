import React from 'react';
import './App.css';
import NameInput from './inputField/NameInput';
import StartButton from './button/startButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameStarted: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("start game");
    this.setState(state => ({ gameStarted: true }));
  }

  selectScreen() {
    return !this.state.gameStarted ? <InitialScreen handleClick={this.handleClick} /> : <SecondScreen />
  }

  render() {
    return (
      <div>
        {this.selectScreen()}
      </div>
    );
  }
}

const InitialScreen = props =>
  <div>
    <header>Your adventure begins here...</header>
    <NameInput />
    <StartButton handleClick={props.handleClick} />
  </div>

const SecondScreen = () =>
  <div><p>Second</p></div>

export default App;
