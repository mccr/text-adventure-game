import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import NameInput from './inputField/NameInput';
import StartButton from './button/startButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterName: '' };
  }

  changeHandler = (event) => this.setState({
    characterName: event.target.value
  });


render() {
  let props = {
    changeHandler: this.changeHandler,
    characterName: this.state.characterName
  }

  return (
    <div>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home {...props} />
        </Route>
      </Switch>
    </div>
  );
}

}

const Home = (props) =>
  <div>
    <header>Your adventure begins here...</header>
    <NameInput {...props} />
    {console.log(props.characterName)}
    <StartButton />
  </div>


const About = () =>
  <div>
    <h2>The story begins</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className='option'>
      <Link to="/users">
        continue to the forest?
      </Link>
    </button>
    <button className='option'>
      <Link to="/">
        take me to the beach!
      </Link>
    </button>
  </div>

function Users() {
  return <h2>Users</h2>;
}