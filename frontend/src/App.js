import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import config from './config';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello World from the frontend!"
    };
    if (config.backendHost && config.backendPort) {
      this.callBackend();
    }
  }

  async callBackend() {
    let greeting = (await axios.get(`http://${config.backendHost}:${config.backendPort}`)).data;
    this.setState({ greeting });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.greeting}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
