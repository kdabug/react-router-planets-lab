import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import PlanetDetail from "./components/PlanetDetail";
import PlanetList from "./components/PlanetList";
import RandomPlanet from "./components/RandomPlanet";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import {
  fetchPlanets,
  fetchRandomPlanet,
  submitPlanet
} from "./service/planets";

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.addPlanet = this.addPlanet.bind(this);
    this.state = {
      planets: [],
      randomPlanet: [],
      name: "",
      num_moons: "",
      color: ""
    };
  }

  async fetchAllPlanets() {
    const planets = await fetchPlanets();
    const randomPlanet = await fetchRandomPlanet();
    console.log("this is randomPlanet", randomPlanet);
    console.log("this is planets", planets);
    this.setState({
      planets: planets,
      randomPlanet: randomPlanet
    });
  }
  async componentDidMount() {
    this.fetchAllPlanets();
  }

  handleChange(e) {
    // e.preventDefault();

    const { name, value } = e.target;
    console.log("target", name);
    this.setState({
      [name]: value
    });
  }

  async addPlanet() {
    const planets = await fetchPlanets();
    alert(`Thank you for submitting ${this.state.name}.`);
    this.setState({
      planets: planets,
      name: "",
      num_moons: "",
      color: ""
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, num_moons, color } = this.state;
    const newPlanet = {
      name: name,
      num_moons: num_moons,
      color: color
    };
    await submitPlanet(newPlanet);
    this.addPlanet();
  }

  async handleRandomButton(e) {
    e.preventDefault();
    this.fetchAllPlanets();
  }

  render() {
    console.log("state: ", this.state);
    return (
      <div className="App">
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/planetList">Planet List</Link>
          <Link to="/randomPlanet">Random Planet</Link>
          <Link to="/submitPlanet">Submit Your Planet</Link>
        </nav>
        <main>
          <Route exact path="/" component={Welcome} />
          <Route
            path="/planetList"
            render={props => (
              <PlanetList {...props} planets={this.state.planets} />
            )}
          />
          <Route
            path="/randomPlanet"
            render={props => (
              <RandomPlanet
                {...props}
                randomPlanet={this.state.randomPlanet}
                onButton={this.handleRandomButton}
              />
            )}
          />
          <Route
            path="/submitPlanet"
            render={props => (
              <Form
                {...props}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                name={this.state.name}
                num_moons={this.state.num_moons}
                color={this.state.color}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
