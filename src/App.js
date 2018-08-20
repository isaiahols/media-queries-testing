import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuShow: false,
      animation: false,
    }
  }

  showMenu() {
    this.setState({
      menuShow: !this.state.menuShow,
    })
  }

  toggleAnimation() {
    this.setState({
      animation: !this.state.animation,
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <section>
            <h2>
              Start Bootstrap
            </h2>
            <div className="hamburger" onClick={() => this.showMenu()}>
              <div className="bun">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <nav>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </nav>
          </section>
        </header>
        <div className={(this.state.menuShow ? "dropDownShow" : "") + ' dropDown'}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={(this.state.animation ? "playing" : '') + " cubeToBall"}></div>
        <button
          onClick={() => this.toggleAnimation()}
        >
          Run!!
        </button>
      </div>
    );
  }
}

export default App;
