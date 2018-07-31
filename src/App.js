import React, { Component } from "react";
import "./App.css";
import Meteors from "./components/Meteors";

class App extends Component {
  state = {
    meteors: []
  };

  render() {
    console.log("rendered");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meteor Tracker</h1>
        </header>
        <p className="App-intro">See where the meteors fall...</p>
        <Meteors meteors={this.state.meteors} />
      </div>
    );
  }
  componentDidMount = async () => {
    console.log("mounted");
    fetch(`https://data.nasa.gov/resource/y77d-th95.json?$limit=50000`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          meteors: data
        })
      );
  };
}

export default App;
