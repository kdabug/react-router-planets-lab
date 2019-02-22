import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import PlanetDetail from "./components/PlanetDetail";
import PlanetList from "./components/PlanetList";
import RandomPlanet from "./components/RandomPlanet";
import Welcome from "./components/Welcome";
import fetchPlanets from "./service/planets";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    };
  }

  async componentDidMount() {
    const planets = await fetchPlanets();
    this.setState({
      planets: planets
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" component={Welcome} />
          <Route
            path="/planetList"
            component={props => (
              <PlanetList {...props} planets={this.state.planets} />
            )}
          />
          <Route path="/randomPlanet" component={RandomPlanet} />
        </main>
      </div>
    );
  }
}

export default App;
