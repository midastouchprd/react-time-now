import React, { Component } from "react";
import "./App.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment().format("LTS")
    };
  }
  showCurrentTime() {
    let now = moment().format("LTS");
    this.setState({ currentTime: now });
  }
  render() {
    return (
      <div className="App">
        <div onClick={() => this.showCurrentTime()} className="time-box">
          <p>{this.state.currentTime}</p>
        </div>
        <div onClick={() => this.showCurrentTime()} className="time-box">
          <p>{this.state.currentTime}</p>
        </div>
        <div onClick={() => this.showCurrentTime()} className="time-box">
          <p>{this.state.currentTime}</p>
        </div>
      </div>
    );
  }
}

export default App;
