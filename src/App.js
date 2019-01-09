import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

class App extends Component {
  showCurrentTime() {
    console.log(moment());
  }
  render() {
    return (
      <div className="App">
        <div onClick={() => this.showCurrentTime()} className="time-box">
          <p> TIME </p>
        </div>
      </div>
    );
  }
}

export default App;
